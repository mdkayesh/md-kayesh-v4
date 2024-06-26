"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";
import TextLoop from "./TextLoop";

const text = `Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.`;
const text2 = `The combination of my passion for coding & interaction positions me in a unique place in the web development and programming world.`;
const textArray = text.split(" ");
const textArray2 = text2.split(" ");

const AboutSection = () => {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.from(".heading .letter", {
        scrollTrigger: {
          trigger: ".heading",
          start: "top 80%",
          end: "+=150px",
          scrub: 0.5,
        },
        opacity: 0,
        stagger: 0.02,
      });

      // =======
      gsap.from(".p .word", {
        scrollTrigger: {
          trigger: ".p",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        stagger: 0.05,
        duration: 0.4,
        opacity: 0,
        y: 10,
      });

      // btn

      gsap.from(".btn", {
        scrollTrigger: {
          trigger: ".btn",
          start: "top bottom",
          end: "+=300px",
          scrub: 1,
        },
        y: 100,
      });

      // end if function
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="about relative py-20 md:px-default">
      <div className="flex max-w-full overflow-hidden -rotate-1">
        <TextLoop />
      </div>
      <div className="flex gap-12 flex-col md:flex-row container mt-10">
        <div className="md:w-4/6">
          <h1 className="heading text-2xl font-medium">
            {textArray.map((word, index) => (
              <span key={index} className="inline-block pr-1.5 overflow-hidden">
                <span className="word inline-block">
                  {word.split("").map((l, i) => (
                    <span key={i} className="letter inline-block">
                      {l}
                    </span>
                  ))}
                </span>
              </span>
            ))}
          </h1>
        </div>
        <div className="md:w-2/6">
          <p className="p">
            {textArray2.map((word, index) => (
              <span key={index} className="inline-block pr-1 overflow-hidden">
                <span className="word inline-block">{word}</span>
              </span>
            ))}
          </p>
          <div className="btn mt-5">
            <CustomButton
              asChild
              btnContainerClass="mx-auto"
              variant="rounded"
              size="rounded"
            >
              <Link href={"/about"}>About Me</Link>
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
