import { Modal } from "@/shared/components/organisms/modal";
import { SlidersHorizontalIcon } from "lucide-react";
import React from "react";

const Filters = () => {
  return (
    <Modal>
      <Modal.OpenBtn className="btn btn-white">
        <SlidersHorizontalIcon size={17} />
      </Modal.OpenBtn>
      <Modal.Body>
        <Modal.Header>Filters</Modal.Header>
        
      </Modal.Body>
    </Modal>
  );
};

export default Filters;
