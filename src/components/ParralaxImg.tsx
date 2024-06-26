"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

type ParralaxImgProps = {
  imgUrl?: string;
};

const ParralaxImg = ({ imgUrl = "" }: ParralaxImgProps) => {
  const ref = useRef(null);

  useGSAP(
    () => {
      const animation = gsap.fromTo(
        ".parralax",
        {
          yPercent: -50,
        },
        {
          yPercent: 30,
        }
      );

      ScrollTrigger.create({
        animation,
        trigger: ref.current,
        start: "top bottom",
        scrub: 1.3,
      });
    },
    { scope: ref }
  );

  return (
    <div className="parralax-con w-full h-full overflow-hidden" ref={ref}>
      <div className="parralax w-full h-full">
        <Image
          src={imgUrl}
          width={1000}
          height={1000}
          alt="mdkayesh"
          className="-mt-14 h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ParralaxImg;
