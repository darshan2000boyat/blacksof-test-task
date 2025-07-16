"use client";

import VideoCarousel from "./CatalogueVideos";

type VehicleShowcaseProps = {
  activeSection: "PV" | "CV";
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

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

export default function VehicleShowcase({
  activeSection,
  activeIndex,
  setActiveIndex,
}: VehicleShowcaseProps) {
  return (
    <div className="sticky top-0 h-screen z-10 flex flex-col">
      <div className="flex-1 flex justify-evenly bg-black text-white">
        {/* Left Panel */}
        <div className="w-[35%] h-full p-16 flex flex-col justify-center items-center">
          <div>
            <div className="border-l-2 border-white pl-4 text-start">
              {(["PV", "CV"] as const).map((section) => (
                <button
                  key={section}
                  className="h-[100px] text-left"
                >
                  <h2
                    className={`text-3xl font-semibold mt-4 ${
                      activeSection === section ? "opacity-100" : "opacity-30"
                    }`}
                  >
                    {DATA[section].title}
                  </h2>
                  <p>{DATA[section].desc}</p>
                </button>
              ))}
            </div>
            <p className="mt-8 text-sm opacity-70 max-w-xs">
              {DATA[activeSection].desc}
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <VideoCarousel
          videos={DATA[activeSection].videos}
          activeIndex={activeIndex}
        />
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
  );
}
