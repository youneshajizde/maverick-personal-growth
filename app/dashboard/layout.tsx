import { ReactNode } from "react";
import Sidebar from "@/shared/components/Sidebar";

export default function DashboardLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main className="h-screen p-5 flex">
      <div className="h-full sm:block w-[10%] lg:w-[13%]">
        <Sidebar />
      </div>
      <div className="flex-1 p-5 overflow-y-auto">
        {children}
      </div>
    </main>
  );
}