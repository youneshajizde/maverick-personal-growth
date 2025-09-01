import React from "react";
import { SidebarItemS } from "../types/sidebar.types";

interface ActionItemProp {
  item: Extract<SidebarItemS, { type: "Action" }>;
}

const ActionItem = ({ item }: ActionItemProp) => {
  return (
    <button
      onClick={item.action}
      className="f-align gap-1.5 transition-all rounded-lg p-1.5 text-black hover:text-secondary"
    >
      <item.icon className="size-6 lg:size-4.5" />
      <p className="text-sm hidden lg:block">{item.title}</p>
    </button>
  );
};

export default ActionItem;
