"use client";

import { FaPlay, FaPause } from "react-icons/fa";
import Image from "next/image";
import { DATA, SectionType } from "./constant";

type Props = {
  activeSection: SectionType;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  isPlaying: boolean;
  togglePlayPause: () => void;
  progress: number;
};

const CatalogueModuleSelector = ({
  activeSection,
  activeIndex,
  setActiveIndex,
  isPlaying,
  togglePlayPause,
  progress,
}: Props) => {
  return (
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

        {/* Play/Pause Button with Progress Ring */}
        <div className="flex items-center justify-center pl-10">
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
                strokeDasharray={283}
                strokeDashoffset={283 - (progress * 283) / 100}
                transform="rotate(-90 50 50)"
              />
            </svg>

            {/* Icon */}
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
  );
};

export default CatalogueModuleSelector;
