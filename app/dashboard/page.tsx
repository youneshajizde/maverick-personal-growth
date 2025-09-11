"use client";

import Clock from "@/features/exercise/components/atoms/Clock";
import OverviewCard from "@/shared/navigation/components/OverviewCard";
import {
  ArrowUpFromDotIcon,
  CalendarCheck2Icon,
  DonutIcon,
  DumbbellIcon,
  FlameIcon,
  GraduationCapIcon,
} from "lucide-react";

import React, { useState } from "react";

const Dashboard = () => {
  const [overviewData, setOverviewData] = useState({
    calories: +1003,
    workoutsCompleted: +500,
    streakDays: +1400,
  });
  return (
    <section className="space-y-3">
      <nav className=" mt-3 sm:mt-0 f-align justify-center sm:justify-between">
        <div className="space-y-1.5">
          <h1 className="text-xl sm:text-2xl font-medium ">
            Welcome home Maverick Jonas!😎
          </h1>
          <p className="text-sm text-black/30">
            You can track your workout routine by the overview section
          </p>
        </div>
        <Clock />
      </nav>
      <h2 className="text-2xl font-medium my-6">Overview</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <OverviewCard
          title={"Exercise"}
          value={overviewData.calories}
          unit="points"
          icon={<DumbbellIcon size={40} />}
        />
        <OverviewCard
          title={"Diet"}
          value={overviewData.workoutsCompleted}
          unit="points"
          icon={<DonutIcon size={40} />}
        />
        <OverviewCard
          title={"Study"}
          value={overviewData.streakDays}
          unit="points"
          icon={<GraduationCapIcon size={40} />}
        />
      </div>
    </section>
  );
};

export default Dashboard;
