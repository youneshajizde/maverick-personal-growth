"use client";

import { cn } from "@/shared/utils/functions";
import React from "react";
import { usePagination } from "./root";
import { ChevronRightIcon } from "lucide-react";

const NextBtn = ({ className }: { className?: string }) => {
  const { goToPage, currentPage, hasNext } = usePagination();
  return (
    <button
      disabled={!hasNext}
      onClick={() => goToPage(currentPage + 1)}
      className={cn(
        `btn p-0 btn-round size-10 f-center ${!hasNext ? "bg-gray-300" : "btn-primary"}`,
        className
      )}
    >
      <ChevronRightIcon size={20} />
    </button>
  );
};

export default NextBtn;
