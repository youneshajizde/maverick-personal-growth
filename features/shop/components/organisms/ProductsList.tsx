"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Placeholder from "@/shared/components/atoms/Placeholder";
import { getProducts } from "../../lib/api/products";
import Spinner from "@/shared/components/molecules/Spinner";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";

const ProductsList = () => {
  const searchParams = useSearchParams();
  const filters = Object.fromEntries(searchParams.entries());

  const { data : product, isLoading, error } = useSWR(["products", filters], () =>
    getProducts(filters)
  );

  const products = product?.data?.data;

  console.log(product?.data)


  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    <Placeholder className="mt-6" color="error">
      Failed to load the products
    </Placeholder>;
  }

  if (!products || products.length === 0)
    return (
      <Placeholder className="mt-6" color="error">
        There is no products
      </Placeholder>
    );

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {products?.map((p) => (
        <ProductCard
          key={p.id}
          title={p.title}
          price={p.price}
          imgSrc="/images/shoe.png"
        />
      ))}
    </div>
  );
};

export default ProductsList;
