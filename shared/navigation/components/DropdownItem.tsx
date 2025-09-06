"use client"; // Required for useState

import React, { useState } from "react";

import { ItemContent } from "./ItemContent";
import { ChevronDown, ChevronRight } from "lucide-react";
import { renderSidebarTabs, SidebarComponentProps } from "./Sidebar";

const DropdownItem: React.FC<SidebarComponentProps> = ({
  item,
  currentTab,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  if (item.type !== "Dropdown") return null;

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col gap-1.5 transition-all rounded-lg p-1.5 relative">
      <button
        onClick={toggleDropdown}
        className="f-align xs:flex-row sm:flex-col lg:flex-row items-center gap-1.5 w-full text-black hover:text-secondary"
      >
        <ItemContent item={item} />
        {item.items && (
          <span className="xs:block sm:hidden lg:block ml-auto">
            {isOpen ? (
              <ChevronDown className="size-4" />
            ) : (
              <ChevronRight className="size-4" />
            )}
          </span>
        )}
      </button>
      {item.items && (
        <ul
          className={`w-full items-stretch ml-3 sm:ml-0 lg:ml-3 mt-1.5 space-y-1 overflow-hidden transition-all duration-300 ease-in-out lg:static ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {item.items.map((subItem) => (
            <li key={subItem.value}>
              {renderSidebarTabs(subItem, currentTab)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownItem;
