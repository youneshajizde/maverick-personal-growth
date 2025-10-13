"use client";

import { submitAuth } from "@/shared/actions/auth.actions";
import Input from "@/shared/components/molecules/Input";
import { useToast } from "@/shared/components/organisms/toast/ToastContext";
import Link from "next/link";
import React from "react";

const RegisterForm = () => {
      const { addToast } = useToast();
    
  return (
    <form
      action={async (fd) => {
        
        const res = await submitAuth(fd);

        if (!res.success) {
          addToast("it failed nigga" , "error");
        }
          addToast("it succeeded nigga" , "success");
      }}
      className=" space-y-6 mt-6"
    >
      <Input name="username" label="Username" placeholder="Younes hajizade" />

      <Input
        name="email"
        label="Email"
        placeholder="Youneshajizade.work@gmail.com"
      />

      <Input name="password" label="Password" placeholder="********" />

      <div className="space-y-3">
        <p className="text-black/30 font-light text-sm">
          Already have an account?
          <Link
            href={"/login"}
            className="text-sm text-blue-600 underline ml-1.5"
          >
            Click here
          </Link>
        </p>
        <button className="btn btn-xl btn-primary w-full">Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
