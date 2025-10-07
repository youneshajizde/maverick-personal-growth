import { GENDER, OptionT } from "@/shared/constants/shared.constants";
import { FilterComponentT, OperatorsT } from "@/shared/types/global.types";

export const SHOES_SIZES = [
  { value: "39", label: "39 EU" },
  { value: "40", label: "40 EU" },
  { value: "41", label: "41 EU" },
  { value: "42", label: "42 EU" },
  { value: "43", label: "43 EU" },
];

export const BOOK_MATERIALS = [
  { value: "bond-paper", label: "Bond Paper" },
  { value: "glossy-paper", label: "Glossy paper" },
];

export const BOOK_GENRES = [
  { value: "horror", label: "Horror" },
  { value: "sci-fi", label: "Sci fi" },
  { value: "drama", label: "Drama" },
];

export type FilterFieldT = {
  type: FilterComponentT;
  operator: OperatorsT;
  label: string;
  options: OptionT[];
};

export const FILTERS_CONFIG : Record<"shoes" | "books" , FilterFieldT[]>= {
  shoes: [
    {
      type: "multiselect",
      operator: "$in",
      label: "sizes",
      options: SHOES_SIZES,
    },
    { type: "radio", operator: "$eq", label: "gender", options: GENDER },
  ],

  books: [
    { type: "select", operator: "$eq", label: "genre", options: BOOK_GENRES },
    {
      type: "select",
      operator: "$eq",
      label: "material",
      options: BOOK_MATERIALS,
    },
  ],
} as const;
