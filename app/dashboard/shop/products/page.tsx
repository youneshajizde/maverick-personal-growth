import { PRODUCTS_CATEGORIES } from "@/features/shop/constants/categories.constants";
import Searchbox from "@/shared/components/molecules/Searchbox";
import Selectbox from "@/shared/components/molecules/Selectbox";
import { Modal } from "@/shared/components/organisms/modal";
import { Sheet } from "@/shared/components/organisms/sheet";

import { EllipsisVerticalIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductsPage = () => {
  return (
    <>
      <div className="f-align justify-between mb-6">
        <span className="space-y-1.5">
          <p className="font-medium">
            Find new and second-hand products on maverick
          </p>
          <p className="text-sm text-black/30">
            You can simply buy the products that have passed our specialists and
            are marked as (Greate for the value)
          </p>
        </span>

        <div className="f-align gap-3 hidden sm:flex">
          <div className="f-align gap-1.5 justify-center lg:justify-start flex-shrink-0">
            <div className="size-10 lg:size-10 rounded-full relative">
              <Image
                src="/images/avatar2.jpg"
                alt="avatar"
                fill
                className="absolute object-cover rounded-full"
              />
            </div>
            <span className="flex-col hidden lg:flex space-y-1.5">
              <p className="font-medium text-xs">Jasmine</p>
              <p className="text-black/30 text-xs">Prodigy</p>
            </span>
          </div>

          <EllipsisVerticalIcon size={20} />
        </div>
      </div>

      <div className="max-w-xl f-align gap-3">
        <Searchbox />
        <Selectbox options={PRODUCTS_CATEGORIES} />
        <Modal>
          <Modal.OpenBtn>open</Modal.OpenBtn>

          <Modal.Body>
            <Modal.Header>Title</Modal.Header>
            stuff
          </Modal.Body>

          <Sheet>
            <Sheet.OpenBtn>open</Sheet.OpenBtn>

            <Sheet.Body>
              hello
            </Sheet.Body>
          </Sheet>
        </Modal>
      </div>

      <p className="mt-6 space-x-1.5">
        <span className="text-xl">Books</span>
        <span className="text-sm">(12 Results)</span>
      </p>

      <div className="mt-6 grid grid-cols-4 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="bg-white rounded-xl h-50" key={i}></div>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
