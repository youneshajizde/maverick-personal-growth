"use client";

import { Modal } from "@/shared/components/organisms/modal";
import { SlidersHorizontalIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

const Filters = () => {
  const searchParams = useSearchParams();
  console.log(searchParams);

  const category = searchParams.get("filters[category][name][$eq]");

  console.log("category : ", category);

  return (
    <Modal>
      <Modal.OpenBtn className="btn btn-white">
        <SlidersHorizontalIcon size={17} />
      </Modal.OpenBtn>
      <Modal.Body className="relative bg-foreground">
        <Modal.Header>Filters</Modal.Header>
        <div className="space-y-3 mt-6">
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
