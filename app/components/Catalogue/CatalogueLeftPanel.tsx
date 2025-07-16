"use client";

import React from "react";
import { DATA, SectionType } from "./constant";

type Props = {
  activeSection: SectionType;
  handleSectionChange: (section: SectionType) => void;
};

const CatalogueLeftPanel = ({ activeSection, handleSectionChange }: Props) => {
  return (
    <div className="w-[35%] h-full p-16 flex flex-col justify-center items-center">
      <div className="pl-4 text-start relative">
        <div className="slider-parent absolute left-[-20px] top-4 h-full w-[2px] rounded-md bg-gray-500">
          <div
            className="slider-height h-[55%] w-[2px] bg-white rounded-md"
            style={{
              transform: `translate(0px, ${activeSection === "CV" ? "100" : "0"}%)`,
              transition: "transform 0.5s ease",
            }}
          />
        </div>

        {(["PV", "CV"] as SectionType[]).map((section) => (
          <button
            key={section}
            className="h-[100px] text-left w-full relative z-100 cursor-pointer py-8"
            onClick={() => handleSectionChange(section)}
          >
            <h2
              className={`text-3xl font-semibold ${
                activeSection === section ? "opacity-100" : "opacity-30"
              }`}
            >
              {DATA[section].title}
            </h2>
            <p
              className={`mt-1 text-xl ${
                activeSection === section ? "opacity-100" : "opacity-30"
              }`}
            >
              {DATA[section].desc}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CatalogueLeftPanel;
