import Image from "next/image";
import HeroButtons from "./HeroButtons";
import Particles from "./Particles";

const Hero = () => {
  return (
    <section className="relative overflow-x-hidden overflow-y-contain">
      <div className="w-full h-full">
        <div className="h-full max-w-[100vw] text-accent-foreground overflow-hidden">
          <Particles />
          <div className="container py-32 flex flex-col lg:flex-row gap-10 items-center justify-center page-up select-none pointer-events-none h-full">
            <div
              className="w-full lg:w-3/5"
              data-scroll
              data-scroll-position="bottom"
              data-scroll-speed="-0.5"
            >
              <h3 className="text-xl font-medium">
                <span>
                  <span>👋</span> Hi, My Name is
                </span>
              </h3>
              <h1 className="text-5xl sm:text-7xl font-semibold mt-2">
                Md Kayesh
              </h1>
              <h2 className="text-4xl sm:text-5xl font-semibold mt-3 sm:mt-6 text-gray-300">
                I Love to build things for the web.
              </h2>
              <HeroButtons />
            </div>
            <div
              className="w-full lg:w-2/5 overflow-hidden h-fit rounded-tr-[50%] rounded-bl-[40%] max-w-[400px]"
              data-scroll
              data-scroll-position="bottom"
              data-scroll-speed="-0.5"
            >
              <Image
                src={"/me.png"}
                width={1000}
                height={1000}
                alt="md kayesh software engineer"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
