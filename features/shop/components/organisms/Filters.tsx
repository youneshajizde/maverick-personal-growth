"use client";

import { Modal } from "@/shared/components/organisms/modal";
import { SlidersHorizontalIcon } from "lucide-react";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FILTERS_CONFIG } from "../../lib/constants/filtes.constants";
import Selectbox from "@/shared/components/molecules/Selectbox";
import Radiobtn from "@/shared/components/molecules/Radiobtn";

const Filters = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("filters[category][$eq]") || "shoes";
  const initialFilters: Record<string, string> = {};

  FILTERS_CONFIG[category]?.forEach(
    (filter) => (initialFilters[filter.key] = "")
  );

  const [filters, setFilters] = useState(initialFilters);

  const onChangeHandler = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Modal>
      <Modal.OpenBtn className="btn btn-white">
        <SlidersHorizontalIcon size={17} />
      </Modal.OpenBtn>
      <Modal.Body className="relative">
        <Modal.Header>Filters</Modal.Header>
        <div>
          {FILTERS_CONFIG[category]?.map((filter) => {
            switch (filter.type) {
              case "select":
                return (
                  <Selectbox
                    value={filters[filter.key]}
                    label={filter.label}
                    options={filter.options}
                    onChange={(val) => onChangeHandler(filter.key, val)}
                  />
                );

              case "radio":
                return (
                  <Radiobtn
                    label={filter.label}
                    value={filters[filter.key]}
                    options={filter.options}
                    onChange={(val) => onChangeHandler(filter.key, val)}
                  />
                );
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
