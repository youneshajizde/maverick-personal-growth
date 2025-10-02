"use client";

import { useToast } from "@/shared/components/organisms/toast/ToastContext";
import { HeartIcon, Loader2Icon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface ProductCardProps {
  imgSrc: string;
  title: string;
  price: number;
}

const ProductCard = ({ imgSrc, title, price }: ProductCardProps) => {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const handleLike = () => {
    setLoading(true);
    setTimeout(() => {
      setLiked(!liked);
      setLoading(false);
      if (!liked) {
        addToast("This is a success message!", "success");
      } else {
        addToast("This is a success message!", "error");
      }
    }, 1000);
  };

  

  return (
    <div className="bg-white rounded-xl h-65 overflow-hidden p-1">
      <div className="bg-gray-200 f-center relative rounded-xl h-3/4">
        <Image alt="product" src={imgSrc} width={150} height={150} />

        <button
          onClick={handleLike}
          disabled={loading}
          className={`absolute size-8 bg-transparent top-3 right-3 ${
            liked ? "border-red-500" : "border-white"
          } f-center border rounded-full`}
        >
          {loading ? (
            <Loader2Icon size={17} className="animate-spin text-gray-400" />
          ) : liked ? (
            <HeartIcon fill="red" stroke="red" size={17} />
          ) : (
            <HeartIcon size={17} className="text-white" />
          )}
        </button>
      </div>

      <div className="h-1/4 px-3 f-align justify-between">
        <span>
          <p className="font-medium mt-1.5">{title}</p>
          <p className="text-">${price}.00</p>
        </span>

        <button className="btn p-1.5 rounded-full">
          <ShoppingCartIcon size={17} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
