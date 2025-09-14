"use client";

import React, { ReactNode, useState } from "react";
import { useSheet } from "./SheetRoot";
import { createPortal } from "react-dom";

const SheetBody = ({ children }: { children: ReactNode }) => {
  const { open, setOpen } = useSheet();
  const [show , setShow] = useState(false)

  if(!open) return null
  return createPortal(
    <div className="fixed z-50 inset-0 flex items-end justify-center">
      <div
        onClick={() => setOpen(false)}
        className="absolute bg-black/30 backdrop-blur-sm inset-0"
      />

      <div
        className={`w-full animate-slideUp bg-white z-50 overflow-y-auto transform transition-transform duration-700 ease-in-out min-h-[40vh] rounded-t-3xl p-3 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {children}
      </div>
    </div> , document.body
  );
};

export default SheetBody;
