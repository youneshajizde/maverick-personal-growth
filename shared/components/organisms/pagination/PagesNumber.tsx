"use client";

import React from "react";
import { usePagination } from "./root";

const PagesNumber = () => {
  const { currentPage, goToPage, totalPages } = usePagination();
  const visiblePages = 4;
  let startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  startPage = Math.max(1, endPage - visiblePages + 1);

  const pages: number[] = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2">
      {pages.map((page) => (
        <button
          key={page}
          disabled={page === currentPage}
          onClick={() => goToPage(page)}
          className={`btn btn-round size-10 ${page === currentPage ? "btn-primary" : "btn-secondary"}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default PagesNumber;
