"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { navigationSections } from "../constants/navigation.constants";
import { renderSidebarTabs } from "./Sidebar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentTab = pathname?.split("/").filter(Boolean).pop() || "";

  return (
    <>
      <section className="bg-white rounded-xl p-3 w-full flex justify-between sm:hidden">
        <div className="f-align gap-1">
          <Image src="/images/logo-1.png" alt="logo" width={45} height={45} />
          <p className=" text-secondary lg:text-sm xl:text-lg font-semibold">
            Maverick
          </p>
        </div>
        <button className="" onClick={() => setIsMenuOpen(true)}>
          <MenuIcon />
        </button>
      </section>

      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col justify-between transform transition-transform ease-in-out duration-400 fixed top-0 left-0 bg-white h-full w-64 z-50 p-5`}
      >
        <div className="items-start flex flex-col flex-shrink-0">
          <div className="f-align gap-1">
            <Image src="/images/logo-1.png" alt="logo" width={45} height={45} />
            <p className=" text-secondary lg:text-sm xl:text-lg font-semibold">
              Maverick
            </p>
          </div>

          {navigationSections.map((section, index) => (
            <React.Fragment key={index}>
              <p className="text-black/30 text-xs mt-3">{section.label}</p>
              <ul className="flex flex-col items-stretch w-full space-y-1.5 mt-3">
                {section.items.map((item) => (
                  <li key={item.value}>
                    {renderSidebarTabs(item, currentTab)}
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </div>
        <div className="avatar-div f-align gap-1.5 justify-start mt-6 flex-shrink-0">
          <div className="size-10 lg:size-10 rounded-full relative">
            <Image
              src="/images/avatar1.png"
              alt="avatar"
              fill
              className="absolute object-cover rounded-full"
            />
          </div>
          <span className="flex-col flex space-y-1.5">
            <p className="font-medium text-xs">Jasmine</p>
            <p className="text-black/30 text-xs">Prodigy</p>
          </span>
        </div>
      </div>

      <div
        onClick={() => setIsMenuOpen(false)}
        className={`${!isMenuOpen && "hidden"} fixed inset-0 bg-black/30 z-40`}
      ></div>
    </>
  );
};

export default Navbar;
