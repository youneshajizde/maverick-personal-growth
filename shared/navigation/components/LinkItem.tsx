"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ItemContent } from "./ItemContent";
import { SidebarComponentProps } from "./Sidebar";

const LinkItem: React.FC<SidebarComponentProps> = ({ item }) => {
  const pathname = usePathname();

  if (item.type !== "Link") return null;


  const isActive = pathname === item.url;

  return (
    <Link
      href={item.url}
      className={`f-align gap-1.5 transition-all rounded-xl p-1.5 ${
        isActive ? "bg-secondary text-white" : "text-black hover:text-secondary"
      }`}
    >
      <ItemContent item={item} />
    </Link>
  );
};

export default LinkItem;
