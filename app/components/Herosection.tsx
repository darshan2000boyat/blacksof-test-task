"use client";
import React from "react";
import { motion } from "framer-motion";

function Herosection() {
  return (
    <div>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full -z-10 opacity-20"
      >
        <source
          src="/assets/automotive.224e7418884105595114.mp4"
          type="video/mp4"
        />
      </video>

      {/* Hero Content with fade-up animation */}
      <motion.span
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col items-center justify-center h-[100vh] text-white text-center font-manrope pb-32"
      >
        <h5 className="leading-16 font-normal text-xl">Performance in motion</h5>
        <h1 className="text-4xl font-semibold leading-10">
          Soft Trims and <span className="text-[#03bfff]">NVH Solutions</span>
        </h1>
        <h3 className="text-4xl font-light">for seamless rides</h3>
      </motion.span>
    </div>
  );
}

export default Herosection;
