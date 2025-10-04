import { GENDER } from "@/shared/constants/shared.constants";


export const SHOES_SIZES = [
  { value: "39", label: "39 EU" },
  { value: "40", label: "40 EU" },
  { value: "41", label: "41 EU" },
  { value: "42", label: "42 EU" },
  { value: "43", label: "43 EU" },
];

export const FILTERS_CONFIG = {
  shoes: [
    { type: "select", options: SHOES_SIZES },
    { type: "radio", options: GENDER },
  ],

  books: [
    { type: "select", options: [] },
    { type: "select", options: [] },
  ],
} as const
 