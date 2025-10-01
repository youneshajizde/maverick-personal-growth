import { GENDER, OptionT } from "@/shared/constants/shared.constants";

export const SHOES_SIZES = [
  {
    value: "39",
    label: "39 EU",
  },
  {
    value: "40",
    label: "40 EU",
  },
  {
    value: "41",
    label: "41 EU",
  },
  {
    value: "42",
    label: "42 EU",
  },
];

export type baseFilterT = {
  type: "select" | "radio" | "slider";
  label: string;
  key: string;
};

export type SelectFilterT = baseFilterT & {
  type: "select";
  options: OptionT[];
};

export type RadioFilterT = baseFilterT & {
  type: "radio";
  options: OptionT[];
};

export type FilterItemConfig = SelectFilterT | RadioFilterT;

export const FILTERS_CONFIG: Record<string, FilterItemConfig[]> = {
  shoes: [
    {
      type: "select",
      label: "Sizes",
      key: "size",
      options: SHOES_SIZES,
    },
    {
      type: "radio",
      label: "Gender",
      key: "gender",
      options: GENDER,
    },
  ],
  books: [
    {
      type: "select",
      label: "Genre",
      key: "genre",
      options: [],
    },
    {
      type: "select",
      label: "Material",
      key: "material",
      options: [],
    },
    {
      type: "select",
      label: "Condition",
      key: "condition",
      options: [],
    },
  ],
};
