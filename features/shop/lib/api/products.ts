import {  safeFetch } from "@/shared/utils/functions";
import { ProductT } from "../types/products.types";
import { queryParamsT } from "@/shared/types/global.types";

export const getProducts = async (filters ?: queryParamsT) => {
  return safeFetch<ProductT[]>(
    `/products`
  );
};

export const getCoaches = async () => {
  return safeFetch("/coaches");
};

export const getWorkouts = async () => {
  return safeFetch("/workouts");
};


// 1. get the products 
// 2.
