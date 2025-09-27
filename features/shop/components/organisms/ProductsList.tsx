import React, { use } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../../lib/api/products";
import Placeholder from "@/shared/components/atoms/Placeholder";

const ProductsList = () => {
  const productPromise = getProducts();

  const products = use(productPromise).data;

  console.log("this is the res!",products);

  if(!products) return (
   <Placeholder className="mt-6" color="warning">There is no products</Placeholder>
  )

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {products?.map((p , i) => (
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
