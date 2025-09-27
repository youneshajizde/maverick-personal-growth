import { cn } from "@/shared/utils/functions";
import React, { ReactNode } from "react";

type ColorProps = {
  color: "error" | "success" | "warning";
  className?: string;
  children: ReactNode;
};

const Placeholder = ({ color, className, children }: ColorProps) => {
  const colorVariants: Record<ColorProps["color"], string> = {
    error: "bg-danger/30 border-danger text-danger",
    success: "bg-progress/30 border-progress text-success",
    warning: "bg-warning/5 border-warning text-warning",
  };
  return (
    <div
      className={cn(`px-6 py-3 w-full rounded-xl text-center border ${colorVariants[color]}`, className)}
    >
      {children}
    </div>
  );
};

export default Placeholder;
