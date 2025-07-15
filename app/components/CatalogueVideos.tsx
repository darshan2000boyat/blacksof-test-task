"use client";

import { useEffect, useRef, useState, forwardRef } from "react";
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

const CatalogueVideos = forwardRef<HTMLDivElement, {}>((_, wrapperRef) => {
  const [activeSection, setActiveSection] = useState<"PV" | "CV">("PV");
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSteps = DATA.PV.videos.length + DATA.CV.videos.length;

  const { scrollYProgress } = useScroll({
    target: wrapperRef as React.RefObject<HTMLElement>,
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
        {/* Trigger Section */}
        <div className="h-[100vh]" />

        {/* Scroll Trigger Area */}
        <div className="h-[500vh]">
          {/* Modified Sticky Section */}
          <div className="sticky top-0 h-screen z-10 flex flex-col">
            <div className="flex-1 flex justify-evenly bg-black text-white">
              {/* Left Panel */}
              <div className="w-[35%] h-full p-16 flex flex-col justify-center items-center">
                <div>
                  <div className="text-start">
                    {/* PV Button */}
                    <button className="h-[100px] text-left w-full">
                      <div
                        className={`pl-4 border-l-4 ${
                          activeSection === "PV"
                            ? "border-white"
                            : "border-white/20"
                        }`}
                      >
                        <h2
                          className={`text-3xl font-semibold ${
                            activeSection === "PV" ? "opacity-100" : "opacity-30"
                          }`}
                        >
                          Passenger vehicles
                        </h2>
                        <p
                          className={`text-sm ${
                            activeSection === "PV" ? "opacity-80" : "opacity-30"
                          }`}
                        >
                          Revving up innovation from interior to exterior.
                        </p>
                      </div>
                    </button>

                    {/* CV Button */}
                    <button className="h-[100px] text-left w-full mt-4">
                      <div
                        className={`pl-4 border-l-4 ${
                          activeSection === "CV"
                            ? "border-white"
                            : "border-white/20"
                        }`}
                      >
                        <h2
                          className={`text-3xl font-semibold ${
                            activeSection === "CV" ? "opacity-100" : "opacity-30"
                          }`}
                        >
                          Commercial vehicles
                        </h2>
                        <p
                          className={`text-sm ${
                            activeSection === "CV" ? "opacity-80" : "opacity-30"
                          }`}
                        >
                          Advancing engineering for heavy-duty vehicles.
                        </p>
                      </div>
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
                    className={`absolute max-w-full max-h-full transition-opacity duration-700 bg-black h-full ${
                      idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <source src={`/assets/${video}`} type="video/mp4" />
                  </video>
                ))}
              </div>
            </div>

            {/* Module Buttons */}
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
    </div>
  );
});

CatalogueVideos.displayName = "CatalogueVideos";

export default CatalogueVideos;
