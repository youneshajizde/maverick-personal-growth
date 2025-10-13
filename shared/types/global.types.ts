import { ReactNode } from "react";

export type ClassNameChildrenT = {
  children: ReactNode;
  className?: string;
};

export type queryParamsT = {
  [key: string]: string;
};

export type OperatorsT = "$eq" | "$in" | "$contains" | "$gt" | "$lt";

export type FilterComponentT = "select" | "multiselect" | "radio";

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
};

export type AuthT = {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    confirmed: boolean;
    blocked: boolean;
  };
};
