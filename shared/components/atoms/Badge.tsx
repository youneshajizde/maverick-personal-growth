import { cn } from "@/shared/utils/functions";
import React, { ReactNode } from "react";

interface BadgeProps {
  variant: "info" | "success" | "error";
  children: ReactNode;
  className?: string;
}

const Badge = ({ variant, children, className }: BadgeProps) => {
  const variants = {
    info: "bg-foreground text-black",
    success: "bg-progress text-white",
    error: "bg-danger text-white",
  };

  return (
    <span
      className={cn(
        `f-align rounded-lg text-sm p-1.5`,
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
