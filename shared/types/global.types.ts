import { ReactNode } from "react";

export type ClassNameChildrenT = {
  children: ReactNode;
  className?: string;
};


export type queryParamsT = {
  [key : string] : string
}