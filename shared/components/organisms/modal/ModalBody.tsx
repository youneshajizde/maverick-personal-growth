"use client";

import React, { ReactNode } from "react";
import { useModal } from "./Root";
import { createPortal } from "react-dom";
import { cn } from "@/shared/utils/functions";

const ModalBody = ({ children , className }: { children: ReactNode , className? : string}) => {
  const { setOpen, open } = useModal();

  if (!open) return null;

  return createPortal(
    <div className="inset-0 fixed f-center z-50">
      <div
        onClick={() => setOpen(false)}
        className="bg-black/30 absolute inset-0 backdrop-blur-sm"
      />

      <div
        className={cn(`${
          open ? "" : ""
        } animate-openModal bg-white w-[90%] max-w-md overflow-y-auto min-h-[350px] rounded-3xl z-30 p-3` , className)}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalBody;
