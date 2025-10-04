"use client";

import { Modal } from "@/shared/components/organisms/modal";
import { useQueryParam } from "@/shared/hooks/useParam";
import { SlidersHorizontalIcon } from "lucide-react";
import React, { useState } from "react";
import { FILTERS_CONFIG } from "../../lib/constants/filters.constants";
import Selectbox from "@/shared/components/molecules/Selectbox";
import Radiobtn from "@/shared/components/molecules/Radiobtn";
import { CategoryT } from "../../lib/types/products.types";
import MultiSelect from "@/shared/components/molecules/MultiSelect";

const Filters = () => {
  const categoryParam = useQueryParam("filters[category][name][$eq]");
  const category = (categoryParam ?? "shoes") as CategoryT;
  const [filters, setFilters] = useState({});

  return (
    <Modal>
      <Modal.OpenBtn className="btn btn-white">
        <SlidersHorizontalIcon size={17} />
      </Modal.OpenBtn>
      <Modal.Body className="relative bg-foreground">
        <Modal.Header>Filters</Modal.Header>
        <div className="space-y-3 mt-6">
          {FILTERS_CONFIG[category].map((field, i) => {
            switch (field.type) {
              case "select":
                return (
                  <Selectbox
                    key={i}
                    label={field.label}
                    paramKey="filters[size][$eq]"
                    onChange={()=> setFilters("")}
                    options={field.options}
                  />
                );
                break;

              case "radio":
                return (
                  <Radiobtn
                    label={field.label}
                    key={i}
                    options={field.options}
                  />
                );
                break;


              case "multiselect" : 
              return (
                <MultiSelect label="sizes" options={field.options}/>
              )
            }
          })}
          <div className="absolute bottom-3 right-3">
            <button className="btn btn-secondary rounded-xl">
              Apply changes
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Filters;
