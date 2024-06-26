import CustomButton from "@/components/CustomButton";
import ImagePinAnim from "@/components/ImagePinAnim";
import NextCase from "@/components/NextCase";
import PageCurve from "@/components/PageCurve";
import projects from "@/data/projects.json";
import { createSlug } from "@/lib/utils";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

export const generateStaticParams = async () =>
  projects.map((project) => ({ slug: createSlug(project.title) }));

const page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const singleProject = projects.find(
    (project) => createSlug(project.title) === slug
  );

  const { title, buildWith, link, images } = singleProject || {};

  const nextIndex =
    projects.findIndex((p) => p.title === singleProject?.title) + 1;

  return (
    <section className="work pt-32 relative">
      <div className="container">
        <div className="page-up">
          <h1 className="text-[clamp(40px,7vw,100px)] font-semibold">
            {title}
          </h1>
          <div className="grid gap-7 grid-cols-1 md:grid-cols-12 pt-12">
            <div className="col-span-4">
              <h4 className="text-muted-foreground uppercase text-sm">
                ROLE / SERVICES
              </h4>
              <hr className="my-6" />
              <p>{singleProject?.category}</p>
            </div>
            <div className="col-span-5">
              <h4 className="text-muted-foreground uppercase text-sm">
                Built with
              </h4>
              <hr className="my-6" />
              <ul className="flex flex-wrap text-sm gap-2">
                {buildWith?.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-2 items-center after:content-[''] after:h-1 after:w-1 after:bg-foreground after:rounded-full last:after:hidden"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-3">
              <h4 className="text-muted-foreground uppercase text-sm md:text-center">
                Github & Year
              </h4>
              <hr className="my-6" />
              <div className="flex gap-3 items-center justify-start md:justify-center">
                <span>{singleProject?.year} &</span>

                <CustomButton size={"icon"} asChild>
                  <a
                    href={singleProject?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg"
                  >
                    <FaGithub />
                  </a>
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
        <div className="page-up flex justify-end relative z-10 pr-10 pt-10">
          <CustomButton
            asChild
            btnContainerClass="dark:bg-primary"
            hoverBgClass="bg-background"
            variant="rounded"
            size={"rounded"}
            className="gap-1.5"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <span>Live Site</span>
              <span className="text-xl">
                <LuExternalLink />
              </span>
            </a>
          </CustomButton>
        </div>
        {/* image */}
        <ImagePinAnim images={images || []} />

        <NextCase nextIndex={nextIndex} />
      </div>
      <PageCurve />
    </section>
  );
};

export default page;
