import Sidebar from "@/shared/components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-dvh p-5 flex gap-3">
      <div className="h-full hidden sm:block w-[10%] lg:w-[13%]">
        <Sidebar />
      </div>

      <div className="flex-1">{children}</div>
    </main>
  );
}
