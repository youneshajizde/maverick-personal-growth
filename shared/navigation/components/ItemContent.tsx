import React from "react";
import { NavigationItems } from "../types/navigation.types";

interface ItemContentProps {
  item: NavigationItems;
  showText?: boolean;
}

export const ItemContent: React.FC<ItemContentProps> = ({ item }) => (
  <>
    <item.icon className="size-6 lg:size-4.5" />
    <p className="text-sm block sm:hidden lg:block">{item.title}</p>
  </>
);
