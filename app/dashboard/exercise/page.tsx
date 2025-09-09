"use client";

import React from "react";
import {
  ArrowUpFromDotIcon,
  ChevronRightIcon,
  ClipboardCheckIcon,
  EllipsisVerticalIcon,
  FlameIcon,
  PlusIcon,
  SlashIcon,
} from "lucide-react";
import Image from "next/image";
import WeightChart from "@/features/exercise/components/WeightChart";

const ExercisePage = () => {
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
        <div className="col-span-1 text-white flex flex-col justify-between h-40 rounded-xl bg-secondary p-3 space-y-3">
          <div className="flex justify-between">
            <p className="font-semibold text-2xl">
              Calories <br /> burned
            </p>
            <FlameIcon size={40} />
          </div>

          <p className="text-3xl font-light flex items-end gap-1.5">
            1,403
            <span className="text-lg">Kcal</span>
          </p>
        </div>
        <div className="col-span-1 flex flex-col justify-between text-white bg-secondary h-40 rounded-xl p-3">
          <div className="flex justify-between">
            <p className="font-semibold text-2xl">
              Workout <br />
              This week
            </p>
            <ClipboardCheckIcon size={40} />
          </div>

          <p className="text-3xl font-light f-align gap-1.5">
            3 <SlashIcon size={16} />6
          </p>
        </div>
        <div className="col-span-1 flex flex-col justify-between text-white bg-secondary h-40 rounded-xl p-3">
          <div className="flex justify-between">
            <p className="font-semibold text-2xl">
              Current <br />
              Streak
            </p>
            <ArrowUpFromDotIcon size={40} />
          </div>

          <p className="text-3xl font-light f-align gap-1.5">
            5 <span className="text-lg">Days</span>{" "}
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-medium mb-6 my-6">Workout</h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 *:rounded-xl">
        <div className="lg:col-span-3 space-y-6 h-auto sm:space-y-0 bg-white p-3 grid grid-cols-1 sm:grid-cols-3">
          <div className="flex flex-col justify-between h-full bg-white  rounded-xl col-span-1 sm:p-3">
            <p className="font-medium text-primary">Workout tracker</p>

            <div className="mt-6 ">
              <p className="font-medium">Last workout</p>

              <div>
                <div className="!mt-3">
                  <p className="f-align gap-1.5">
                    <Image
                      src={"/images/icons/leg.svg"}
                      alt="leg"
                      width={20}
                      height={20}
                    />
                    <span>Leg day</span>
                  </p>
                  <ul className="mt-1.5 *:text-black/30 f-align gap-1.5 *:text-sm truncate">
                    <li>Squat</li>
                    <li>Leg curl</li>
                    <li>Lunge</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <p className="f-align gap-1.5">
                    <FlameIcon size={15} />
                    <span>Calories burned</span>
                  </p>
                  <p className="flex *:text-black/30 items-end gap-1.5">
                    <span className="">507</span>
                    <span className="text-sm">Kcal</span>
                  </p>
                </div>
              </div>

              <button className="mb-6 sm:mb-0 mt-6  f-align justify-center w-full gap-1.5 bg-secondary p-3 rounded-xl text-white">
                <span>Add workout</span>
                <PlusIcon size={18} />
              </button>
            </div>
          </div>
          <div className="bg-primary rounded-2xl p-3 col-span-2">
            <p className="font-medium text-white">history</p>
            <ul className="mt-6 space-y-3">
              <li className="grid text-sm grid-cols-[50px_75px_1fr_50px] items-center text-white py-2">
                <span>Sep 12</span>
                <span className="text-right">231 kcal</span>
                <span className="text-center">Arms & Triceps</span>
                <span className="justify-self-end">
                  <ChevronRightIcon size={15} />
                </span>
              </li>
              <li className="grid grid-cols-[50px_75px_1fr_50px] text-sm items-center text-white py-2">
                <span>Sep 11</span>
                <span className="text-right">174 kcal</span>
                <span className="text-center">cardio</span>
                <span className="justify-self-end">
                  <ChevronRightIcon size={15} />
                </span>
              </li>
              <li className="grid grid-cols-[50px_75px_1fr_50px] text-sm items-center text-white py-2">
                <span>Sep 10</span>
                <span className="text-right">174 kcal</span>
                <span className="text-center">Chest & Abs</span>
                <span className="justify-self-end">
                  <ChevronRightIcon size={15} />
                </span>
              </li>
              <li className="grid grid-cols-[50px_75px_1fr_50px] text-sm items-center text-white py-2">
                <span>Sep 9</span>
                <span className="text-right">0 kcal</span>
                <span className="text-center">Rest</span>
                <span className="justify-self-end">
                  <ChevronRightIcon size={15} />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-2 h-80 bg-white p-6">
          <WeightChart />
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;
