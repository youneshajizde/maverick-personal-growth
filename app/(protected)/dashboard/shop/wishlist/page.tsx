import Searchbox from "@/shared/components/molecules/Searchbox";
import {
  EllipsisVerticalIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const WishlistPage = () => {
  return (
    <>
      <div className="f-align justify-between mb-6">
        <span className="space-y-1.5">
          <p className="font-medium">
            That is your wishList where you can store your beloved items
          </p>
          <p className="text-sm text-black/30">
            Tick the ones you have already bought and give yourself a sense of
            satisfaction!
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
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="bg-white rounded-xl h-65 overflow-hidden p-1" key={i}>
            <div className="bg-gray-200 f-center relative rounded-xl h-3/4">
              <Image
                alt="product"
                src={"/images/shoe.png"}
                width={150}
                height={150}
              />

              <button className="absolute size-8 bg-transparent top-3 right-3 border-white f-center border rounded-full">
                <HeartIcon size={17} className="text-white" />
              </button>
            </div>

            <div className="h-1/4 px-3 f-align justify-between">
              <span>
                <p className="font-medium mt-1.5">Blessed arsenal</p>
                <p className="text-">$136.00</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WishlistPage;
