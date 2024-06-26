import gsap from "gsap";
import { MutableRefObject, useLayoutEffect } from "react";

const useMouseFollower = (
  ref: MutableRefObject<HTMLDivElement | null>,
  followerRef: MutableRefObject<HTMLDivElement | null>
) => {
  useLayoutEffect(() => {
    const container = ref.current;
    const follower = followerRef.current;
    if (!container) return;

    const ctx = gsap.context((self) => {
      self.add("onMouseMove", (e: globalThis.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top } = container.getBoundingClientRect();
        if (!follower) return;

        const mFollower = follower.getBoundingClientRect();
        const x = clientX - left - mFollower.width / 2;
        const y = clientY - top - mFollower.height / 2;

        gsap.to(follower, {
          scale: 1,
          left: x,
          top: y,
          duration: 0.3,
        });
      });

      self.add("onMouseLeave", () => {
        gsap.to(follower, {
          scale: 0,
          duration: 0.3,
        });
      });
    }, ref);

    const handleMouseMove = (e: globalThis.MouseEvent) => ctx.onMouseMove(e);
    const handleMouseLeave = () => ctx.onMouseLeave();

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ctx.revert();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseMove);
    };
  }, [ref, followerRef]);
};

export default useMouseFollower;
