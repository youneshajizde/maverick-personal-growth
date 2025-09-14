"use client";

import React from "react";
import { useModal } from "./Root";
import { XIcon } from "lucide-react";

const CloseModalBtn = () => {
  const { setOpen } = useModal();
  return (
    <button onClick={() => setOpen(false)}>
      <XIcon size={17} />
    </button>
  );
};

export default CloseModalBtn;
