"use client"

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type SheetContextT = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const SheetContext = createContext<undefined | SheetContextT>(undefined);

export const useSheet = () => {
  const context = useContext(SheetContext);

  if (!context) {
    throw new Error("You should use the Sheet content inside the Sheet");
  }


  return context
};

export const SheetRoot = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
};
