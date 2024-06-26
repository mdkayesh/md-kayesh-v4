"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

// gsap.registerPlugin(ScrollTrigger);

const ImagePinAnim = ({ images }: { images: string[] }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!ref.current) return;
      const _images = gsap.utils.toArray(
        ".img:not(:first-child)"
      ) as HTMLImageElement[];

      gsap.set(_images, {
        clipPath: `polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)`,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: () => `+=${ref.current!.offsetHeight * _images.length}px`,
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      _images.forEach((img) => {
        tl.to(img, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power1.inOut",
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="image-container w-full relative overflow-hidden -mt-14 min-h-screen"
    >
      <div className="absolute w-full lg:w-[85%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {images?.map((img, i) => (
          <div
            className="img absolute top-1/2 left-0 aspect-[3/2] w-full -translate-y-1/2 overflow-hidden"
            key={i}
          >
            <Image
              src={img}
              alt={"md kayesh's project images"}
              width={1000}
              height={700}
              className="page-up w-full h-full object-cover bg-secondary"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagePinAnim;
