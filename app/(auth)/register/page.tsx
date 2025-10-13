import RegisterForm from "@/features/auth/RegisterForm";

import React from "react";

const RegisterPage = () => {
  return (
    <>
      <h1 className="text-xl font-medium">Create your account</h1>
      <p className="text-sm text-black/30">
        And grow together with other mavericks around the globe
      </p>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
