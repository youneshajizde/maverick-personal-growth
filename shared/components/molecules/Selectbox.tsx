"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/shared/utils/functions";

interface OptionT {
  value: string;
  label: string;
}

interface SelectboxProps {
  options: OptionT[];
  label?: string;
  className?: string;
  value: string; // we store the "value" only
  onChange: (val: string) => void;
}

const Selectbox = ({ options, label, className, value, onChange }: SelectboxProps) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleSelect = (option: OptionT) => {
    onChange(option.value);
    setOpen(false);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("relative w-full", className)} ref={selectRef}>
      {label && <label className="font-medium text-sm mb-1 block">{label}</label>}

      <button
        onClick={toggleOpen}
        className="btn btn-white f-align justify-between gap-3 w-full transition-all duration-200"
        aria-expanded={open}
      >
        <span className="text-sm truncate">
          {selectedOption ? selectedOption.label : "Select..."}
        </span>
        <ChevronDownIcon
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          size={17}
        />
      </button>

      <ul
        className={`absolute top-full mt-1 w-full bg-white rounded-xl border border-gray-200 shadow-lg p-3 z-30 max-h-60 overflow-auto space-y-1 transition-all duration-200 ease-in-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => handleSelect(option)}
            className={cn(
              "cursor-pointer px-3 py-2 truncate text-sm text-gray-700 rounded-lg transition-colors duration-150 hover:bg-gray-100",
              value === option.value && "bg-secondary text-white hover:bg-opacity-90"
            )}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selectbox;
