"use client";

import Selectbox from "@/shared/components/molecules/Selectbox";
import { Modal } from "@/shared/components/organisms/modal";
import { SlidersHorizontalIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { SHOES_SIZES } from "../../lib/constants/filtes.constants";
import Radiobtn from "@/shared/components/molecules/Radiobtn";
import { GENDER } from "@/shared/constants/shared.constants";

const Filters = () => {
  const [filters, setFilters] = React.useState({
    size: "",
    gender: "",
  });
  const searchParams = useSearchParams();

  const catergoyValue = searchParams.get("filters[category][$eq]");

  console.log(catergoyValue);

  return (
    <Modal>
      <Modal.OpenBtn className="btn btn-white">
        <SlidersHorizontalIcon size={17} />
      </Modal.OpenBtn>
      <Modal.Body>
        <Modal.Header>Filters</Modal.Header>

        <div className="mt-3 space-y-1.5">
          <p>Sizes</p>
          <Selectbox
            className="border border-black/30 rounded-xl"
            paramKey="size"
            onChange={(value) =>
              setFilters((prev) => ({ ...prev, gender: value }))
            }
            options={SHOES_SIZES}
          />
        </div>

        <div className="mt-3 space-y-1.5">
          <p>Gender</p>
          <Radiobtn options={GENDER} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Filters;
