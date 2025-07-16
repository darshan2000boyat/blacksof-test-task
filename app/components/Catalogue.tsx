"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { FaPlay, FaPause } from "react-icons/fa";

const DATA = {
  PV: {
    title: "Passenger vehicles",
    desc: "Revving up innovation from interior to exterior.",
    videos: ["pv1.mp4", "pv2.mp4", "pv3.mp4", "pv4.mp4", "pv5.mp4"],
    modules: ["Complete Body", "Front", "Cabin", "Trunk", "Exterior"],
    tabs: [
      "pv1_tab.png",
      "pv2_tab.png",
      "pv3_tab.png",
      "pv4_tab.png",
      "pv5_tab.png",
    ],
  },
  CV: {
    title: "Commercial vehicles",
    desc: "Advancing engineering for heavy-duty vehicles.",
    videos: ["cv1.mp4", "cv2.mp4", "cv3.mp4"],
    modules: ["Complete Body", "Engine", "Cabin"],
    tabs: ["svg/cv1.svg", "svg/cv2.svg", "svg/cv3.svg"],
  },
};

export default function Catalogue() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Observe scrollArea visibility to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggerAnimation) {
          setTriggerAnimation(true);
        }
      },
      {
        threshold: 0.01,
      }
    );

    const el = scrollAreaRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [triggerAnimation]);

  const [activeSection, setActiveSection] = useState<"PV" | "CV">("PV");
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSteps = DATA.PV.videos.length + DATA.CV.videos.length;

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (userHasInteracted) return;

      const idx = Math.floor(v * totalSteps);
      if (idx < DATA.PV.videos.length) {
        setActiveSection("PV");
        setActiveIndex(idx);
      } else {
        setActiveSection("CV");
        setActiveIndex(idx - DATA.PV.videos.length);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, userHasInteracted]);

  const handleSectionChange = (section: "PV" | "CV") => {
    setActiveSection(section);
    setActiveIndex(0);
    setUserHasInteracted(true);
    setTimeout(() => setUserHasInteracted(false), 1000);
  };

  // Handle play/pause toggle
  const togglePlayPause = () => {
    const video = videoRefs.current[activeIndex];
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  // Initialize video references and events
  useEffect(() => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;

    // Reset play state and progress when video changes
    setIsPlaying(true);
    setProgress(0);
    video.play();

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    // Handle video end
    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(100);
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('ended', handleEnded);
    };
  }, [activeIndex, activeSection]);

  // Update video refs array
  const setVideoRef = (el: HTMLVideoElement | null, index: number) => {
    videoRefs.current[index] = el;
  };

  return (
    <div ref={wrapperRef} className="w-full bg-black text-white font-manrope">
      <div className="relative h-[2500vh]">
        {/* Sticky Heading */}
        <div className="sticky top-0 h-screen flex items-center justify-center z-50">
          <motion.h2
            initial={{ y: 0 }}
            animate={triggerAnimation ? { y: -300 } : { y: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="text-4xl text-center w-1/2"
          >
            Evolving the drive with{" "}
            <span className="font-bold">360-degree</span> nonwoven solutions
          </motion.h2>
        </div>

        {/* Trigger Section */}
        <div className="h-[100vh]" />

        {/* Scroll Trigger Area */}
        <div ref={scrollAreaRef} className="h-[50vh]" />

        {/* Carousel Section */}
        <motion.div
          className="sticky top-0 z-50 flex flex-col h-screen"
          initial={{ y: 500, opacity: 0 }}
          animate={
            triggerAnimation
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {
                  y: 500,
                  opacity: 0,
                }
          }
          transition={{
            duration: 1.4,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          <div className="flex-1 flex justify-evenly bg-transparent text-white">
            {/* Left Panel */}
            <div className="w-[35%] h-full p-16 flex flex-col justify-center items-center">
              <div>
                <div className=" pl-4 text-start">
                <div
                  className="slider-parent absolute left-35 top-[17.5rem] h-[30%] w-[2px] rounded-md bg-gray-500"
                  style={{ transform: "translate(0px, 0px)" }}
                >
                  <div
                    className="slider-height h-[50%] w-[2px] bg-white rounded-md"
                    style={{ transform: `translate(0px, ${activeSection === "CV" ? "100" : "0"}%)`, transition: "transform 0.5s ease" }}
                  /></div>
                  <button
                    className="h-[100px] text-left w-full relative z-100 cursor-pointer"
                    onClick={() => handleSectionChange("PV")}
                  >
                    <h2
                      className={`text-3xl font-semibold ${
                        activeSection === "PV" ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      Passenger vehicles
                    </h2>
                    <p
                      className={`mt-1 text-xl w-[70%] ${
                        activeSection === "PV" ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      Revving up innovation from interior to exterior.
                    </p>
                  </button>

                  <button
                    className="h-[100px] text-left w-full relative z-100 cursor-pointer"
                    onClick={() => handleSectionChange("CV")}
                  >
                    <h2
                      className={`text-3xl font-semibold mt-4 ${
                        activeSection === "CV" ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      Commercial vehicles
                    </h2>
                    <p
                      className={`mt-1 text-xl w-[60%] ${
                        activeSection === "CV" ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      Advancing engineering for heavy-duty vehicles.
                    </p>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="w-[45%] flex items-center justify-center relative">
              {DATA[activeSection].videos.map((video, idx) => (
                <video
                  key={video}
                  ref={(el) => setVideoRef(el, idx)}
                  autoPlay
                  loop={false}
                  muted
                  playsInline
                  className={`absolute max-w-full max-h-full transition-opacity duration-700 bg-transparent h-full ${
                    idx === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <source src={`/assets/${video}`} type="video/mp4" />
                </video>
              ))}
            </div>
          </div>

          {/* Module Buttons */}
          <div className="absolute bottom-16 right-[10rem]">
            <div className="flex space-x-8">
              {DATA[activeSection].modules.map((module, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex flex-col items-center gap-x-3 text-sm transition-opacity duration-300 ${
                    activeIndex === idx ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <Image
                    src={`/assets/${DATA[activeSection].tabs[idx]}`}
                    alt={module}
                    width={60}
                    height={60}
                  />
                  <span className="leading-3">{module}</span>
                </button>
              ))}
              {/* Play/Pause Button with Circular Progress */}
              <div className=" flex items-center justify-center pl-10">
                <button
                  onClick={togglePlayPause}
                  className="relative w-20 h-20 rounded-full flex items-center justify-center focus:outline-none"
                >
                  {/* Progress Circle */}
                  <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="30"
                      fill="none"
                      stroke="#333"
                      strokeWidth="4"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="30"
                      fill="none"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={283} // 2 * π * 45 ≈ 283
                      strokeDashoffset={283 - (progress * 283) / 100}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  
                  {/* Play/Pause Icon */}
                  <div className="absolute flex items-center justify-center w-16 h-16 bg-transparent bg-opacity-20 rounded-full">
                    {isPlaying ? (
                      <FaPause className="text-white" size={15} />
                    ) : (
                      <FaPlay className="text-white ml-1" size={15} />
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}