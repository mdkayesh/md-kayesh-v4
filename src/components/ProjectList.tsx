import projects from "@/data/projects.json";
import useMouseFollower from "@/hooks/useMouseFollower";
import { createSlug } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type ProjectListProps = {
  category: string;
  layout: string;
};

const ProjectList = ({
  category = "all",
  layout = "list",
}: ProjectListProps) => {
  // const [showLayout, setShowLayout] = useState(false);
  const ref = useRef(null);
  const mouseFollower = useRef(null);
  const imageContainer = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.refresh();
      gsap.from(".list-items", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
      });

      if (layout === "list") return;
      gsap.from(".grid-item", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
      });
    },
    { scope: ref, dependencies: [layout, category] }
  );

  useMouseFollower(ref, mouseFollower);

  const filteredProjects = projects.filter((p) => {
    const buildWith = p.buildWith.map((b) => b.toLowerCase());

    if (category.toLowerCase() === "all") return true;
    return buildWith.includes(category.toLowerCase());
  });

  const handleActiveIndex = (index: number) => {
    const image = imageContainer.current;
    const percent = 100 / filteredProjects.length;
    if (!image) return;
    gsap.to(image, {
      yPercent: `-${index * percent}`,
      duration: 0.5,
      ease: "power3.inOut",
    });
  };

  return (
    <div ref={ref} className="list pt-14 max-w-full relative overflow-hidden">
      {layout === "list" && (
        <div className="list-items grid-cols-12 border-b-2 px-default py-default font-semibold text-muted-foreground hidden md:grid">
          <p className="col-span-3">Title</p>
          <p className="col-span-3">Services</p>
          <p className="col-span-4">Technologies</p>
          <p className="col-span-2 text-center">Year</p>
        </div>
      )}
      <ul className={`${layout === "list" ? "hidden md:block" : "hidden"}`}>
        {filteredProjects.map((p, i) => (
          <li
            key={i}
            className="list-items"
            onMouseEnter={() => handleActiveIndex(i)}
          >
            <Link
              href={`/works/${createSlug(p.title)}`}
              className="grid grid-cols-12 items-center py-default px-default border-b-2 transition-all duration-300 hover:scale-95 hover:opacity-80"
            >
              <h1 className="col-span-3 text-2xl font-medium">{p.title}</h1>
              <h1 className="col-span-3">{p.category}</h1>
              <p className="col-span-4 flex flex-wrap gap-2">
                {p.buildWith.map((b) => (
                  <span
                    key={b}
                    className="rounded-xl font-medium px-3 py-1 bg-secondary text-xs"
                  >
                    {b}
                  </span>
                ))}
              </p>
              <p className="col-span-2 text-center">{p.year}</p>
            </Link>
          </li>
        ))}
      </ul>

      {/* for mobile and grid layout */}
      <ul
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 ${
          layout === "grid" ? "block" : "md:hidden"
        }`}
      >
        {filteredProjects.map((p, i) => (
          <li key={i} className="grid-item">
            <Link href={`/works/${createSlug(p.title)}`}>
              <Image src={p.images[0]} alt={p.title} width={600} height={300} />
              <h2 className="my-3 text-3xl font-semibold">{p.title}</h2>
              <div className="flex justify-between items-center border-t-2 pt-3">
                <p className="text-lg md:text-xl">{p.category}</p>
                <p>{p.year}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* mouse follower */}
      <div
        ref={mouseFollower}
        className="absolute w-[360px] max-h-[300px] aspect-[3/2] overflow-hidden rounded-lg cursor-pointer scale-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary w-[60px] h-[60px] font-semibold flex justify-center items-center z-10 text-white text-sm focus-within:scale-110 transition-all duration-150">
          View
        </div>
        <div className="w-full" ref={imageContainer}>
          {filteredProjects.map((work, index) => (
            <Image
              className={`aspect-[3/2] object-cover ${
                layout === "list" ? "hidden md:block" : "hidden"
              }`}
              key={index}
              width={600}
              height={400}
              src={work.images[0]}
              alt={work.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
