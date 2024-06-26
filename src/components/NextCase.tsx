"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import projects from "@/data/projects.json";
import Image from "next/image";
import useMouseFollower from "@/hooks/useMouseFollower";
import gsap from "gsap";
import Link from "next/link";
import { createSlug } from "@/lib/utils";
import CustomButton from "./CustomButton";

type NextCaseProps = {
  nextIndex: number;
};

const NextCase = ({ nextIndex }: NextCaseProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);
  const nextProject = projects[nextIndex];

  useLayoutEffect(() => {
    const container: HTMLDivElement | null = ref.current;
    if (!container) return;
    const ctx = gsap.context(() => {
      gsap.set(".img", { yPercent: 100 });

      gsap.to(".img", {
        yPercent: 60,
        scrollTrigger: {
          trigger: ref.current,
          start: "20% center",
          end: "+=200px",
          scrub: 1,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  useMouseFollower(ref, followerRef);

  return (
    <>
      {nextProject && (
        <div className="pb-20 w-full overflow-hidden">
          <div className="pt-20 relative group" ref={ref}>
            <Link
              href={`/works/${createSlug(nextProject.title)}`}
              className="absolute top-0 left-0 w-full h-full z-10"
            ></Link>
            <p className="text-center font-semibold">Next Case</p>
            <h1 className="font-semibold text-5xl md:text-7xl text-center mt-3 group-hover:opacity-80 transition-all duration-300">
              {nextProject.title}
            </h1>

            <div className="border-b-2 max-w-lg mx-auto -mt-24 overflow-hidden w-full">
              <div className="w-full group-hover:-translate-y-1/3 transition-all duration-300">
                <Image
                  className={`img aspect-[3/2] object-cover w-3/5 mx-auto border`}
                  width={600}
                  height={400}
                  src={nextProject.images[0]}
                  alt={nextProject.title}
                />
              </div>
            </div>
            <div
              ref={followerRef}
              className="absolute bg-primary text-white rounded-full"
            >
              <Link
                href={`/works/${createSlug(nextProject.title)}`}
                className="hidden justify-center items-center w-24 h-24 text-sm lg:flex"
              >
                <p className="text-center">Next Case</p>
              </Link>
            </div>
          </div>
        </div>
      )}

      <CustomButton btnContainerClass="mx-auto mb-7 bg-transparent text-muted-foreground hover:text-white">
        <Link href="/works" className="text-base">
          More works{" "}
          <span className="align-top text-xs">{projects.length}</span>
        </Link>
      </CustomButton>
    </>
  );
};

export default NextCase;
