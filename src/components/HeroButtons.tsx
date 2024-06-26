"use client";

import React from "react";
import CustomButton from "./CustomButton";
import gsap from "gsap";

const HeroButtons = () => {
  return (
    <div className="flex mt-8 gap-4 pointer-events-auto">
      <CustomButton
        asChild
        btnContainerClass="border-gray-600 dark:bg-primary"
        hoverBgClass="bg-accent"
      >
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </CustomButton>

      <CustomButton
        btnContainerClass="border-gray-600"
        onClick={() => {
          gsap.to(window, {
            scrollTo: "#recent-works",
            duration: 2,
            ease: "power3.in",
          });
        }}
      >
        Portfolio
      </CustomButton>
    </div>
  );
};

export default HeroButtons;
