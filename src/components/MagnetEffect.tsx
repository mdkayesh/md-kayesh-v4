"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ReactNode, useLayoutEffect, useRef } from "react";

type MagnetEffectProps = {
  children: ReactNode;
  className?: string;
};

const MagnetEffect = ({ children, className }: MagnetEffectProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context((self) => {
      self.add("onMouseMove", (e: globalThis.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = element.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        gsap.to(element, {
          x: x / 2,
          y: y / 2,
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
        });
      });

      self.add("onMouseLeave", () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
        });
      });
    }, ref);

    const handleMouseMove = (e: globalThis.MouseEvent) => ctx.onMouseMove(e);
    const handleMouseLeave = () => ctx.onMouseLeave();

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ctx.revert();
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "hover-magnet-container w-fit h-fit max-w-fit max-h-fit will-change-transform",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MagnetEffect;
