"use client";

import { ChevronDownIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface SelectboxProps {
  options: { value: string; label: string }[];
}

const Selectbox = ({ options }: SelectboxProps) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState(options[1].label);
  const openHandler = () => {
    setOpen(!open);
  };

  const selectHandler = (item: string) => {
    setSelectedItem(item);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className="relative w-37">
      <button
        onClick={openHandler}
        className="bg-white f-align justify-between gap-3 rounded-xl p-3 w-37 transition-all duration-200"
        aria-expanded={open}
      >
        <span className="text-sm truncate">{selectedItem}</span>
        {open ? (
          <ChevronDownIcon
            className="transition-transform duration-300 rotate-180"
            size={17}
          />
        ) : (
          <ChevronDownIcon
            className="transition-transform duration-300"
            size={17}
          />
        )}
      </button>

      <ul
        className={`absolute top-full mt-1 w-full bg-white rounded-xl border border-gray-200 shadow-lg p-3 z-30 max-h-60 overflow-auto space-y-1 transition-all duration-200 ease-in-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto" // Visible: fade in + slide down
            : "opacity-0 -translate-y-2 pointer-events-none" // Hidden: fade out + slide up
        }`}
      >
        {options.map((option, i) => (
          <li
            key={i}
            className={`cursor-pointer px-3 py-2 truncate text-sm text-gray-700 rounded-lg transition-colors duration-150 hover:bg-gray-100 ${
              selectedItem === option.label
                ? "bg-secondary text-white hover:bg-opacity-90"
                : ""
            }`}
            onClick={() => selectHandler(option.label)}
            role="option"
            aria-selected={selectedItem === option.label}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selectbox;
