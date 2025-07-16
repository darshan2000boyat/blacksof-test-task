"use client";

import { motion } from "framer-motion";
import React, { useEffect } from "react";

type StickyHeadingProps = {
  triggerAnimation: boolean;
};

const StickyHeading: React.FC<StickyHeadingProps> = ({ triggerAnimation }) => {
    useEffect(() => {
        console.log("StickyHeading mounted", triggerAnimation);
    }, [triggerAnimation]);
  return (
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
  );
};

export default StickyHeading;
