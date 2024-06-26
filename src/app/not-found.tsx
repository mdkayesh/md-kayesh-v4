import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Ops page not found!</h1>
        <CustomButton asChild btnContainerClass="mx-auto mt-5">
          <Link href={"/"}>Home</Link>
        </CustomButton>
      </div>
    </div>
  );
};

export default NotFound;
