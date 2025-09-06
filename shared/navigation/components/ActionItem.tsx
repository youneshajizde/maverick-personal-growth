import React from "react";
import { ItemContent } from "./ItemContent";
import { SidebarComponentProps } from "./Sidebar";

const ActionItem: React.FC<SidebarComponentProps> = ({ item }) => {
  if (item.type !== "Action") return null;
  return (
    <button
      onClick={item.action}
      className="f-align gap-1.5 transition-all rounded-lg p-1.5 text-black hover:text-secondary"
    >
      <ItemContent item={item} />
    </button>
  );
};

export default ActionItem;
