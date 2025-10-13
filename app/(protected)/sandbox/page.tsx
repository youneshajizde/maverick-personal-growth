"use client";

import React, { useState } from "react";
import { Stepper } from "@/shared/components/organisms/stepper";
import LoginForm from "@/features/auth/LoginForm";
import RegisterForm from "@/features/auth/RegisterForm";

export const steps = [<div>hello</div>, <div>greetings</div>, <RegisterForm />];

const page = () => {
  return (
    <div className="w-full h-screen f-center">
      <div className="w-[500px] h-[300px]">
        <Stepper steps={steps}>
          <Stepper.Indicator />
          <Stepper.Content />
          <div className="f-align justify-between mt-6">
            <Stepper.BackBtn />
            <Stepper.NextBtn />
          </div>
        </Stepper>
      </div>
    </div>
  );
};

export default page;
