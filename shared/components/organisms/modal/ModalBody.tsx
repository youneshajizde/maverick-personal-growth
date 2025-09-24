"use client";

import React, { ReactNode } from "react";
import { useModal } from "./Root";
import { createPortal } from "react-dom";

const ModalBody = ({ children }: { children: ReactNode }) => {
  const { setOpen, open } = useModal();

  if (!open) return null;

  return createPortal(
    <div className="inset-0 fixed f-center z-50">
      <div
        onClick={() => setOpen(false)}
        className="bg-black/30 absolute inset-0 backdrop-blur-sm"
      />

      <div
        className={`${
          open ? "" : ""
        } animate-openModal bg-white w-[90%] max-w-md overflow-y-auto h-[300px] rounded-3xl z-30 p-3`}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalBody;
