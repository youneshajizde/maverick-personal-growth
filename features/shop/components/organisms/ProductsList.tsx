"use client"


import React, { use, useState } from "react";
import ProductCard from "./ProductCard";
import Placeholder from "@/shared/components/atoms/Placeholder";
import { ProductT } from "../../lib/types/products.types";

const ProductsList = () => {

  const [products , setProducts] = useState<ProductT[]>([])
  const [hasMore , setHasMore] = useState(true)
  const [isLoading , setIsLoading] = useState(false)
  const limit = 8


  // if(!products) return (
  //  <Placeholder className="mt-6" color="warning">There is no products</Placeholder>
  // )

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* {products?.map((p , i) => (
        <ProductCard
          key={i}
          title={p.title}
          price={p.price}
          imgSrc="/images/shoe.png"
        />
      ))} */}

      <div ></div>
    </div>
  );
};

export default ProductsList;
