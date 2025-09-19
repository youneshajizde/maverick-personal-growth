"use client";

import { createContext, useContext } from "react";

export type ToastType = "success" | "error" | "info";

export type ToastT = {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
  icon?: string;
};

type ToastContextT = {
  addToast: (message: string, type: ToastType, duration: 2000) => void;
  removeToast: (id: string) => void;
  toasts : ToastT[]
};

export const ToastContext = createContext<undefined | ToastContextT>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("use the toast inside its provider");
  }
  return context;
};



