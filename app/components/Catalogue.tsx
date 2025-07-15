"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";

const DATA = {
  PV: {
    title: "Passenger vehicles",
    desc: "Revving up innovation from interior to exterior.",
    videos: ["pv1.mp4", "pv2.mp4", "pv3.mp4", "pv4.mp4", "pv5.mp4"],
    modules: ["Complete Body", "Engine", "Cabin", "Interior", "Exterior"],
  },
  CV: {
    title: "Commercial vehicles",
    desc: "Advancing engineering for heavy-duty vehicles.",
    videos: ["cv1.mp4", "cv2.mp4", "cv3.mp4"],
    modules: ["Complete Body", "Engine", "Cabin"],
  },
};

export default function Catalogue() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

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
  }, [scrollYProgress]);

  return (
    <div ref={wrapperRef} className="w-full bg-black text-white font-manrope">
      <div className="relative h-[700vh]">
        {/* Sticky Heading - unchanged */}
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
        {/* Sticky Heading Ends Here */}

        {/* Trigger Section */}
        <div className="h-[100vh]" />

        {/* Scroll Trigger Area */}
        <div ref={scrollAreaRef} className="h-[50vh]" />

        {/* Modified Sticky Section */}
        <div className="sticky top-0 h-screen z-10 flex flex-col">
          <div className="flex-1 flex justify-evenly bg-black text-white">
            {/* Left Panel */}
            <div className="w-[35%] h-full p-16 flex flex-col justify-center items-center">
              <div>
                <div className="border-l-2 border-white pl-4 text-start">
                  <button className="h-[100px] text-left">
                    {" "}
                    <h2
                      className={`text-3xl font-semibold ${
                        activeSection === "PV" ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      Passenger vehicles
                    </h2>
                    <p>Revving up innovation from interior to exterior.</p>
                  </button>

                  <button className="h-[100px] text-left">
                    <h2
                      className={`text-3xl font-semibold mt-4 ${
                        activeSection === "CV" ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      Commercial vehicles
                    </h2>
                    <p>Revving up innovation from interior to exterior.</p>
                  </button>
                </div>
                <p className="mt-8 text-sm opacity-70 max-w-xs">
                  {DATA[activeSection].desc}
                </p>
              </div>
            </div>

            {/* Right Panel */}
            <div className="w-[45%] flex items-center justify-center relative">
              {DATA[activeSection].videos.map((video, idx) => (
                <video
                  key={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute max-w-full max-h-full transition-opacity duration-700 bg-black h-full"
                >
                  <source src={`/assets/${video}`} type="video/mp4" />
                </video>
              ))}
            </div>
          </div>

          {/* Module Buttons - positioned at bottom */}
          <div className="absolute bottom-16 right-[28rem]">
            <div className="flex space-x-8">
              {DATA[activeSection].modules.map((module, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex flex-col items-center gap-1 text-xs transition-opacity duration-300 ${
                    activeIndex === idx ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div
                    className={`w-8 h-8 border rounded-full flex items-center justify-center ${
                      activeIndex === idx
                        ? "bg-white text-black"
                        : "border-white"
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  <span>{module}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
