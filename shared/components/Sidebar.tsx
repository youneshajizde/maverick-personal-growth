"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { sidebarSections } from "../constants/sidebar.constants";
import React from "react";
import { SidebarItems } from "../types/sidebar.types";
import LinkItem from "./LinkItem";
import ActionItem from "./ActionItem";
import DropdownItem from "./DropdownItem";
import ModalItem from "./ModalItem";

interface LinkItemProps {
  item: { type: "Link"; url: string; value: string };
  currentTab: string;
}

const itemComponents : Record<SidebarItems["type"], unknown> = {
  Link: LinkItem,
  Action: ActionItem,
  Dropdown: DropdownItem,
  Modal: ModalItem,
};

export const renderSidebarTabs = (item: SidebarItems, currentTab: string) => {
  const Component = itemComponents[item.type];
  if (!Component) {
    console.warn(`Unknown sidebar item type: ${item.type}`);
    return null;
  }
  return <Component item={item} currentTab={currentTab} />;
};

const Sidebar = () => {
  const pathname = usePathname();
  const currentTab = pathname.split("/").filter(Boolean).pop();

  return (
    <section className="flex flex-col h-full justify-between gap-3">
      <div className="bg-white flex-1 rounded-xl p-3 flex justify-between flex-col">
        <div className=" items-center lg:items-start flex flex-col">
          <div className="f-align gap-1">
            <Image
              src={"/images/logo-1.png"}
              alt="logo"
              width={45}
              height={45}
            />
            <p className="hidden lg:block text-secondary lg:text-sm xl:text-lg font-semibold">
              Maverick
            </p>
          </div>

          {sidebarSections.map((section, index) => (
            <React.Fragment key={index}>
              <p className="text-black/30 text-xs mt-3">{section.label}</p>
              <ul className="flex flex-col items-center lg:items-stretch w-full space-y-1.5 mt-3">
                {section.items.map((item) => (
                  <li key={item.value}>
                    {renderSidebarTabs(item, currentTab!)}
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </div>

        <div className="f-align gap-1.5 justify-center lg:justify-start mt-6">
          <div className="size-10 lg:size-10 rounded-full relative">
            <Image
              src={"/images/avatar1.png"}
              alt="avatar"
              fill
              className="absolute object-cover rounded-full"
            />
          </div>
          <span className=" flex-col hidden lg:flex space-y-1.5">
            <p className="font-medium text-xs">Jasmine</p>
            <p className="text-black/30 text-xs">Prodigy</p>
          </span>
        </div>
      </div>
      <div className="f-align justify-center lg:justify-start w-full bg-transparent md:bg-gradient-to-b from-secondary to-secondary/80 rounded-xl">
        <Image
          alt="maverick"
          src={"/images/mav-s.png"}
          width={60}
          height={60}
        />

        <div className="text-white hidden lg:block">
          <p className="lg:text-lg xl:text-xl font-semibold">LEVEL.</p>
          <p className="lg:text-md xl:text-2xl font-bold">Prodigy</p>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
