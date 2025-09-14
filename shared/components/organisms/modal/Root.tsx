"use client"

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type ModalContextT = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const ModalContext = createContext<undefined | ModalContextT>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("sth is wrong with the modal context");
  }

  return context
};

export const ModalRoot = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
