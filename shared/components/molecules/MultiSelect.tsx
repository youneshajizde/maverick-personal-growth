"use client";

import { OptionT } from "@/shared/constants/shared.constants";
import { cn } from "@/shared/utils/functions";
import { ChevronDownIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface MultiSelectProps {
  label?: string;
  options: OptionT[];
  className?: string;
  value: string[];
  onChange: (val: string[]) => void; 
}

const MultiSelect = ({ label, options, className, value, onChange }: MultiSelectProps) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const multiSelectHandler = (item: string) => {
    if (value.includes(item)) {
      onChange(value.filter((v) => v !== item));
    } else {
      onChange([...value, item]);
    }
  };

  const openHandler = () => setOpen((prev) => !prev);

  return (
    <>
      {label && <label className="font-medium text-sm">{label}</label>}

      <div ref={selectRef} className={cn("relative w-full", className)}>
        <button
          onClick={openHandler}
          className={`btn btn-white f-align justify-between gap-3 w-full transition-all duration-200 ${
            label && "mt-1.5"
          }`}
        >
          <span className="truncate">{value.length ? value.join(" , ") : "Please select"}</span>
          <ChevronDownIcon className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} size={17} />
        </button>

        <ul
          className={`absolute top-full mt-1 w-full bg-white rounded-xl border border-gray-200 shadow-lg p-3 z-30 max-h-60 overflow-auto space-y-1 transition-all duration-200 ease-in-out ${
            open ? "opacity-100 -translate-y-2 pointer-events-auto" : "opacity-0 translate-y-0 pointer-events-none"
          }`}
        >
          {options.map((opt, i) => (
            <li
              key={i}
              onClick={() => multiSelectHandler(opt.value)}
              className={`cursor-pointer px-3 py-2 truncate text-sm text-gray-700 rounded-lg transition-colors duration-150 hover:bg-gray-100 ${
                value.includes(opt.value) && "bg-secondary text-white hover:bg-secondary"
              }`}
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
