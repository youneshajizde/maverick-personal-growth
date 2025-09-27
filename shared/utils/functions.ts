/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



export const safeFetch = async<T>(endpoint : string , options? : RequestInit) : Promise<{data : T | null , error : string | null}> => {

try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}${endpoint}` , {
    headers : {
      "Content-type" : "application/json",
      Authorization : `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      ...options?.headers
    },

    ...options

    
  })


  if(!res.ok){
    const errorTxt = await res.text()
    return {data : null , error : errorTxt}
  }

  const data : T = await res.json()

  return {data , error : null}
} catch (err: any) {
 return { data: null, error: err.message || "Unknown error" };
}
  
  
}