import React from "react";
import Link from "next/link";
import { ItemContent } from "./ItemContent";
import { SidebarComponentProps } from "./Sidebar";

const LinkItem: React.FC<SidebarComponentProps> = ({ item, currentTab }) => {
  if (item.type !== "Link") return null;
  return (
    <Link
      href={item.url}
      className={`f-align gap-1.5 transition-all rounded-lg p-1.5 ${
        currentTab === item.value
          ? "bg-secondary text-white"
          : "text-black hover:text-secondary"
      }`}
    >
      <ItemContent item={item} />
    </Link>
  );
};

export default LinkItem;
