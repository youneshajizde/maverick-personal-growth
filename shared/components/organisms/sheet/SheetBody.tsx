"use client";

import React, { ReactNode } from "react";
import { useSheet } from "./SheetRoot";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const SheetBody = ({ children }: { children: ReactNode }) => {
  const { open, setOpen } = useSheet();

  if (!open) return null;
  return createPortal(
    <AnimatePresence>
      <div className="fixed z-50 inset-0 flex items-end justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setOpen(false)}
          className="absolute bg-black/30 backdrop-blur-sm inset-0"
        />

        <motion.div
          drag="y"
          dragElastic={0.2}
          dragDirectionLock
          dragConstraints={{ top: 0, bottom: 1000 }}
          onDragEnd={(_, info) => {
            if (info.point.y > 100) {
              setOpen(false);
            }
          }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{
            type: "spring",
            damping: 40,
            stiffness: 300,
            duration: 0.2,
          }}
          className={`w-full bg-white z-50 overflow-y-auto min-h-[40vh] rounded-t-3xl p-3`}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};

export default SheetBody;
