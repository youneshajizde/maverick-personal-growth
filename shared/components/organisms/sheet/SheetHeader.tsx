"use client";

import React, { ReactNode } from "react";
import SheetHandler from "./SheetHandler";

const SheetHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className="f-align flex-col space-y-6">
      <SheetHandler />

      <h2 className="text-xl font-medium">{children}</h2>
    </div>
  );
};

export default SheetHeader;
