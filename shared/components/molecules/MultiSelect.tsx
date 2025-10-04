"use client";

import { OptionT } from "@/shared/constants/shared.constants";
import { cn } from "@/shared/utils/functions";
import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";

interface MultiSelectProps {
  label?: string;
  options?: OptionT[];
  className?: string;
}

const MultiSelect = ({ label, options, className }: MultiSelectProps) => {
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      {label && <label className="font medium text-sm mb-1.5">{label}</label>}

      <div className={cn("relative w-full", className)}>
        <button
          onClick={openHandler}
          className="btn btn-white f-align justify-between gap-3 w-full transition-all duration-200"
        >
          <span>something</span>
          <ChevronDownIcon
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            size={17}
          />
        </button>

        <ul
          className={`absolute top-full mt-1 w-full bg-white rounded-xl border border-gray-200 shadow-lg p-3 z-30 max-h-60 overflow-auto space-y-1 transition-all duration-200 ease-in-out ${
            open ? "opacity-100 -translate-y-2" : "opacity-0 translate-y-0"
          }`}
        >
          {options?.map((opt, i) => (
            <li
              className="cursor-pointer px-3 py-2 truncate text-sm text-gray-700 rounded-lg transition-colors duration-150 hover:bg-gray-100"
              key={i}
            >
              {opt.value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MultiSelect;
