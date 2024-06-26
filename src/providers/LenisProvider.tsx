"use client";

import React, { useLayoutEffect } from "react";

const LenisProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useLayoutEffect(() => {
    (async () => {
      const Locomotive = (await import("locomotive-scroll")).default;
      const locomotive = new Locomotive({});
    })();
  }, []);

  return <div className="wrapper">{children}</div>;
};

export default LenisProvider;
