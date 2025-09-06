import React from "react";
import { ItemContent } from "./ItemContent";
import Link from "next/link";
import { SidebarComponentProps } from "./Sidebar";

const ModalItem: React.FC<SidebarComponentProps> = ({ item }) => {
  if (item.type !== "Modal") return null;
  const content = (
    <button
      onClick={item.action}
      className="f-align gap-1.5 transition-all rounded-lg p-1.5 text-black hover:text-secondary"
    >
      <ItemContent item={item} />
    </button>
  );
  return item.url ? <Link href={item.url}>{content}</Link> : content;
};

export default ModalItem;
