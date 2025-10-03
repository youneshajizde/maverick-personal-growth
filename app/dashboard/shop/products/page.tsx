import Filters from "@/features/shop/components/organisms/Filters";
import ProductsList from "@/features/shop/components/organisms/ProductsList";
import { PRODUCTS_CATEGORIES } from "@/features/shop/lib/constants/categories.constants";
import Searchbox from "@/shared/components/molecules/Searchbox";
import Selectbox from "@/shared/components/molecules/Selectbox";
import Spinner from "@/shared/components/molecules/Spinner";
import { EllipsisVerticalIcon } from "lucide-react";
import Image from "next/image";
import React, { Suspense } from "react";

const ProductsPage = async () => {
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

      <div className="w-full flex flex-col md:flex-row gap-3">
        <Searchbox searchIn="title" className="w-full md:w-80 " />
        <div className="flex flex-1 gap-3">
          <Selectbox
            className="w-full md:w-40"
            paramKey="filters[category][name][$eq]"
            options={PRODUCTS_CATEGORIES}
          />
          <Filters/>
        </div>
      </div>

      <p className="mt-6 space-x-1.5">
        <span className="text-xl ">Books</span>
        <span className="text-sm">(12 Results)</span>
      </p>
      <Suspense fallback={<Spinner className="mt-6" />}>
        <ProductsList />
      </Suspense>
    </>
  );
};

export default ProductsPage;
