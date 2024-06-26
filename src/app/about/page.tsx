"use client";

import ParralaxImg from "@/components/ParralaxImg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { GoArrowRight } from "react-icons/go";

const services = [
  {
    title: "UX/UI Design",
    description: `With a solid track record in design and developing websites and web applications, I deliver strong and user-friendly digital products for my valuable clients to grow there business. (Since 2020 only in combination with development)`,
  },
  {
    title: "Development",
    description: `I build scalable web applications from scratch that fit seamlessly with design. My focus is on complex algorithums, micro animations, transitions and interaction. Build with latest technologies like React, Next.js, Vue.js and Angular.`,
  },
  {
    title: "The full package",
    description: `A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.`,
  },
];

const About = () => {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.to(".section1", {
        scrollTrigger: {
          trigger: ".section1",
          scrub: 1,
          start: "bottom bottom",
          end: "bottom center",
        },
        backgroundColor: "#181A1D",
      });

      gsap.to(".text", {
        scrollTrigger: {
          trigger: ref.current,
          scrub: 1,
          start: "top top",
          end: "+=500px",
        },
        y: 80,
      });

      gsap.to(".arrow", {
        scrollTrigger: {
          trigger: ref.current,
          scrub: 1,
          start: "top top",
          end: "+=500px",
        },
        rotation: 45,
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="about py-32 page-up">
      <div className="section1 pb-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium transition-all">
              Helping brands thrive <br /> in the digital world
            </h1>
            <hr className="my-14 border-[1.5px] rounded-lg" />
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="left flex gap-6 md:w-1/3">
              <div className="text-2xl">
                <GoArrowRight className="arrow" />
              </div>
              <div className="text">
                <p>
                  I help companies from all over the world with tailor-made
                  solutions. With each project, I push my work to new horizons,
                  always putting quality first.
                </p>

                <p className="mt-4 text-muted-foreground">
                  Always exploring...
                </p>
              </div>
            </div>
            <div className="md:w-2/3 aspect-[1/1.1] bg-gray-400">
              <ParralaxImg imgUrl="/me3.jpg" />
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-4xl font-medium">I can help you with ...</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              {services.map((s, i) => (
                <div key={i}>
                  <p className="border-b-2 text-muted-foreground pb-5">
                    0{i + 1}
                  </p>
                  <h2 className="text-2xl font-medium mt-5">{s.title}</h2>
                  <p className="mt-5">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-default max-w-4xl mx-auto flex flex-col md:flex-row gap-14 pt-20">
        <div className="md:w-1/2 bg-foreground aspect-[1/1.1]">
          <ParralaxImg imgUrl="/me.png" />
        </div>
        <div className="md:w-1/2 sticky top-5 right-0 h-fit">
          <div className="flex gap-1 font-medium text-xl">
            <Image
              src={"/vivasoft.png"}
              width={100}
              height={100}
              alt="vivasoft"
              className="w-10"
            />
            <span>Vivasoft</span>
          </div>
          <h2 className="text-2xl mt-4 font-medium">
            Front End Developer &apos;23 - 24
          </h2>
          <p className="mt-4">
            I am a proud member of the Awwwards International Jury, where I
            judge the best websites in the world using my expertise as a
            designer and developer. Micro animations and transitions have my
            full attention and get me thrilled with every move.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
