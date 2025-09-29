import { safeFetch } from "@/shared/utils/functions";
import { ProductT } from "../types/products.types";

export const getProducts = async (limit: number, start: number) => {
  return safeFetch<ProductT[]>(
    `/products?pagination[limit]=${limit}&pagination[start]=${start}`
  );
};

export const getCoaches = async () => {
  return safeFetch("/coaches");
};

export const getWorkouts = async () => {
  return safeFetch("/workouts");
};
