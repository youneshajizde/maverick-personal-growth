"use client";

import React, { createContext, ReactNode, useContext } from "react";

interface PaginationContextProps {
  currentPage: number;
  goToPage: (page: number) => void;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
}

const PaginationContext = createContext<PaginationContextProps | null>(null);

export const usePagination = () => {
  const context = useContext(PaginationContext);

  if (!context) {
    throw new Error("Please use the pagination context in its provider");
  }

  return context;
};

const PaginationRoot = ({
  children,
  totalPages,
  onChange,
  currentPage
}: {
  children: ReactNode;
  totalPages: number;
  onChange: (page: number) => void;
  currentPage : number
}) => {
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const handleSetCurrentPage = (page: number) => {
    onChange(page);
  };

  

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        goToPage: handleSetCurrentPage,
        hasNext,
        hasPrev,
        totalPages,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationRoot;
