"use client";

import { ClassNameChildrenT } from "@/shared/types/global.types";
import { cn } from "@/shared/utils/functions";
import React from "react";
import { useSheet } from "./SheetRoot";

const OpenSheetBtn = ({ children, className }: ClassNameChildrenT) => {
  const { setOpen } = useSheet();
  return (
    <button
      onClick={() => setOpen(true)}
      className={cn("", className)}
    >
      {children}
    </button>
  );
};

export default OpenSheetBtn;
