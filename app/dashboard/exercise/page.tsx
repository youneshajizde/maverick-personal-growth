import React from "react";
import {
  ArrowUpFromDotIcon,
  ClipboardCheckIcon,
  EllipsisVerticalIcon,
  PlusIcon,
  SlashIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";

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
            <ZapIcon size={40} />
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
        <div className="col-span-3 bg-white p-3 grid grid-cols-1 sm:grid-cols-3">
          <div className="bg-white rounded-xl h-full col-span-1 p-3">
            <p className="font-medium">Workout tracker</p>

            <button className="mt-6 f-align gap-1.5 bg-secondary p-3 rounded-lg text-white">
              <span>Add workout</span>
              <PlusIcon size={18} />
            </button>

            <div className="mt-6">
              <p className="font-medium">Last workout</p>

              <div className="!mt-3">
                <p>Leg day</p>
                <ul className="mt-1.5 f-align gap-1.5 *:text-sm truncate">
                  <li>Squat</li>
                  <li>Leg curl</li>
                  <li>Lunge</li>
                </ul>
              </div>
              <div className="mt-3">
                <p className="">Calories burned</p>
                <p className="flex items-end gap-1.5">
                  <span className="">507</span>
                  <span className="text-sm">Kcal</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-accent rounded-2xl h-full p-3 col-span-2">
            <p className="font-medium text-white">Workout history</p>
          </div>
        </div>
        <div className="col-span-2 bg-white p-3"></div>
      </div>
    </div>
  );
};

export default ExercisePage;
