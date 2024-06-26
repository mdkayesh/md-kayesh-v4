"use client";

import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

const PageCurve = () => {
  const ref = useRef(null);
  const pathname = usePathname();
  const isHidden = pathname === "/contact";
  useLayoutEffect(() => {
    if (isHidden) return;
    let timeout: NodeJS.Timeout;
    const ctx = gsap.context(() => {
      setTimeout(() => {
        gsap.to(ref.current, {
          height: 0,
          scrollTrigger: {
            trigger: ref.current,
            start: "top center",
            end: "+=300px",
            scrub: 0.5,
          },
        });
      }, 500);
    }, ref);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, [isHidden]);

  return (
    !isHidden && (
      <div
        ref={ref}
        className="absolute top-full left-0 h-28 w-full overflow-hidden z-10 will-change-[height]"
      >
        <div className="rounded-[50%] h-[550%] absolute left-1/2 w-[150%] -translate-x-1/2 scale-125 translate-y-[-102%] bg-background shadow-2xl"></div>
      </div>
    )
  );
};

export default PageCurve;
