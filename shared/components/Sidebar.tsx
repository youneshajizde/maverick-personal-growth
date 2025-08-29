import Image from "next/image";
import React from "react";
import {
  ChartBarBigIcon,
  ChevronDownIcon,
  DonutIcon,
  DumbbellIcon,
  FileWarningIcon,
  GraduationCapIcon,
  HouseIcon,
  MessageSquareMoreIcon,
  ShoppingBagIcon,
} from "lucide-react";
const Sidebar = () => {
  return (
    <section className="md:flex flex-col h-full hidden justify-between gap-3">
      <div className="bg-white flex-1 w-full rounded-xl p-3 flex justify-between flex-col">
        <div className=" flex flex-col">
          <div className="f-align gap-1.5">
            <Image
              src={"/images/logo-1.png"}
              alt="logo"
              width={50}
              height={50}
            />
            <p className="text-secondary text-xl font-semibold">Maverick</p>
          </div>
          <p className="text-black/30 text-xs mt-6">Menu</p>

          <ul className="flex flex-col space-y-1.5 mt-3">
            <li className="f-align gap-1.5 hover:text-white transform transition-all hover:bg-secondary rounded-lg p-1.5">
              <HouseIcon className="size-4.5" />
              <p className="text-sm">Home</p>
            </li>
            <li className="f-align gap-1.5 hover:text-white transform transition-all hover:bg-secondary rounded-lg p-1.5">
              <DumbbellIcon className="size-4.5" />
              <p className="text-sm">Exercise</p>
            </li>
            <li className="f-align gap-1.5 hover:text-white transform transition-all hover:bg-secondary rounded-lg p-1.5">
              <DonutIcon className="size-4.5" />
              <p className="text-sm">Diet</p>
            </li>
            <li className="f-align gap-1.5 hover:text-white transform transition-all hover:bg-secondary rounded-lg p-1.5">
              <GraduationCapIcon className="size-4.5" />
              <p className="text-sm">Study</p>
            </li>
            <li className="f-align gap-1.5 hover:text-white transform transition-all hover:bg-secondary rounded-lg p-1.5">
              <ShoppingBagIcon className="size-4.5" />
              <p className="text-sm">Lets Shop</p>
            </li>
          </ul>

          <p className="text-black/30 text-xs mt-6">Others</p>
          <ul className="flex flex-col space-y-1.5 mt-3">
            <li className="f-align gap-1.5 hover:text-white transform transition-all hover:bg-secondary rounded-lg p-1.5">
              <FileWarningIcon className="size-4.5" />
              <p className="text-sm">Info</p>
            </li>
            <li className="f-align gap-1.5 hover:text-white transform transition-all hover:bg-secondary rounded-lg p-1.5">
              <MessageSquareMoreIcon className="size-4.5" />
              <p className="text-sm">Community</p>
            </li>
            <li className="f-align justify-between p-1.5">
              <div className="f-align gap-1.5">
                <ChartBarBigIcon className="size-4.5" />
                <p className="text-sm">Status</p>
              </div>
              <ChevronDownIcon className="size-4" />
            </li>
          </ul>
        </div>

        <div className="f-align gap-1.5 mt-6">
          <div className="size-10 lg:size-12 rounded-full relative">
            <Image
              src={"/images/avatar.jpg"}
              alt="avatar"
              fill
              className="absolute object-cover rounded-full"
            />
          </div>
          <span className="flex flex-col space-y-1.5">
            <p className="font-medium text-xs">Jasmine mendez</p>
            <p className="text-black/30 text-xs">Prodigy</p>
          </span>
        </div>
      </div>
      <div className="justify-center f-align w-full bg-transparent md:bg-gradient-to-b from-secondary to-secondary/80 rounded-xl">
        <Image
          alt="maverick"
          src={"/images/mav-s.png"}
          width={60}
          height={60}
        />

        <div className="text-white">
          <p className="text-xl font-semibold">LEVEL.</p>
          <p className="text-2xl font-bold">Prodigy</p>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
