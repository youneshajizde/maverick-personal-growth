import { cn } from "@/shared/utils/functions";
import { CheckIcon } from "lucide-react";
import React, { useState } from "react";

interface RadioBtnProps {
  options: { value: string; label: string }[];
  className?: string;
  value?: string
  onChange?: (value: string) => void;
}

const Radiobtn = ({ options, className, onChange , value }: RadioBtnProps) => {
  const [selected, setSelected] = useState(value || "");

  const handleSelect = (val: string) => {
    setSelected(val)
    onChange?.(val)
  }

  return (
    <div className={cn(`f-align gap-6`, className)}>
      {options?.map((opt, i) => (
        <div
          onClick={() => handleSelect(opt.value)}
          key={i}
          className="f-align gap-1.5"
        >
          <span className="relative size-5 border border-secondary rounded-full">
            { selected === opt.value && <span className="bg-secondary size-full f-center absolute rounded-full">
              <CheckIcon className="text-white" size={15} />
            </span>}
          </span>
          <p>Female</p>
        </div>
      ))}
    </div>
  );
};

export default Radiobtn;
