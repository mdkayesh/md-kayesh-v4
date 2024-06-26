"use client";

import { socials } from "@/data/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import CustomButton from "./CustomButton";
import MagnetEffect from "./MagnetEffect";
import { navLinks } from "./Navbar";
// absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2

const MobileNav = () => {
  const ref = useRef(null);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="menuButton delay md:hidden">menu</div>
      <div
        className={`${
          show || isOpen ? "scale-110" : "scale-0"
        } fixed top-4 right-5 transition-all duration-300 z-50`}
        ref={ref}
      >
        <CustomButton
          size={"icon"}
          btnContainerClass="dark:bg-secondary"
          className="w-12 h-12"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`${
              isOpen ? "gap-0" : "gap-1"
            } relative flex flex-col w-2/5 items-center justify-center`}
          >
            <span
              className={`${
                isOpen ? "-rotate-45" : "rotate-0"
              } block h-[1px] bg-foreground w-full rounded-lg transition-all duration-200`}
            />
            <span
              className={`${
                isOpen ? "rotate-45" : "rotate-0"
              } block h-[1px] bg-foreground w-full rounded-lg transition-all duration-200`}
            />
          </span>
        </CustomButton>
      </div>

      {isOpen && (
        <div
          className="overlay fixed top-0 left-0 w-full h-full bg-transparent z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        ref={ref}
        className={`mobile-nav ${
          isOpen ? "translate-x-0 nav-active" : "translate-x-[calc(100%+6vw)]"
        } max-w-[320px] w-full h-full bg-secondary fixed top-0 right-0 z-40 text-secondary-foreground`}
      >
        <div
          className={`curve ${
            isOpen ? "w-[0vw]" : "w-[6vw]"
          } h-full absolute top left-0 z-[-1]`}
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-[50%] h-[150%] w-[775%] bg-secondary translate-x-[-12.5%] z-[-1]"></div>
        </div>

        {/* ===== */}
        <div className="px-8 pt-9 pb-6 h-full flex flex-col justify-between">
          <div>
            <p className="font-semibold uppercase text-muted-foreground text-xs pt-3 pb-8 border-b-2 border-muted-foreground">
              Navigation
            </p>
            <ul className="mt-7">
              <li
                className={`nav-link ${
                  isOpen ? "translate-x-0" : "translate-x-20"
                } will-change-transform group`}
                onClick={() => setIsOpen(false)}
              >
                <MagnetEffect className="relative">
                  <div
                    className={`${
                      pathname === "/"
                        ? "scale-100"
                        : "scale-0 group-hover:scale-100"
                    } h-2 w-2 rounded-full bg-secondary-foreground absolute top-1/2 left-0 -translate-y-1/2 transition-all duration-200`}
                  />
                  <Link
                    href={"/"}
                    className="font-semibold text-4xl px-6 py-1 block"
                  >
                    Home
                  </Link>
                </MagnetEffect>
              </li>
              {navLinks.map((link, i) => (
                <li
                  key={i}
                  className={`nav-link ${
                    isOpen ? "translate-x-0" : "translate-x-20"
                  } will-change-transform group`}
                  onClick={() => setIsOpen(false)}
                >
                  <MagnetEffect className="relative">
                    <div
                      className={`${
                        pathname === link.url
                          ? "scale-100"
                          : "scale-0 group-hover:scale-100"
                      } h-2 w-2 rounded-full bg-secondary-foreground absolute top-1/2 left-0 -translate-y-1/2 transition-all duration-200`}
                    />
                    <Link
                      href={link.url}
                      className="font-semibold text-4xl px-6 py-1 block"
                    >
                      {link.title}
                    </Link>
                  </MagnetEffect>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="uppercase text-muted-foreground text-xs font-medium mt-10">
              Socials
            </h4>

            <ul className="flex gap-4 items-center">
              {socials.map((l, i) => (
                <li key={i}>
                  <MagnetEffect className="font-medium">
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-underline text-xs"
                    >
                      {l.title}
                    </a>
                  </MagnetEffect>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
