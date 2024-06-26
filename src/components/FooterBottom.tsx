import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import LocalTimer from "./LocalTimer";
import CustomButton from "./CustomButton";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { socials } from "@/data/navlinks";

const FooterBottom = () => {
  return (
    <div className="container pt-10">
      <div className="w-full flex justify-between items-center gap-6 flex-col-reverse md:flex-row">
        <div className="flex gap-6 items-center justify-between w-full md:w-fit whitespace-nowrap">
          <div>
            <h1 className="font-semibold text-muted-foreground uppercase text-xs">
              Version
            </h1>
            <p className="flex gap-1.5 items-center mt-3 text-sm">
              2024 <FaRegCopyright /> Edition
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-muted-foreground uppercase text-xs">
              Local Time
            </h1>
            <div className="flex gap-1.5 items-center mt-3 text-sm">
              <LocalTimer />
            </div>
          </div>
        </div>
        <div className="w-full md:w-fit">
          <h1 className="font-semibold text-muted-foreground uppercase text-xs">
            Socials
          </h1>
          <ul className="flex gap-4 items-center mt-3 justify-start">
            {socials.map((social, index) => (
              <li key={index}>
                <CustomButton
                  asChild
                  btnContainerClass="border-gray-600"
                  size={"icon"}
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                </CustomButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
