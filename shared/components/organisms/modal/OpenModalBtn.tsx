"use client";

import { ClassNameChildrenT } from "@/shared/types/global.types";
import { cn } from "@/shared/utils/functions";
import React from "react";
import { useModal } from "./Root";

const OpenModalBtn = ({ children, className }: ClassNameChildrenT) => {
    const {setOpen} = useModal()
    return (
    <button
      onClick={() => setOpen(true)}
      className={cn("rounded-lg bg-white p-3 text-sm", className)}
    >
      {children}
    </button>
  );
};

export default OpenModalBtn;
