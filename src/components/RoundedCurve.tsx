import React from "react";

const RoundedCurve = () => {
  return (
    <div className="relative z-50 overflow-hidden h-[100px] shadow-lg">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110%] h-full bg-background rounded-[50%]"></div>
    </div>
  );
};

export default RoundedCurve;
