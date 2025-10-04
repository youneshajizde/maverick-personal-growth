import { GENDER } from "@/shared/constants/shared.constants";

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

export const FILTERS_CONFIG = {
  shoes: [
    { type: "multiselect", label: "Sizes", options: SHOES_SIZES },
    { type: "radio", label: "Gender", options: GENDER },
  ],

  books: [
    { type: "select", label: "Genre", options: BOOK_GENRES },
    { type: "select", label: "Material", options: BOOK_MATERIALS },
  ],
};
