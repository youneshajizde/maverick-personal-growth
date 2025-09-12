import {
  EllipsisVerticalIcon,
  MapPinIcon,
  MessageCircleMoreIcon,
  SearchIcon,
  SendHorizonalIcon,
  SendIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Selectbox from "@/shared/components/molecules/Selectbox";
import Searchbox from "@/shared/components/molecules/Searchbox";

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
        <Searchbox />
        <Selectbox />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="card flex gap-1.5 bg-white rounded-3xl min-h-[160px] p-1"
          >
            <div className="bg-foreground flex-3 space-y-3 flex flex-col items-center justify-center rounded-2xl">
              <div className="rounded-full w-20 h-20 relative">
                <Image
                  alt="coach"
                  src="/images/coach1.jpg"
                  className="absolute rounded-full object-contain"
                  fill
                />
              </div>
              <div className="flex items-center gap-1.5">
                <button className="flex items-center justify-center gap-1.5 bg-secondary rounded-lg p-1.5 text-sm text-white">
                  <span>Connect</span>
                  <SendHorizonalIcon size={15} />
                </button>
              </div>
            </div>
            <div className="flex-4 p-1.5 rounded-2xl flex flex-col justify-between h-full items-start">
              <p className="bg-light py-1.5 px-3 rounded-lg text-sm inline-block">
                Product designer
              </p>
              <p className="flex items-center gap-1 ">
                <span className="font-medium text-base">Nova Shierly</span>
                <Image
                  alt="verified"
                  src="/images/icons/verified.svg"
                  width={15}
                  height={15}
                />
              </p>
              <p className="flex gap-3">
                <span className="text-sm">$170.00/hr</span>
                <span className="flex gap-1 items-center">
                  <MapPinIcon size={17} />
                  <span className="text-sm">Phoenix, AZ</span>
                </span>
              </p>
              <ul className="flex gap-3 text-sm">
                <li className="bg-foreground inline-block rounded-lg px-1.5 py-1">
                  UI/UX
                </li>
                <li className="bg-foreground inline-block rounded-lg px-1.5 py-1">
                  Motion
                </li>
                <li className="bg-foreground inline-block rounded-lg px-1.5 py-1">
                  Illustrator
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoachesPage;
