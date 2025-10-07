import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="p-3 grid grid-cols-2 w-full h-screen">
      <section className="col-span-1 f-center">
        <div className=" w-130 min-h-100">
          <div>{children}</div>
        </div>
      </section>
      <div className="bg-[url('/images/abstract.jpg')] bg-cover col-span-1 rounded-3xl"></div>
    </main>
  );
};

export default AuthLayout;
