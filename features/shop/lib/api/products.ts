import { paramBuilder, safeFetch } from "@/shared/utils/functions";
import { ProductT } from "../types/products.types";
import { ContentArch, queryParamsT } from "@/shared/types/global.types";
import { CoachT } from "@/features/coaches/types/coaches.types";

export const getProducts = async (filters: queryParamsT) => {
  return safeFetch<ContentArch<ProductT[]>>(
    `/products${paramBuilder(filters)}&populate=category`
  );
};

export const getCoaches = async (page = 1, pageSize = 9) => {
  const query = `?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`;
  return safeFetch<CoachT[]>(`/coaches${query}`);
};

export const getWorkouts = async () => {
  return safeFetch("/workouts");
};
