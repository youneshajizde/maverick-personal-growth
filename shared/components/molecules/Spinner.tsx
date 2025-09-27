import React from "react";
import { Loader2 } from "lucide-react";

interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 24, color = "text-gray-500", className = "" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 size={size} className={`animate-spin ${color}`} />
    </div>
  );
};

export default Spinner;
