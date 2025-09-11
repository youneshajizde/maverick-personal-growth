"use client";

import RadialChart from "@/features/diet/components/organisms/HydrationChart";
import MealCard from "@/features/diet/components/organisms/MealCard";
import ProgressBar from "@/shared/navigation/components/molecules/ProgressBar";
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

      <div className="my-6 grid grid-cols-1 lg:grid-cols-8 gap-6 items-stretch min-h-[300px]">
        <div className="col-span-3 flex flex-col">
          <h2 className="text-2xl font-medium mb-6">Meals Today</h2>
          <div className="space-y-3 flex-1 flex flex-col">
            <MealCard />
            <MealCard />
            <MealCard />
          </div>
        </div>
        <div className="col-span-2 flex flex-col">
          <h2 className="text-2xl font-medium mb-6">Macros</h2>
          <div className="bg-white p-6 rounded-4xl flex-1 w-full">
            <ul className="space-y-6">
              <li className="flex items-center gap-1.5">
                <div className="bg-progress w-11 h-11 flex items-center justify-center text-sm text-white rounded-xl font-medium">
                  54 g
                </div>
                <div className="flex-1 flex flex-col space-y-1.5">
                  <span className="flex justify-between items-center *:font-medium *:text-sm">
                    <p>Carbohydrate</p>
                    <p>65%</p>
                  </span>
                  <ProgressBar percentage={65} />
                </div>
              </li>
              <li className="flex items-center gap-1.5">
                <div className="bg-progress w-11 h-11 flex items-center justify-center text-sm text-white rounded-xl font-medium">
                  54 g
                </div>
                <div className="flex-1 flex flex-col space-y-1.5">
                  <span className="flex justify-between items-center *:font-medium *:text-sm">
                    <p>Protein</p>
                    <p>30%</p>
                  </span>
                  <ProgressBar percentage={30} />
                </div>
              </li>
              <li className="flex items-center gap-1.5">
                <div className="bg-progress w-11 h-11 flex items-center justify-center text-sm text-white rounded-xl font-medium">
                  54 g
                </div>
                <div className="flex-1 flex flex-col space-y-1.5">
                  <span className="flex justify-between items-center *:font-medium *:text-sm">
                    <p>Fat</p>
                    <p>82%</p>
                  </span>
                  <ProgressBar percentage={82} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-3 flex flex-col">
          <h2 className="text-2xl font-medium mb-6">Hydration</h2>
          <div className="relative min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] rounded-4xl overflow-hidden flex-1">
            <Image
              alt="hydration"
              src="/images/hydration.jpg"
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
            <div className="absolute bottom-6 right-6 w-10 h-10 bg-white text-white z-50 rounded-3xl ">
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DietPage;
