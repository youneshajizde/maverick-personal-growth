"use client";

import { XIcon } from "lucide-react";
import { ToastT } from "./ToastContext";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

interface ToastContainerProps {
  toasts: ToastT[];
  removeToast: (id: string) => void;
}

const ToastContainer = ({ toasts, removeToast }: ToastContainerProps) => {
  return (
    <div className="fixed bottom-5 right-5 z-50 f-align flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className={`f-center gap-3 rounded-xl p-3 h-20  ${
              toast.type === "success"
                ? "bg-progress text-white"
                : toast.type === "error"
                ? "bg-red-400 text-white"
                : toast.type === "info"
                ? "bg-white"
                : "bg-accent"
            }`}
          >
            {toast.icon && <span>{toast.icon}</span>}
            <span>{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="btn btn-ghost btn-sm"
            >
              <XIcon />
            </button>

            {typeof toast.duration === "number" && (
              <AutoDismiss
                duration={toast.duration}
                id={toast.id}
                removeToast={removeToast}
              />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;

const AutoDismiss = ({
  id,
  duration,
  removeToast,
}: {
  duration?: number;
  id: string;
  removeToast: (id: string) => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, removeToast]);

  return null;
};
