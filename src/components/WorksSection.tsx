"use client";

import { useState } from "react";
import CustomButton from "./CustomButton";
import { LuLayoutGrid } from "react-icons/lu";
import { HiViewList } from "react-icons/hi";
import ProjectList from "./ProjectList";

const buttons = ["All", "Next.js", "React", "Vue", "Angular"];

const WorksSection = () => {
  const [activeBtn, setActiveBtn] = useState("All");
  const [activeLayout, setActiveLayout] = useState("list");

  const handleActiveBtn = (name: string) => {
    setActiveBtn(name !== activeBtn ? name : activeBtn);
  };

  return (
    <section>
      <div className="flex justify-between items-start md:items-center mt-10 gap-10 flex-col md:flex-row">
        <div className="flex gap-4 items-center uppercase flex-wrap">
          {buttons.map((btn) => (
            <CustomButton
              key={btn}
              className="capitalize"
              btnContainerClass={`${
                activeBtn === btn
                  ? "dark:bg-primary text-background"
                  : "bg-transparent text-foreground hover:text-background"
              }`}
              onClick={() => handleActiveBtn(btn)}
            >
              {btn}
            </CustomButton>
          ))}
        </div>
        {/* layout buttons */}
        <div className="gap-4 items-center hidden md:flex">
          <CustomButton
            btnContainerClass={
              activeLayout === "list"
                ? "dark:bg-primary text-background"
                : "bg-transparent text-foreground hover:text-white"
            }
            className="text-2xl w-16 h-16"
            size={"icon"}
            onClick={() => setActiveLayout("list")}
          >
            <HiViewList />
          </CustomButton>
          <CustomButton
            btnContainerClass={
              activeLayout === "grid"
                ? "dark:bg-primary text-background"
                : "bg-transparent text-foreground hover:text-white"
            }
            className="text-2xl w-16 h-16"
            size={"icon"}
            onClick={() => setActiveLayout("grid")}
          >
            <LuLayoutGrid />
          </CustomButton>
        </div>
      </div>
      {/* project lists */}
      <ProjectList layout={activeLayout} category={activeBtn} />
    </section>
  );
};

export default WorksSection;
