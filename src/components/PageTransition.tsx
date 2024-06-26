"use client";

import gsap from "gsap";
import { CustomEase, ScrollTrigger } from "gsap/all";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";
import PageCurve from "./PageCurve";

type PageTransitionProps = {
  children: ReactNode;
  params?: {
    slug: string;
  };
};

const PageTransition = ({ children, params }: PageTransitionProps) => {
  const ref = useRef(null);
  const [text, setText] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    ScrollTrigger.refresh();
    const ctx = gsap.context(() => {
      CustomEase.create("customEase", "M0,0 C0.7,0 0.2,1 1,1");

      const tl = gsap.timeline({
        defaults: {
          ease: "customEase",
        },
      });

      tl.to(".loading-screen", {
        top: 0,
      });

      tl.to(
        ".curveTop",
        {
          height: 0,
        },
        "-=0.4"
      );

      tl.to(
        ".text",
        {
          y: 0,
          opacity: 1,
        },
        "-=0.3"
      );

      tl.to(".loading-screen", {
        top: "-100%",
      });

      tl.to(
        ".curveBottom",
        {
          height: 0,
          duration: 0.6,
        },
        "-=0.3"
      );

      tl.to(
        ".page-up",
        {
          y: 0,
          opacity: 1,
          duration: 1,
          onComplete: () => setText(false),
        },
        "-=0.8"
      );
    }, ref);

    return () => ctx.revert();
  }, [pathname]);

  enum _Path {
    "/" = "Home",
    "/about" = "About",
    "/contact" = "Contact",
    "/works" = "Works",
  }

  const hideCurve = pathname.startsWith("/works/");
  return (
    <div className="transition-Wrapper" ref={ref}>
      <div className="fixed w-full h-screen left-0 top-0 bg-transparent z-[999] overflow-hidden pointer-events-none">
        <div className="loading-screen relative left-0 top-[calc(100%+106px)] h-full w-full will-change-[top] bg-foreground">
          <div className="curveTop absolute top-1 left-0 h-24 w-full -translate-y-[99%] overflow-hidden">
            <div className="rounded-[50%] h-[750%] absolute left-1/2 w-[150%] -translate-x-1/2 scale-125 translate-y-[14%] bg-foreground"></div>
          </div>

          {/* text */}
          <p className="text-center absolute top-0 left-0 w-full h-full text-3xl font-semibold text-foreground z-20 flex justify-center items-center">
            <span className="text flex items-center gap-2 translate-y-3 opacity-0 will-change-transform text-background">
              {!text && (
                <span className="min-w-3 min-h-3 w-3 h-3 bg-background rounded-full"></span>
              )}
              <span>
                {text ? "Hello" : _Path[pathname as keyof typeof _Path]}
              </span>
            </span>
          </p>
          <div className="curveBottom absolute overflow-hidden top-[unset] bottom-0 left-0 h-24 w-full translate-y-[99%] will-change-[height]">
            <div className="rounded-[50%] h-[750%] absolute bottom-1 left-1/2 w-[150%] -translate-x-1/2 scale-125 translate-y-[-12%] bg-foreground"></div>
          </div>
        </div>
      </div>
      <div className="pageContainer relative">
        {children}
        {!hideCurve && <PageCurve />}
      </div>
    </div>
  );
};

export default PageTransition;
