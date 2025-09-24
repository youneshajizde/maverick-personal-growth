"use client";

import SubjectsBreakdownChart from "@/features/study/organisms/SubjectsBreakdownChart";
import OverviewCard from "@/shared/navigation/components/OverviewCard";
import {
  ArrowUpFromDotIcon,
  BookPlusIcon,
  BookUp2Icon,
  CheckIcon,
  ClockArrowUpIcon,
  DownloadIcon,
  EllipsisVerticalIcon,
  FileTextIcon,
  HistoryIcon,
  TrashIcon,
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

      <div className="my-6 grid grid-cols-1 lg:grid-cols-8 gap-6 items-stretch min-h-[300px]">
        <div className="col-span-3 flex flex-col">
          <h2 className="text-2xl font-medium mb-6">Sessions Today</h2>

          <div className="sessions-div space-y-3 rounded-3xl justify-between  w-full h-auto">
            <div className="logs space-y-3">
              <div className="f-align justify-between rounded-2xl p-3 bg-white">
                <p className="">Math</p>
                <p>45 min</p>
                <p>😊</p>
                <div className="f-align gap-1.5">
                  <button className="btn btn-danger text-white p-1 rounded-lg">
                    <TrashIcon size={20} />
                  </button>
                  <button className="btn btn-accept f-align gap-1.5 *:text-white rounded-lg p-1">
                    <CheckIcon size={20} />
                  </button>
                </div>
              </div>
                            <div className="f-align justify-between rounded-2xl p-3 bg-white">
                <p className="">Math</p>
                <p>45 min</p>
                <p>😊</p>
                <div className="f-align gap-1.5">
                  <button className="bg-red-500 text-white p-1 rounded-lg">
                    <TrashIcon size={20} />
                  </button>
                  <button className="f-align gap-1.5 *:text-white bg-progress rounded-lg p-1">
                    <CheckIcon size={20} />
                  </button>
                </div>
              </div>
                            <div className="f-align justify-between rounded-2xl p-3 bg-white">
                <p className="">Math</p>
                <p>45 min</p>
                <p>😊</p>
                <div className="f-align gap-1.5">
                  <button className="bg-red-500 text-white p-1 rounded-lg">
                    <TrashIcon size={20} />
                  </button>
                  <button className="f-align gap-1.5 *:text-white bg-progress rounded-lg p-1">
                    <CheckIcon size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full f-align  justify-between items-end">
              <button className="f-align gap-1.5 btn btn-lg btn-accent">
                <span>Add session</span>
                <BookPlusIcon size={20} />
              </button>
              <button className="f-align gap-1.5 btn btn-lg">
                <span>History logs</span>
                <HistoryIcon size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex flex-col">
          <h2 className="text-2xl font-medium mb-6">Subjects Breakdown</h2>
          <div className="bg-white p-6 rounded-4xl flex-1 w-full">
            <SubjectsBreakdownChart />
          </div>
        </div>

        <div className="col-span-3 flex flex-col">
          <h2 className="text-2xl font-medium mb-6">Book Suggestion</h2>
          <div className="bg-white rounded-4xl gap-3 grid grid-cols-2 lg:grid-cols-5 flex-1 w-full p-3">
            <div
              style={{ background: "url('/images/book.jpg')" }}
              className="relative f-center col-span-2 rounded-3xl bg-secondary"
            >
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-xs rounded-3xl opacity-60"
                style={{ backgroundImage: "url('/images/book.jpg')" }}
              ></div>
              <Image
                className="z-10 rounded-2xl"
                src={"/images/book.jpg"}
                alt="book"
                width={100}
                height={100}
              />
            </div>

            <div className="col-span-3">
              <div className="content text-sm font-medium flex flex-col h-full justify-between py-3">
                <div className="space-y-1.5">
                  <p className="text-xl">Follow me to ground</p>
                  <p>
                    <span className="text-black/40 font-light">Author : </span>
                    <span className="">Sue rainsford</span>
                  </p>
                  <p>
                    <span className="text-black/40 font-light">Genre : </span>
                    <span>Mysterious</span>
                  </p>
                  <p>
                    <span className="text-black/40 font-light">Pages : </span>
                    <span>309</span>
                  </p>
                  <p>
                    <span className="text-black/40 font-light">
                      Published year :{" "}
                    </span>
                    <span>2013</span>
                  </p>
                </div>

                <div className="f-align gap-3">
                  <button className="btn btn-lg f-align gap-1.5">
                    <span>Download</span>
                    <DownloadIcon size={20}/>
                  </button>
                   <button className="btn btn-lg text-white f-align gap-1.5">
                    <span>Summary</span>
                    <FileTextIcon size={20}/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyPage;
