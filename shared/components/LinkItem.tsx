import React from "react";
import { SidebarItems } from "../types/sidebar.types";
import Link from "next/link";

interface LinkItemProps {
  item: Extract<SidebarItems, { type: "Link" }>;
  currentTab: string;
}

const LinkItem = ({ item, currentTab }: LinkItemProps) => {
  return (
    <Link
      href={item.url}
      className={`${
        currentTab === item.value
          ? "bg-secondary text-white"
          : "text-black hover:text-secondary"
      } f-align gap-1.5 transition-all rounded-lg p-1.5`}
    >
      <item.icon className="size-6 lg:size-4.5" />
      <p className="text-sm hidden lg:block">{item.title}</p>
    </Link>
  );
};

export default LinkItem;
