import { LucideIcon } from "lucide-react";



interface BaseSidebarItem {
  title: string;
  icon: LucideIcon;
  value?: string;
}

export type SidebarItems =
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
      items?: SidebarItems[];
      value: string;
    });
