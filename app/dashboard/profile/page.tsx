import Input from "@/shared/components/molecules/Input";
import { PencilIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div
        style={{
          background: "url('/images/profile-banner.jpg')",
          backgroundSize: "cover",
        }}
        className="bg-white relative rounded-3xl h-45"
      >
        <div className="rounded-full bg-secondary size-35 left-1/2 -bottom-10  -translate-x-1/2 md:left-10 md:translate-x-0 absolute">
          <Image
            src={"/images/avatar2.jpg"}
            alt="avatar"
            fill
            className="absolute rounded-full"
          />
          <button className="btn btn-accent btn-round absolute bottom-0 right-0">
            <PencilIcon />
          </button>
        </div>
      </div>

      <div className="text-center md:text-left mt-16">
        <h2 className="text-2xl font-medium">Fernanda Alejandro</h2>
        <p className="text-black/30">Senior Oracle developer</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 items-stretch">
        <div className="col-span-1 flex-flex-col bg-white rounded-3xl flex-1 p-6">
          <p className="text-xl font-medium">Public Information</p>
          <ul className="flex flex-col text-sm space-y-3 mt-3">
            <li className="space-x-1.5">
              <span className="text-black/40 font-light">Name :</span>
              <span className="">Fernanda alejandro</span>
            </li>
            <li>
              <span className="text-black/40 font-light">Location : </span>
              <span className="">Monaco</span>
            </li>
            <li className="space-x-1.5">
              <span className="text-black/40 font-light">Joined since :</span>
              <span className="">2025</span>
            </li>
            <li className="space-x-1.5">
              <span className="text-black/40 font-light">Languages :</span>
              <span className="">English/French</span>
            </li>
            <li className="space-x-1.5">
              <span className="text-black/40 font-light">Age :</span>
              <span className="">29</span>
            </li>
            <li className="space-x-1.5">
              <span className="text-black/40 font-light">Height :</span>
              <span className="">{"5'9"}</span>
            </li>
          </ul>
        </div>
        <div className="col-span-2 bg-gradient-to-b p-6 from-[#f5babb] to-accent relative rounded-3xl">
          <p className="text-4xl text-white font-semibold">
            Chat online with <br /> fellow Mavericks
          </p>
          <p className="text-white text-xl mt-3">On May 2026</p>
          <button className="btn btn-white btn-xl mt-6">Coming soon</button>
          <Image
            alt="chatting-eagles"
            src={"/images/eagles.png"}
            width={450}
            height={450}
            className="hidden md:block absolute right-5 bottom-5 "
          />
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xl font-medium">Fill/Edit Your Information</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input
            placeholder="type your name"
            label="Name :"
            className="bg-white"
          />
          <Input
            placeholder="type your name"
            label="Location :"
            className="bg-white"
          />
          <Input
            placeholder="type your name"
            label="Languages :"
            className="bg-white"
          />
          <Input
            placeholder="type your name"
            label="Age :"
            className="bg-white"
          />
          <Input
            placeholder="type your name"
            label="Name :"
            className="bg-white"
          />
          <Input
            placeholder="type your name"
            label="Location :"
            className="bg-white"
          />
          <Input
            placeholder="type your name"
            label="Languages :"
            className="bg-white"
          />
          <Input
            placeholder="type your name"
            label="Age :"
            className="bg-white"
          />
        </div>

        <div className="f-align w-full justify-end mt-9">
          <button className="w-full md:w-auto btn btn-xl">Apply your information</button>
        </div>
      </div>
    </div>
  );
};

export default page;
