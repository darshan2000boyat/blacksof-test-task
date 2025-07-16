"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";

import { DATA, SectionType } from "./constant";
import CatalogueLeftPanel from "./CatalogueLeftPanel";
import CatalogueVideoPanel from "./CatalogueVideoPanel";
import CatalogueModuleSelector from "./CatalogueModuleSelector";

export default function Catalogue() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const [activeSection, setActiveSection] = useState<SectionType>("PV");
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSteps = DATA.PV.videos.length + DATA.CV.videos.length;

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  // Observe scrollArea visibility to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggerAnimation) {
          setTriggerAnimation(true);
        }
      },
      { threshold: 0.01 }
    );
    const el = scrollAreaRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [triggerAnimation]);

  // Auto-scroll-based section switching
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

  const handleSectionChange = (section: SectionType) => {
    setActiveSection(section);
    setActiveIndex(0);
    setUserHasInteracted(true);
    setTimeout(() => setUserHasInteracted(false), 1000);
  };

  // Video control
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

  // Video progress tracking
  useEffect(() => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;

    setIsPlaying(true);
    setProgress(0);
    video.play();

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(100);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("ended", handleEnded);
    };
  }, [activeIndex, activeSection]);

  const setVideoRef = (el: HTMLVideoElement | null, index: number) => {
    videoRefs.current[index] = el;
  };

  return (
    <div ref={wrapperRef} className="w-full bg-black text-white font-manrope">
      <div className="relative h-[2500vh]">
        {/* Heading */}
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

        {/* Spacer */}
        <div className="h-[100vh]" />
        <div ref={scrollAreaRef} className="h-[50vh]" />

        {/* Carousel Section */}
        <motion.div
          className="sticky top-0 z-50 flex flex-col h-screen"
          initial={{ y: 500, opacity: 0 }}
          animate={
            triggerAnimation
              ? { y: 0, opacity: 1 }
              : { y: 500, opacity: 0 }
          }
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
        >
          <div className="flex-1 flex justify-evenly bg-transparent text-white">
            <CatalogueLeftPanel
              activeSection={activeSection}
              handleSectionChange={handleSectionChange}
            />
            <CatalogueVideoPanel
              activeSection={activeSection}
              activeIndex={activeIndex}
              setVideoRef={setVideoRef}
            />
          </div>

          <CatalogueModuleSelector
            activeSection={activeSection}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            isPlaying={isPlaying}
            togglePlayPause={togglePlayPause}
            progress={progress}
          />
        </motion.div>
      </div>
    </div>
  );
}
