import { createContext, ReactNode, useContext, useState } from "react";

export interface StepperContextProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  nextStep : () => void
  prevStep : () => void
  steps : ReactNode[]
}


const StepperContext = createContext<StepperContextProps | null>(null);

export const useStepper = () => {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error("use the stepper context inside wrapper");
  }

  return context;
};

export const StepperRoot = ({ children , steps }: { children: ReactNode , steps : ReactNode[] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);
  
  return (
    <StepperContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        nextStep,
        prevStep,
        steps
      }}
    >
      <div className="flex flex-col">{children}</div>
    </StepperContext.Provider>
  );
};
