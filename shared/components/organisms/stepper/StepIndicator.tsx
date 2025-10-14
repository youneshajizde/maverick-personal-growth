import React from "react";
import { useStepper } from "./root";

const StepIndicator = () => {
  const { steps, currentStep } = useStepper();
  const stepsLength = steps.length;

  return (
    <div className="relative flex items-center justify-between w-full">
      <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-muted" />

      <div
        className="absolute top-1/2 left-0 h-[2px] -translate-y-1/2 bg-primary transition-all duration-300"
        style={{
          width: `${(currentStep / (stepsLength - 1)) * 100}%`,
        }}
      />

      {steps.map((_, i) => (
        <span
          key={i}
          className={`relative z-10 flex size-8 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors
            ${
              i <= currentStep
                ? "bg-primary text-white border-primary"
                : "border-muted-foreground text-muted-foreground"
            }`}
        >
          {i + 1}
        </span>
      ))}
    </div>
  );
};

export default StepIndicator;
