import { cn } from "@/shared/utils/functions";
import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { useStepper } from "./root";

const StepNextBtn = ({ className }: { className?: string }) => {
  const { nextStep, steps, currentStep } = useStepper();

  const isLast = currentStep === steps.length - 1;

  return (
    <button
      disabled={isLast}
      onClick={nextStep}
      className={cn(
        `btn btn-round text-sm btn-lg f-align gap-1.5 ${
          isLast ? "bg-gray-300" : "btn-primary"
        }`,
        className
      )}
    >
      <span>Next</span>
      <ChevronRightIcon size={17} />
    </button>
  );
};

export default StepNextBtn;
