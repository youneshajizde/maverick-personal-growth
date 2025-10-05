"use client";

import Searchbox from "@/shared/components/molecules/Searchbox";
import Selectbox from "@/shared/components/molecules/Selectbox";
import React, { useState } from "react";
import DependantFilters from "./DependantFilters";
import { PRODUCTS_CATEGORIES } from "../../lib/constants/categories.constants";
import { useSearchParams } from "next/navigation";

const Filters = () => {
  const searchParams = useSearchParams();
  const filters = Object.fromEntries(searchParams.entries());
  const initialCategory = filters["filters[category][$eq]"] ?? "shoes";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);



  return (
    <div className="w-full flex flex-col md:flex-row gap-3">
      <Searchbox searchIn="title" className="w-full md:w-80 " />
      <div className="flex flex-1 gap-3">
        <Selectbox value={selectedCategory} onChange={setSelectedCategory}  className="w-full md:w-40" options={PRODUCTS_CATEGORIES} />
        <DependantFilters />
      </div>
    </div>
  );
};

export default Filters;
