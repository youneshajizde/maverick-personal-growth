"use client";

import { cn } from "@/shared/utils/functions";
import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { usePagination } from "./root";

const PrevBtn = ({ className }: { className?: string }) => {
  const { setCurrentPage, currentPage, hasPrev } = usePagination();
  return (
    <button
      disabled={!hasPrev}
      onClick={() => setCurrentPage(currentPage - 1)}
      className={cn(
        `btn p-0 btn-round size-10 f-center ${
          !hasPrev ? "bg-gray-300" : "btn-primary"
        }`,
        className
      )}
    >
      <ChevronLeftIcon size={20} />
    </button>
  );
};

export default PrevBtn;
