"use client";

import { OptionT } from "@/shared/constants/shared.constants";
import { cn } from "@/shared/utils/functions";
import { ChevronDownIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

interface SelectboxProps {
  options: OptionT[];
  paramKey?: string;
  label?: string;
  className?: string;
  value? : string
  onChange? : () => void

}

const Selectbox = ({
  options,
  label,
  className,
  paramKey

}: SelectboxProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter()
  const selectRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams()
  const [selectedItem, setSelectedItem] = useState(options[0]);

  const openHandler = () => {
    setOpen(!open);
  };

  const selectHandler = (option: { value: string; label: string }) => {
    setSelectedItem(option);
    setOpen(false);

    const params = new URLSearchParams(searchParams.toString())

    params.set(paramKey as string , option.value)

    router.push(`?${params.toString()}`)

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
    <>
     {label &&  <label htmlFor="" className="font-medium">{label}</label>}
      <div ref={selectRef} className={cn(`relative w-full`, className)}>
        <button
          onClick={openHandler}
          className="btn btn-white f-align justify-between gap-3 w-full transition-all duration-200"
          aria-expanded={open}
        >
          <span className="text-sm truncate">{selectedItem?.label}</span>
          <ChevronDownIcon
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
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
          {options.map((option, i) => (
            <li
              key={i}
              className={`cursor-pointer px-3 py-2 truncate text-sm text-gray-700 rounded-lg transition-colors duration-150 hover:bg-gray-100 ${
                selectedItem.value === option.value
                  ? "bg-secondary text-white hover:bg-opacity-90"
                  : ""
              }`}
              onClick={() => selectHandler(option)}
              role="option"
              aria-selected={selectedItem.value === option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Selectbox;
