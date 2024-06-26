"use client";
import { horizontalLoop } from "@/utils/functions";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const TextLoop = () => {
  const ref = useRef(null);
  const textWrapper = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    (_, contextSafe) => {
      const links = gsap.utils.toArray(".js-text") as HTMLElement[];
      let loop = horizontalLoop(links, {
        repeat: -1,
        speed: 1,
        draggable: true,
        reversed: false,
        paddingRight: parseFloat(
          `${gsap.getProperty(links[0], "marginRight", "px")}`
        ),
      });

      let currentScroll = 0;
      let scrollDirection = 1;

      const handleScroll = contextSafe
        ? contextSafe(() => {
            let direction = window.pageYOffset > currentScroll ? 1 : -1;
            if (direction !== scrollDirection) {
              gsap.to(loop, { timeScale: direction, overwrite: true });
              scrollDirection = direction;
            }
            currentScroll = window.pageYOffset;
          })
        : () => {};

      gsap.from(".wrapper", {
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top bottom",
          scrub: 1,
        },
        x: 200,
      });

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    },

    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className="w-full flex items-center text-8xl lg:text-[8vw] font-semibold whitespace-nowrap pointer-events-none"
    >
      <div className="wrapper">
        <h1
          ref={textWrapper}
          className="text-single relative whitespace-nowrap will-change-transform"
        >
          <span className="js-text inline-block mr-4 text-outline">
            - Md Kayesh
          </span>
          <span className="js-text inline-block mr-4">
            - Software Developer
          </span>
          <span className="js-text inline-block mr-4 text-outline py-5">
            - Md Kayesh
          </span>
          <span className="js-text inline-block mr-4">
            - Software Developer
          </span>
        </h1>
      </div>
    </div>
  );
};

export default TextLoop;
