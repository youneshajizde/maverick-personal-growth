import React from "react";
import { SidebarItems } from "../types/sidebar.types";

interface ItemContentProps {
  item: SidebarItems;
}

export const ItemContent: React.FC<ItemContentProps> = ({ item }) => (
  <>
    <item.icon className="size-6 lg:size-4.5" />
    <p className="text-sm hidden lg:block">{item.title}</p>
  </>
);