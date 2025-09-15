import OpenSheetBtn from "./OpenSheetBtn";
import SheetBody from "./SheetBody";
import SheetHeader from "./SheetHeader";
import { SheetRoot } from "./SheetRoot";

export const Sheet = Object.assign(SheetRoot, {
  Body: SheetBody,
  OpenBtn: OpenSheetBtn,
  Header: SheetHeader,
});
