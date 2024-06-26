"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const galleryImages = [
  {
    img: "/img/gallery1.png",
  },
  {
    img: "/img/gallery2.png",
  },
  {
    img: "/img/gallery4.png",
  },
  {
    img: "/img/gallery3.png",
  },
  {
    img: "/img/gallery5.png",
  },
  {
    img: "/img/gallery6.png",
  },
  {
    img: "/img/gallery7.png",
  },
  {
    img: "/img/gallery8.png",
  },
];

const Gallery = () => {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.to(".slide1", {
      x: -150,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.from(".slide2", {
      x: -300,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "+=1000px",
        scrub: 1,
      },
    });
  });

  return (
    <section className="gallary" ref={ref}>
      <div className="w-full overflow-hidden pt-10 pb-14 container">
        <div className="slide1 flex gap-6 items-center">
          {galleryImages.map((item, index) => (
            <div
              className="bg-slate-600 shadow-lg aspect-[4/3] min-w-[70%] sm:min-w-[50%] md:min-w-[25%] max-w-[300px]"
              key={index}
            >
              <Image
                src={item.img}
                alt={item.img}
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="slide2 flex gap-6 items-center mt-7">
          {galleryImages.reverse().map((item, index) => (
            <div
              className="bg-slate-600 shadow-lg aspect-[4/3] min-w-[70%] sm:min-w-[50%] md:min-w-[25%] max-w-[300px]"
              key={index}
            >
              <Image
                src={item.img}
                alt={item.img}
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
