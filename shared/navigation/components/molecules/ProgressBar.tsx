import React from 'react';

interface ProgressBarProps {
  percentage: number;
  bgColor?: string;
  fillColor?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  bgColor = 'bg-light',
  fillColor = 'bg-progress',
}) => {
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div className={`w-full h-2 rounded-full ${bgColor} overflow-hidden`}>
      <div
        className={`h-full ${fillColor} rounded-full transition-all duration-300`}
        style={{ width: `${clampedPercentage}%` }}
        role="progressbar"
        aria-valuenow={clampedPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

export default ProgressBar;