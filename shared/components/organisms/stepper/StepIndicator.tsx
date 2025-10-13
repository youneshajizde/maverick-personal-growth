import React from "react";

const StepIndicator = () => {
  return (
    <div className="w-full justify-between f-align gap-6">
      {Array.from({ length: 3 }).map((_, i) => (
        
        <span className="btn btn-round size-8 f-center btn-primary btn-sm" key={i}>
          {i}
        </span>
      ))}
    </div>
  );
};

export default StepIndicator;
