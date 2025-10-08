import { ReactNode } from "react";

export type ClassNameChildrenT = {
  children: ReactNode;
  className?: string;
};


export type queryParamsT = {
  [key : string] : string
}

export type OperatorsT = "$eq" | "$in" | "$contains" | "$gt" | "$lt"

export type FilterComponentT = "select" | "multiselect" | "radio"

export type StrapiResponse<T> = {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}