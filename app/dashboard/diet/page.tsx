"use client";

import OverviewCard from "@/shared/navigation/components/OverviewCard";
import {
  ArrowUpFromDotIcon,
  DrumstickIcon,
  EllipsisVerticalIcon,
  HandPlatterIcon,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const DietPage = () => {
  const [overviewData, setOverviewData] = useState({
    calories: 456,
    mealsCompleted: 2,
    streakDays: 7,
  });
  return (
    <>
      <div className="f-align justify-between mb-6">
        <span className="space-y-1.5">
          <p className="font-medium">Organize your workout routine</p>
          <p className="text-sm text-black/30">
            You can track your workout routine by the overview section
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

      <h2 className="text-2xl font-medium mb-6">Overview</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <OverviewCard
          title={"Calories consumed"}
          value={overviewData.calories}
          unit="Kcal"
          icon={<DrumstickIcon size={40} />}
        />
        <OverviewCard
          title={"Meals Logged"}
          value={overviewData.mealsCompleted}
          unit="/3"
          icon={<HandPlatterIcon size={40} />}
        />
        <OverviewCard
          title={"Diet Streak"}
          value={overviewData.streakDays}
          unit="Days"
          icon={<ArrowUpFromDotIcon size={40} />}
        />
      </div>

      <div className="My-6 grid grid-cols-1 lg:grid-cols-8 gap-6 mt-6">
        <div className="col-span-3 h-60">
          <h2 className="text-2xl font-medium mb-6">Meals Today</h2>
          <div className="space-y-3">
            <div className="rounded-3xl bg-white w-full h-auto p-3">
              <div className="space-y-3">
                <p className="font-medium text-primary">Breakfast</p>
                <span className="f-align gap-3">
                  <p className="bg-danger/40 p-1.5 rounded-lg w-8 h-8 f-center">
                    🔥
                  </p>
                  <p className="f-align gap-1.5">
                    <span>801</span>
                    <span className="text-sm text-black/30">Kcal</span>
                  </p>
                </span>
              </div>

              <div className="f-align">
                <div className="rounded-full"></div>
              </div>
            </div>
            <div className="rounded-3xl bg-white w-full h-auto p-3">
              <div className="space-y-3">
                <p className="font-medium text-primary">Breakfast</p>
                <span className="f-align gap-3">
                  <p className="bg-danger/40 p-1.5 rounded-lg w-8 h-8 f-center">
                    🔥
                  </p>
                  <p className="f-align gap-1.5">
                    <span>801</span>
                    <span className="text-sm text-black/30">Kcal</span>
                  </p>
                </span>
              </div>
            </div>
            <div className="rounded-3xl bg-white w-full h-auto p-3">
              <div className="space-y-3">
                <p className="font-medium text-primary">Breakfast</p>
                <span className="f-align gap-3">
                  <p className="bg-danger/40 p-1.5 rounded-lg w-8 h-8 f-center">
                    🔥
                  </p>
                  <p className="f-align gap-1.5">
                    <span>801</span>
                    <span className="text-sm text-black/30">Kcal</span>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 h-60">
          <h2 className="text-2xl font-medium mb-6">Macros</h2>
          <div className="bg-[#F6FF99] h-full rounded-4xl">
          </div>
        </div>
        <div className="col-span-3 h-60">
          <h2 className="text-2xl font-medium mb-6">Hydration</h2>
          <div className="relative h-full  rounded-4xl overflow-hidden" >
            <Image
              alt="hydration"
              src={"/images/hydration.jpg"}
              fill
              className="rounded-xl object-cover absolute w-full"
            />
            <div className="absolute inset-0 bg-black/40 z-40 rounded-xl" />
            <div className="z-50 absolute p-6 space-y-1.5">
              <p className="text-white font-semibold text-2xl">
                Drink 8 glasses of water
              </p>
              <p className="text-light text-xs">06:00 am - 06:00 pm</p>
            </div>
            <div className="absolute bottom-6 right-6 text-white z-50 w-40 h-13 rounded-3xl bg-white">sdfdf</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DietPage;
