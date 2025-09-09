"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUpFromDotIcon,
  CalendarCheck2Icon,
  EllipsisVerticalIcon,
  FlameIcon,
} from "lucide-react";

import WeightChart from "@/features/exercise/components/organisms/WeightChart";
import WorkoutTracker from "@/features/exercise/components/organisms/WorkoutTracker";
import WorkoutHistory from "@/features/exercise/components/organisms/WorkoutHistory";
import OverviewCard from "@/features/exercise/components/molecules/OverviewCard";

const ExercisePage = () => {
  const [overviewData, setOverviewData] = useState({
    calories: 1403,
    workoutsCompleted: 4,
    streakDays: 7,
  });
  return (
    <div>
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
          title={"Calories burnt"}
          value={overviewData.calories}
          unit="Kcal"
          icon={<FlameIcon size={40} />}
        />
        <OverviewCard
          title={"Workouts this week"}
          value={overviewData.workoutsCompleted}
          unit="/6"
          icon={<CalendarCheck2Icon size={40} />}
        />
        <OverviewCard
          title={"Calories burnt"}
          value={overviewData.streakDays}
          unit="Days"
          icon={<ArrowUpFromDotIcon size={40} />}
        />
      </div>
      <h2 className="text-2xl font-medium mb-6 my-6">Workout</h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 *:rounded-xl">
        <div className="lg:col-span-3 space-y-6 sm:gap-6  h-auto sm:space-y-0 bg-white p-6 grid grid-cols-1 sm:grid-cols-3">
          <WorkoutTracker />
          <WorkoutHistory />
        </div>
        <div className="lg:col-span-2 h-auto bg-white p-6">
          <WeightChart />
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;
