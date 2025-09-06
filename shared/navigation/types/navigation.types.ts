import { LucideIcon } from "lucide-react";

interface BaseNavigationItem {
  title: string;
  icon: LucideIcon;
  value: string;
}

export type NavigationItems =
  | (BaseNavigationItem & {
      type: "Link";
      url: string;
    })
  | (BaseNavigationItem & {
      type: "Action";
      action: () => void;
    })
  | (BaseNavigationItem & {
      type: "Modal";
      action: () => void;
      url?: string; 
    })
  | (BaseNavigationItem & {
      type: "Dropdown";
      url?: string;
      items?: NavigationItems[];
    });

export interface NavigationSection {
  label: string;
  items: NavigationItems[];
}