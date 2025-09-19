"use client";

import { ReactNode, useState } from "react";
import { ToastContext, ToastT, ToastType } from "./ToastContext";
import ToastContainer from "./ToastContainer";

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastT[]>([]);

  const addToast = (message : string , type : ToastType , duration? : number) => {
    const id = Math.random().toString(36).substr(2,9)
    setToasts((prev) => [...prev , {id , message , type , duration: duration ?? 4000}])
  }

  const removeToast = (id : string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }


  return (
    <ToastContext.Provider value={{toasts , addToast , removeToast}}>
        {children}
        <ToastContainer toasts={toasts} removeToast={removeToast}/>
    </ToastContext.Provider>
  )
};
