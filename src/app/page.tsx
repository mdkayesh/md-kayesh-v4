import AboutSection from "@/components/AboutSection";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import RecentWorkSection from "@/components/RecentWorkSection";

export default function Home() {
  // useGSAP(
  //   () => {
  //     const canvas = () => {
  //       const canvas = document.querySelector("canvas") as HTMLCanvasElement;
  //       const context = canvas.getContext("2d");

  //       canvas.width = window.innerWidth;
  //       canvas.height = window.innerHeight;

  //       window.addEventListener("resize", function () {
  //         canvas.width = window.innerWidth;
  //         canvas.height = window.innerHeight;
  //         render();
  //       });

  //       function files(index: number) {
  //         // var data = `
  //         // ./assets/male/male0300.png`;
  //         // return data.split("\n")[index];
  //         // return data;

  //         // https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/

  //         return `./male/male${index.toString().padStart(4, "0")}.png`;
  //       }

  //       const frameCount = 300;

  //       const images: HTMLImageElement[] = [];
  //       const imageSeq = {
  //         frame: 1,
  //       };

  //       for (let i = 0; i < frameCount; i++) {
  //         const img = new Image();
  //         img.src = files(i);
  //         images.push(img);
  //       }

  //       gsap.to(imageSeq, {
  //         frame: frameCount - 1,
  //         snap: "frame",
  //         ease: `none`,
  //         scrollTrigger: {
  //           scrub: 0.15,
  //           trigger: `canvas`,
  //           //   set start end according to preference
  //           start: `top top`,
  //           end: `600% top`,
  //           // scroller: ``,
  //         },
  //         onUpdate: render,
  //       });

  //       images[1].onload = render;

  //       function render() {
  //         scaleImage(images[imageSeq.frame], context);
  //       }

  //       function scaleImage(
  //         img: HTMLImageElement,
  //         ctx: CanvasRenderingContext2D | null
  //       ) {
  //         if (!ctx) return;
  //         var canvas = ctx.canvas;
  //         var hRatio = canvas.width / img.width;
  //         var vRatio = canvas.height / img.height;
  //         var ratio = Math.max(hRatio, vRatio);
  //         var centerShift_x = (canvas.width - img.width * ratio) / 2;
  //         var centerShift_y = (canvas.height - img.height * ratio) / 2;
  //         ctx.clearRect(0, 0, canvas.width, canvas.height);
  //         ctx.drawImage(
  //           img,
  //           0,
  //           0,
  //           img.width,
  //           img.height,
  //           centerShift_x,
  //           centerShift_y,
  //           img.width * ratio,
  //           img.height * ratio
  //         );
  //       }
  //       ScrollTrigger.create({
  //         trigger: "canvas",
  //         pin: true,
  //         // markers: true,
  //         // scroller: `#smooth-scroll`,
  //         //   set start end according to preference
  //         start: `top top`,
  //         end: `600% top`,
  //       });
  //     };

  //     canvas();
  //   },
  //   { scope: container }
  // );

  return (
    <main className="relative">
      <Hero />
      <div className="page-up">
        <AboutSection />
        <RecentWorkSection />
        <Gallery />
      </div>
    </main>
  );
}
