import { StepperRoot } from "./root";
import Step from "./Step";
import StepBackBtn from "./StepBackBtn";
import StepIndicator from "./StepIndicator";
import StepNextBtn from "./StepNextBtn";

export const Stepper = Object.assign(StepperRoot, {
  BackBtn: StepBackBtn,
  NextBtn: StepNextBtn,
  Indicator: StepIndicator,
  Content: Step,
});
