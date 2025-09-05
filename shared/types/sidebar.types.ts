import { LucideIcon } from "lucide-react";

interface BaseSidebarItem {
  title: string;
  icon: LucideIcon;
  value: string;
}

export type SidebarItems =
  | (BaseSidebarItem & {
      type: "Link";
      url: string;
    })
  | (BaseSidebarItem & {
      type: "Action";
      action: () => void;
    })
  | (BaseSidebarItem & {
      type: "Modal";
      action: () => void;
      url?: string; 
    })
  | (BaseSidebarItem & {
      type: "Dropdown";
      url?: string;
      items?: SidebarItems[];
    });

export interface SidebarSection {
  label: string;
  items: SidebarItems[];
}