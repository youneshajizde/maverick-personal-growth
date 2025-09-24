import React, { ReactNode } from "react";
import CloseModalBtn from "./CloseModalBtn";

const ModalHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white f-align justify-between">
      <p className="font-medium text-lg">{children}</p>

      <CloseModalBtn />
    </div>
  );
};

export default ModalHeader;
