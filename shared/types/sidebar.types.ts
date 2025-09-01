import { LucideIcon } from "lucide-react";

export type SidebarItem = {
  type: "Link" | "Modal" | "Action" | "Dropdown";
  title: string;
  icon: LucideIcon;
  url?: string;
  value?: string;
  action?: () => void;
};


