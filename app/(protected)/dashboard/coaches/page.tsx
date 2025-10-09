import {
  EllipsisVerticalIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
// import Selectbox from "@/shared/components/molecules/Selectbox";
import Searchbox from "@/shared/components/molecules/Searchbox";
// import { COACHES_CATEGORIES } from "@/features/coaches/constants/categories.constants";
import CoachesList from "@/features/coaches/components/organisms/CoachesList";

const CoachesPage = () => {
  return (
    <>
      <div className="f-align justify-between mb-6">
        <span className="space-y-1.5">
          <p className="font-medium">Find the best coaches online</p>
          <p className="text-sm text-black/30">
            You can find coaches , talk to them online via our chatbox on our
            platform
          </p>
        </span>

        <div className="f-align gap-3 hidden sm:flex">
          <div className="f-align gap-1.5 justify-center lg:justify-start flex-shrink-0">
            <div className="size-10 lg:size-10 rounded-full relative">
              <Image
                src="/images/avatar2.jpg"
                alt="avatar"
                fill
                className="absolute object-cover rounded-full"
              />
            </div>
            <span className="flex-col hidden lg:flex space-y-1.5">
              <p className="font-medium text-xs">Jasmine</p>
              <p className="text-black/30 text-xs">Prodigy</p>
            </span>
          </div>

          <EllipsisVerticalIcon size={20} />
        </div>
      </div>

      <div className="max-w-xl f-align gap-3">
        <Searchbox searchIn="name" />
        {/* <Selectbox  options={COACHES_CATEGORIES} /> */}
      </div>

      <CoachesList />
    </>
  );
};

export default CoachesPage;
