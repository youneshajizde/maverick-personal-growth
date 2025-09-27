

import { safeFetch } from "@/shared/utils/functions"
import { ProductT } from "../types/products.types"

export const getProducts =  async () => {
    
    return safeFetch<ProductT[]>("/products")
}