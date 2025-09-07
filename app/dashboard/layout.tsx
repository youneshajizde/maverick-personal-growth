import { ReactNode } from "react";
import Sidebar from "@/shared/navigation/components/Sidebar";
import Navbar from "@/shared/navigation/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="h-screen p-5 flex flex-col sm:flex-row">
      <Navbar/>
      <div className="h-full hidden sm:block w-[10%] lg:w-[13%]">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto sm:ml-6 mt-6 sm:mt-0">{children}</div>
    </main>
  );
}
