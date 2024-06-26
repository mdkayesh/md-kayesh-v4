"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import CustomButton from "./CustomButton";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  const ref = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".btn", {
        x: -100,
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "90% bottom",
          scrub: 1.5,
        },
      });
    }, ref);

    return () => {
      ctx.revert();
    };
  }, []);

  // useEffect(() => {
  //   ScrollTrigger.refresh();
  //   return () => {};
  // }, [pathname]);

  const hideFooter = pathname === "/contact";

  return (
    <footer
      className={`${
        hideFooter ? "hidden" : "block"
      } w-full bg-accent text-accent-foreground overflow-hidden pb-10`}
      ref={ref}
    >
      <div className="w-full flex justify-center items-center lg:min-h-screen">
        <div
          className="w-full pt-20"
          data-scroll
          data-scroll-position="bottom"
          data-scroll-speed="-0.5"
        >
          <div className="max-w-4xl px-default mx-auto">
            <h1 className="font-medium text-5xl sm:text-6xl lg:text-6xl leading-[1.3]">
              <span className="flex gap-3 items-center">
                <Image
                  src={"/me.png"}
                  width={50}
                  height={50}
                  alt="md kayesh"
                  className="rounded-full object-cover bg-foreground block w-12 h-12"
                />
                Let&apos;s Work
              </span>
              <span>Together</span>
            </h1>
            <div className="h-0.5 bg-gray-700 w-full rounded-lg my-10 relative">
              <div className="btn w-fit h-fit absolute top-0 -translate-y-1/2 right-[16%] border-none">
                <CustomButton
                  asChild
                  btnContainerClass="dark:bg-primary"
                  hoverBgClass="bg-accent"
                  variant="rounded"
                  size={"rounded"}
                >
                  <Link href={"/contact"}>Get In Touch</Link>
                </CustomButton>
              </div>
            </div>
            <div className="flex gap-3 items-center flex-wrap">
              <CustomButton asChild btnContainerClass="border-gray-600">
                <a href="mailto:mdkayesh777@gmail.com">mdkayesh777@gmail.com</a>
              </CustomButton>

              <CustomButton asChild btnContainerClass="border-gray-600">
                <a href="tel:mdkayesh777@gmail.com">+8801734909372</a>
              </CustomButton>
            </div>
          </div>
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
