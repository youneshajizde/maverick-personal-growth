import ProductCard from "@/features/shop/components/organisms/ProductCard";
import { getProducts } from "@/features/shop/lib/api/products";
import { PRODUCTS_CATEGORIES } from "@/features/shop/lib/constants/categories.constants";
import Searchbox from "@/shared/components/molecules/Searchbox";
import Selectbox from "@/shared/components/molecules/Selectbox";
import { Modal } from "@/shared/components/organisms/modal";
import { Sheet } from "@/shared/components/organisms/sheet";
import SheetHeader from "@/shared/components/organisms/sheet/SheetHeader";

import { EllipsisVerticalIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductsPage = async () => {
  const { data } = await getProducts();
  console.log("products data : ", data);

  
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

      <div className="w-auto f-align gap-3">
        <Searchbox />
        <Selectbox paramKey="category" options={PRODUCTS_CATEGORIES} />
        <Selectbox paramKey="bunjy" options={PRODUCTS_CATEGORIES} />

        <Modal>
          <Modal.OpenBtn className="btn btn-white">open</Modal.OpenBtn>
          <Modal.Body>
            <Modal.Header>Title</Modal.Header>
            stuff
          </Modal.Body>
        </Modal>
        <Sheet>
          <Sheet.OpenBtn className="btn btn-white">open</Sheet.OpenBtn>
          <Sheet.Body>
            <SheetHeader>Filtering products</SheetHeader>
            hello
          </Sheet.Body>
        </Sheet>
      </div>

      <p className="mt-6 space-x-1.5">
        <span className="text-xl ">Books</span>
        <span className="text-sm">(12 Results)</span>
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCard
            key={i}
            title="Blessed Luca"
            price={130}
            imgSrc="/images/shoe.png"
          />
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
