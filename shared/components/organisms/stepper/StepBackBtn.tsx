import { cn } from "@/shared/utils/functions";
import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { useStepper } from "./root";

const StepBackBtn = ({ className }: { className?: string }) => {
  const { prevStep, steps, currentStep } = useStepper();

  const isFirst = currentStep === 0 && true;

  return (
    <button
      disabled={isFirst}
      onClick={prevStep}
      className={cn(
        `btn btn-round text-sm btn-lg f-align gap-1.5 ${
          isFirst ? "bg-gray-300" : "btn-primary"
        }`,
        className
      )}
    >
      <ChevronLeftIcon size={17} />
      <span>Back</span>
    </button>
  );
};

export default StepBackBtn;
