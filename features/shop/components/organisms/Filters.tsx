"use client";

import Searchbox from "@/shared/components/molecules/Searchbox";
import Selectbox from "@/shared/components/molecules/Selectbox";
import React, { useEffect, useState } from "react";
import DependantFilters from "./DependantFilters";
import { PRODUCTS_CATEGORIES } from "../../lib/constants/categories.constants";
import { useQueryParam } from "@/shared/hooks/useParam";

const Filters = () => {
  const initialCategory = useQueryParam("filters[category][$eq]") || "books";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {

    

  } , [])
  

  return (
    <div className="w-full flex flex-col md:flex-row gap-3">
      <Searchbox searchIn="title" className="w-full md:w-80 " />
      <div className="flex flex-1 gap-3">
        <Selectbox
          value={selectedCategory}
          onChange={setSelectedCategory}
          className="w-full md:w-40"
          options={PRODUCTS_CATEGORIES}
        />
        <DependantFilters category={selectedCategory} />
      </div>
    </div>
  );
};

export default Filters;
