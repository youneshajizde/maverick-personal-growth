import { LucideIcon } from "lucide-react";

export type SidebarItem = {
  type: "Link" | "Modal" | "Action" | "Dropdown";
  title: string;
  icon: LucideIcon;
  url?: string;
  value?: string;
  action?: () => void;
};

interface BaseSidebarItem {
  title: string;
  icon: LucideIcon;
  value?: string;
}

export type SidebarItemS =
  | (BaseSidebarItem & {
      type: "Link";
      url: string;
      value: string;
    })
  | (BaseSidebarItem & {
      type: "Action";
      action: () => void;
    })
  | (BaseSidebarItem & {
      type: "Modal";
      action: () => void;
    })
  | (BaseSidebarItem & {
      type: "Dropdown";
      url?: string;
      items?: SidebarItem[];
      value: string;
    });
