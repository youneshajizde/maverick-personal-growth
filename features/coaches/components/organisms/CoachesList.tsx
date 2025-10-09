"use client";

import { getCoaches } from "@/features/shop/lib/api/products";
import Badge from "@/shared/components/atoms/Badge";
import { Pagination } from "@/shared/components/organisms/pagination";
import { MapPinIcon, SendHorizonalIcon } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import useSWR from "swr";

const CoachesList = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const router = useRouter();

  const handleChangePage = (newPage: number) => {
    router.push(`?page=${newPage}`);
  };

  const { data: coaches } = useSWR(["coaches", page], () =>
    getCoaches(page, 9)
  );
  console.log(coaches?.data?.data);
  console.log(coaches?.data?.meta);
  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {coaches?.data?.data.map((coach, i) => (
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
                <button className="btn btn-lg f-center gap-1.5">
                  <span>Connect</span>
                  <SendHorizonalIcon size={15} />
                </button>
              </div>
            </div>
            <div className="flex-4 p-1.5 rounded-2xl flex flex-col justify-between h-full items-start">
              <p className="bg-light py-1.5 px-3 rounded-lg text-sm inline-block">
                {coach.profession}
              </p>
              <p className="flex items-center gap-1 ">
                <span className="font-medium text-base">{coach.name}</span>
                <Image
                  alt="verified"
                  src="/images/icons/verified.svg"
                  width={15}
                  height={15}
                />
              </p>
              <p className="flex gap-3">
                <span className="text-sm">${coach.cost}.00/hr</span>
                <span className="flex gap-1 items-center">
                  <MapPinIcon size={17} />
                  <span className="text-sm">{coach.location}</span>
                </span>
              </p>

              <div className="w-full mt-2 overflow-x-auto">
                <ul className="flex gap-2 text-sm flex-nowrap">
                  {coach.skills.map((skill, i) => (
                    <li key={i} className="flex-shrink-0">
                      <Badge variant="info">{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="f-center w-full gap-3 mt-6">
        <Pagination
          currentPage={page}
          onChange={handleChangePage}
          totalPages={coaches?.data?.meta?.pagination?.pageCount as number}
        >
          <Pagination.Prev />
          <Pagination.Pages />
          <Pagination.Next />
        </Pagination>
      </div>
    </>
  );
};

export default CoachesList;
