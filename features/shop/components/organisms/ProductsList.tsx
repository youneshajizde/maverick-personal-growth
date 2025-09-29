"use client";

import React from "react";
import ProductCard from "./ProductCard";
import Placeholder from "@/shared/components/atoms/Placeholder";
import { getProducts } from "../../lib/api/products";
import Spinner from "@/shared/components/molecules/Spinner";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";


const ProductsList = () => {

 const searchParams = useSearchParams();

  const filters = Object.fromEntries(searchParams.entries());

  const { data, isLoading } = useSWR(
    ["products", filters],
    () => getProducts(filters)
  );

  const products = data?.data ?? [];


  if (!products)
    return (
      <Placeholder className="mt-6" color="warning">
        There is no products
      </Placeholder>
    );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {products?.map((p, i) => (
        <ProductCard
          key={i}
          title={p.title}
          price={p.price}
          imgSrc="/images/shoe.png"
        />
      ))}

    </div>
  );
};

export default ProductsList;
