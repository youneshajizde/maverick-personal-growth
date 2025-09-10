import { cn } from "@/shared/utils/functions";
import React from "react";

interface OverviewCardProps {
  title: string;
  icon: React.ReactNode;
  value: number;
  unit?: string;
  className?: string;
}

const OverviewCard = ({
  title,
  icon,
  value,
  unit,
  className,
}: OverviewCardProps) => {
  return (
    <div
      className={cn("col-span-1 text-white flex flex-col justify-between h-auto rounded-4xl p-6 space-y-3 bg-secondary" , className)}
    >
      <div className="flex justify-between">
        <p className="font-semibold text-2xl">{title}</p>
        {icon}
      </div>

      <p className="text-3xl font-light flex items-end gap-1.5">
        {value}
        {unit && <span className="text-lg">{unit}</span>}
      </p>
    </div>
  );
};

export default OverviewCard;
