"use client";

import React from "react";
import { SectionType, DATA } from "./constant";

type Props = {
  activeSection: SectionType;
  activeIndex: number;
  setVideoRef: (el: HTMLVideoElement | null, idx: number) => void;
};

const CatalogueVideoPanel = ({ activeSection, activeIndex, setVideoRef }: Props) => {
  return (
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
  );
};

export default CatalogueVideoPanel;
