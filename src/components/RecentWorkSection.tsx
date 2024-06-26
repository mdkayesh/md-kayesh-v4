"use client";

import recentWorks from "@/data/projects.json";
import useMouseFollower from "@/hooks/useMouseFollower";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import CustomButton from "./CustomButton";
import { createSlug } from "@/lib/utils";

const RecentWorkSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const mouseFollower = useRef<HTMLDivElement | null>(null);
  const imageContainer = useRef<HTMLDivElement | null>(null);

  useMouseFollower(ref, mouseFollower);

  const handleActiveIndex = (index: number) => {
    const image = imageContainer.current;
    const percent = 100 / recentWorks.length;
    if (!image) return;
    gsap.to(image, {
      yPercent: `-${index * percent}`,
      duration: 0.5,
      ease: "power3.inOut",
    });
  };

  return (
    <section
      className="recent-works -mt-32 container overflow-hidden py-20"
      id="recent-works"
    >
      <h1 className="font-semibold pb-4 text-muted-foreground uppercase">
        Recent Works
      </h1>
      <div className="relative" ref={ref}>
        <ul className="grid grid-cols-1 gap-4 md:gap-0 sm:grid-cols-2 md:grid-cols-1">
          {recentWorks.slice(0, 5).map((work, index) => (
            <li
              key={index}
              className="md:border-t-2 md:last:border-b-2"
              onMouseEnter={() => handleActiveIndex(index)}
            >
              <Link
                href={`/works/${createSlug(work.title)}`}
                className="py-7 px-default cursor-pointer group block"
              >
                <div className="img md:hidden pb-4 w-full">
                  <Image
                    src={work.images[0]}
                    width={600}
                    height={400}
                    alt={work.description}
                    className="w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                  <h1 className="font-medium text-5xl md:group-hover:-translate-x-2 md:group-hover:opacity-75 transition-all duration-150 line-clamp-1">
                    {work.title}
                  </h1>
                  <h3 className="flex justify-between items-center gap-4 border-t-2 pt-2 md:border-none md:pt-0 md:group-hover:translate-x-2 md:group-hover:opacity-75 transition-all duration-150">
                    <span>{work.category}</span>
                    <span>{work.year}</span>
                  </h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {/* mouse follower */}
        <div
          ref={mouseFollower}
          className="absolute w-[360px] max-h-[300px] aspect-[3/2] overflow-hidden rounded-lg cursor-pointer scale-0 pointer-events-none"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary w-[60px] h-[60px] font-semibold flex justify-center items-center z-10 text-white text-sm focus-within:scale-110 transition-all duration-150">
            View
          </div>
          <div className="w-full" ref={imageContainer}>
            {recentWorks.map((work, index) => (
              <Image
                className={`aspect-[3/2] object-cover hidden md:block`}
                key={index}
                width={600}
                height={400}
                src={work.images[0]}
                alt={work.title}
              />
            ))}
          </div>
        </div>
      </div>
      <CustomButton btnContainerClass="mt-10 mx-auto bg-transparent text-muted-foreground hover:text-white">
        <Link href="/works" className="text-base">
          More works{" "}
          <span className="align-top text-xs">{recentWorks.length}</span>
        </Link>
      </CustomButton>
    </section>
  );
};

export default RecentWorkSection;
