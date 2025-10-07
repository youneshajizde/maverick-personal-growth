"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

interface PaginationContextProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  onChange: (page: number) => void;
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
}: {
  children: ReactNode;
  totalPages: number;
  onChange: (page: number) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const handleSetCurrentPage = (page: number) => {
    setCurrentPage(page);
    onChange?.(page); // call parent callback
  };

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        setCurrentPage: handleSetCurrentPage,
        hasNext,
        hasPrev,
        totalPages,
        onChange,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationRoot;
