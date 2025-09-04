import React, { useState } from "react";
import { SidebarItems } from "../types/sidebar.types";
import { ChevronDownIcon } from "lucide-react";
import { renderSidebarTabs } from "./Sidebar";

interface DropdownItemProp {
  item: Extract<SidebarItems, { type: "Dropdown" }>;
  currentTab: string;
}

const DropdownItem = ({ item, currentTab }: DropdownItemProp) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="f-align w-full justify-between gap-1.5 transition-all rounded-lg p-1.5 text-black hover:text-secondary group"
        onClick={() => setOpen(!isOpen)}
      >
        <span className="f-align gap-1">
          <item.icon className="size-6 lg:size-4.5" />
          <p className="text-sm hidden lg:block">{item.title}</p>
        </span>
        <ChevronDownIcon 
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } text-black size-6 lg:size-4.5 group-hover:text-secondary transition-transform duration-300 ease-in-out`}
        />
      </button>
      <ul 
        className={`${
          isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
        } left-10 mt-2 w-full transition-all duration-300 ease-in-out rounded-lg p-2 space-y-2 overflow-hidden`}
      >
        {item.items?.map((subItem) => (
          <li key={subItem.value}>
            {renderSidebarTabs(subItem, currentTab)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownItem;