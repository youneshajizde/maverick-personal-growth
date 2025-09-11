"use client";

import OverviewCard from "@/shared/navigation/components/OverviewCard";
import {
  ArrowUpFromDotIcon,
  BookUp2Icon,
  ClockArrowUpIcon,
  EllipsisVerticalIcon,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const StudyPage = () => {
  const [overviewData, setOverviewData] = useState({
    calories: 13.5,
    mealsCompleted: 2,
    streakDays: 7,
  });
  return (
    <>
      <div className="f-align justify-between mb-6">
        <span className="space-y-1.5">
          <p className="font-medium">Organize your Studies</p>
          <p className="text-sm text-black/30">
            You can track your study routine by the overview section
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
          title={"Hours studied"}
          value={overviewData.calories}
          unit="hours"
          icon={<ClockArrowUpIcon size={40} />}
        />
        <OverviewCard
          title={"Study Sessions"}
          value={overviewData.mealsCompleted}
          unit="In a day"
          icon={<BookUp2Icon size={40} />}
        />
        <OverviewCard
          title={"Study Streak"}
          value={overviewData.streakDays}
          unit="Days"
          icon={<ArrowUpFromDotIcon size={40} />}
        />
      </div>
    </>
  );
};

export default StudyPage;
