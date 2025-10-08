import Input from "@/shared/components/molecules/Input";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <>
      <h1 className="text-xl font-medium">Create your account</h1>
      <p className="text-sm text-black/30">
        And grow together with other mavericks around the globe
      </p>

      <div className=" space-y-6 mt-6">
        <Input label="Username" placeholder="Younes hajizade" />

        <Input label="Email" placeholder="Youneshajizade.work@gmail.com" />

        <Input label="Password" placeholder="********" />

        <div className="space-y-3">
          <p className="text-black/30 font-light text-sm">
            Already have an account?
            <Link href={"/login"} className="text-sm text-blue-600 underline ml-1.5">
              Click here
            </Link>
          </p>
          <button className="btn btn-xl btn-primary w-full">Register</button>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
