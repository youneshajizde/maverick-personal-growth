import React, { useState } from "react";
import { SidebarItemS } from "../types/sidebar.types";

interface DropdownItemProp {
  item: Extract<SidebarItemS, { type: "Dropdown" }>;
  currentTab: string;
}

const DropdownItem = ({ item, currentTab }: DropdownItemProp) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <button className="f-align w-full justify-between gap-1.5 transition-all rounded-lg p-1.5 text-black hover:text-secondary group"></button>
    </div>
  );
};

export default DropdownItem;
