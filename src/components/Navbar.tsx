"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase, ScrollToPlugin, ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegCopyright } from "react-icons/fa6";
import MagnetEffect from "./MagnetEffect";
import MobileNav from "./MobileNav";

export const navLinks = [
  {
    title: "Works",
    url: "/works",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CustomEase);
  });

  return (
    <header className="absolute top-0 left-0 w-full z-[99]">
      <nav
        className={`${
          pathname === "/" ? "text-white" : "text-foreground"
        } flex gap-5 justify-between items-center px-default py-5`}
      >
        <MagnetEffect>
          <Link
            href={"/"}
            className="logo [&_.p1]:hover:-translate-x-[67px] overflow-hidden w-[116px] whitespace-nowrap flex gap-1 items-center"
          >
            <p
              className={`${
                pathname === "/" ? "bg-accent" : "bg-background"
              } text-lg p-0.5 relative z-10`}
            >
              <FaRegCopyright />
            </p>
            <div className="p1 flex gap-1.5 transition-all duration-500 ease-inOutQuart">
              <p className="">Code by</p>
              <p className="">Md Kayesh</p>
            </div>
          </Link>
        </MagnetEffect>
        <ul className="hidden gap-6 items-center md:flex">
          {navLinks.map((link) => (
            <li key={link.url}>
              <MagnetEffect>
                <Link
                  href={link.url}
                  className="block py-2 px-3 relative group"
                >
                  {link.title}
                  <span
                    className={`${
                      pathname === link.url
                        ? "scale-100 opacity-100"
                        : "opacity-0 scale-0"
                    } ${
                      pathname === "/" ? "bg-white" : "bg-foreground"
                    } block absolute top-full left-1/2 -translate-x-1/2 min-w-2 min-h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-150 group-hover:scale-100`}
                  ></span>
                </Link>
              </MagnetEffect>
            </li>
          ))}
        </ul>

        <MobileNav />
      </nav>
    </header>
  );
};

export default Navbar;
