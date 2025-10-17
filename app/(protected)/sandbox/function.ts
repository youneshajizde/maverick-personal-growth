import { ContentReceiveT } from "./types";

export const safeFetcher = async <T>(
  url: string,
  options?: RequestInit
): Promise<{ data: ContentReceiveT<T> | null; error: string | null }> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`, {
      headers: {
        Content_Type: "application/json",

        ...options?.headers,
      },
      ...options,
    });

    if (!res.ok) {
      const errorTxt = await res.text();
      return { data: null, error: errorTxt };
    }
    const data = await res.json();

    return { data: data as ContentReceiveT<T>, error: null };
  } catch (err) {
    return { data: null, error: err.message || null };
  }
};
