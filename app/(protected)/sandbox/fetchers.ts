import { ProductT } from "@/features/shop/lib/types/products.types";
import { safeFetcher } from "./function";

export const getList = async () => {
  return safeFetcher<ProductT[]>("/products");
};
