import ContactForm from "@/components/ContactForm";
import FooterBottom from "@/components/FooterBottom";
import MagnetEffect from "@/components/MagnetEffect";
import { socials } from "@/data/navlinks";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="contact page-up">
      <div className="container pt-32 pb-20">
        <div className="flex gap-16 w-full items-end">
          <h1 className="text-[clamp(2.3rem,_6vw_,6.8rem)] font-medium leading-[1] w-full md:w-2/3">
            <span className="flex gap-3 items-center">
              <Image
                src={"/me.png"}
                width={50}
                height={50}
                alt="md kayesh"
                className="rounded-full object-cover bg-foreground w-10 h-10 block md:hidden"
              />
              Let&apos;s start a
            </span>
            {/* <br /> */}
            <span>project together</span>
          </h1>

          <div className="w-full hidden md:block md:w-1/3">
            <Image
              src="/me.png"
              width={150}
              height={150}
              className="rounded-full aspect-square w-20 h-20 object-cover bg-gray-200"
              alt="md kayesh"
            />
          </div>
        </div>

        <div className="flex mt-20 gap-16 w-full flex-col-reverse md:flex-row">
          <ContactForm />
          {/* right */}
          <div className="right md:w-1/3">
            <h4 className="uppercase text-muted-foreground text-xs font-medium -mt-1">
              CONTACT DETAILS
            </h4>
            <MagnetEffect className="font-medium mt-3">
              <a
                href="mailto:mdkayesh777@gmail.com"
                className="hover-underline"
              >
                mdkayesh777@gmail.com
              </a>
            </MagnetEffect>
            <MagnetEffect className="font-medium mt-2">
              <a href="tel:+8801734909372" className="hover-underline">
                +8801734909372
              </a>
            </MagnetEffect>

            <h4 className="uppercase text-muted-foreground text-xs font-medium mt-10">
              BUSINESS DETAILS
            </h4>
            <p className="font-medium mt-3">Md Kayesh</p>
            <p className="font-medium mt-2">Front End Developer</p>
            <p className="font-medium mt-2">Location: Dhaka, Bangladesh</p>

            <h4 className="uppercase text-muted-foreground text-xs font-medium mt-10">
              Socials
            </h4>

            <ul>
              {socials.map((l, i) => (
                <li key={i}>
                  <MagnetEffect className="mt-3 font-medium">
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-underline"
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
      <FooterBottom />
      <br />
    </section>
  );
};

export default Contact;
