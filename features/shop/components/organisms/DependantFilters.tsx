"use client";

import { Modal } from "@/shared/components/organisms/modal";
import { SlidersHorizontalIcon } from "lucide-react";
import React, { useState } from "react";
import { FILTERS_CONFIG } from "../../lib/constants/filters.constants";
import Selectbox from "@/shared/components/molecules/Selectbox";
import Radiobtn from "@/shared/components/molecules/Radiobtn";
import MultiSelect from "@/shared/components/molecules/MultiSelect";
import { CategoryT } from "../../lib/types/products.types";
import { OperatorsT } from "@/shared/types/global.types";
import { filterParamBuilder } from "@/shared/utils/functions";
import { useRouter, useSearchParams } from "next/navigation";

const DependantFilters = ({ category }: { category: string }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filters, setFilters] = useState<
    Record<string, { value: string; operator: OperatorsT }>
  >({});

  const handleSelectChange = (
    fieldLabel: string,
    value: string,
    operator: OperatorsT
  ) => {
    setFilters((prev) => ({
      ...prev,
      [fieldLabel]: { value, operator },
    }));
  };

  const handleApplyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(filters).forEach(([key, { value, operator }]) => {
      filterParamBuilder(params, operator, key, value);
    });
    const queryString = params.toString();
    router.push(`?${queryString}`);
    setFilters({});
  };

  return (
    <Modal>
      <Modal.OpenBtn className="btn btn-white">
        <SlidersHorizontalIcon size={17} />
      </Modal.OpenBtn>
      <Modal.Body className="relative bg-foreground">
        <Modal.Header>Filters</Modal.Header>
        <div className="space-y-3 mt-6">
          {FILTERS_CONFIG[category as CategoryT].map((field, i) => {
            switch (field.type) {
              case "select":
                return (
                  <Selectbox
                    value={filters[field.label]?.value || ""}
                    onChange={(val) =>
                      handleSelectChange(field.label, val, field.operator)
                    }
                    key={i}
                    label={field.label}
                    options={field.options}
                  />
                );

              case "radio":
                return (
                  <Radiobtn
                    value={filters[field.label]?.value || ""}
                    onChange={(val) =>
                      handleSelectChange(field.label, val, field.operator)
                    }
                    label={field.label}
                    key={i}
                    options={field.options}
                  />
                );

              case "multiselect":
                return (
                  <MultiSelect
                    value={filters[field.label]?.value?.split(",") || []}
                    onChange={(vals) =>
                      handleSelectChange(
                        field.label,
                        vals.join(","),
                        field.operator
                      )
                    }
                    key={i}
                    label={field.label}
                    options={field.options}
                  />
                );
            }
          })}
          <div className="absolute bottom-3 right-3">
            <button
              onClick={handleApplyFilters}
              className="btn btn-secondary rounded-xl"
            >
              Apply changes
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DependantFilters;
