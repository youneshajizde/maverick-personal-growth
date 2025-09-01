"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarSections } from "../constants/sidebar.constants";
import React from "react";
import { SidebarItem } from "../types/sidebar.types";
import { ChevronDownIcon } from "lucide-react";

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
              <p className="text-black/30 text-xs mt-6">{section.label}</p>
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

const renderSidebarTabs = (item: SidebarItem, currentTab: string) => {
  switch (item.type) {
    case "Link":
      return (
        <Link
          href={item.url!}
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

    case "Action":
      return (
        <button className="f-align gap-1.5 transition-all rounded-lg p-1.5 text-black hover:text-secondary">
          <item.icon className="size-6 lg:size-4.5" />
          <p className="text-sm hidden lg:block"> {item.title}</p>
        </button>
      );

    case "Dropdown":
      return (
        <button className="f-align w-full justify-between gap-1.5 transition-all rounded-lg p-1.5 text-black hover:text-secondary group">
          <span className="f-align gap-1">
            <item.icon className="size-6 lg:size-4.5" />
            <p className="text-sm hidden lg:block ">{item.title}</p>
          </span>
          <ChevronDownIcon className="text-black size-6 lg:size-4.5 group-hover:text-secondary" />
        </button>
      );

    case "Modal":
      return (
        <button className="f-align gap-1.5 transition-all rounded-lg p-1.5 text-black hover:text-secondary">
          <item.icon className="size-6 lg:size-4.5" />
          <p className="text-sm hidden lg:block"> {item.title}</p>
        </button>
      );

    default:
      return null;
  }
};
