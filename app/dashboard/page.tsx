import Clock from "@/features/exercise/components/Clock";

import React from "react";

const Dashboard = () => {
  return (
    <section className="space-y-3">
      <nav className=" mt-3 sm:mt-0 f-align justify-center sm:justify-between">
        <h1 className="text-xl text-center sm:text-start sm:text-2xl font-medium ">
          Welcome home Maverick Jonas!😎
        </h1>
        <Clock />
      </nav>

      
    </section>
  );
};

export default Dashboard;
