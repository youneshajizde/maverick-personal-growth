import Input from "@/shared/components/molecules/Input";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <h1 className="text-xl font-medium">Log into your account</h1>
      <div className=" space-y-6 mt-6">
        <Input label="Username" placeholder="Younes hajizade" />
        <Input label="Password" placeholder="********" />
        <div className="space-y-3">
          <p className="text-black/30 font-light text-sm">
            Dont have an account?
            <Link
              href={"/register"}
              className="text-sm text-blue-600 underline ml-1.5"
            >
              Click here
            </Link>
          </p>
          <button className="btn btn-xl btn-primary w-full">Log in</button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
