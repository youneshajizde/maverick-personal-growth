/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { queryParamsT } from "../types/global.types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const safeFetch = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<{ data: T | null; error: string | null }> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}${endpoint}`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          ...options?.headers,
        },

        ...options,
      }
    );

    if (!res.ok) {
      const errorTxt = await res.text();
      return { data: null, error: errorTxt };
    }
    const json = await res.json();

    const normalizedData = json.data ? json.data : json;

    return { data: normalizedData as T, error: null };
    // const data : T = await res.json()

    // return {data , error : null}
  } catch (err: any) {
    return { data: null, error: err.message || "Unknown error" };
  }
};



export const paramBuilder = (paramObj: Record<string, string>) => {
const params = new URLSearchParams()
  for (const key in paramObj) {
    params.set(key , paramObj[key])
  }
  const queryString = `?${params.toString()}`
  return queryString
};



