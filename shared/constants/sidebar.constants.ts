import {
  ChartBarBigIcon,
  ChevronDownIcon,
  DonutIcon,
  DumbbellIcon,
  FileWarningIcon,
  GraduationCapIcon,
  HouseIcon,
  MessageSquareMoreIcon,
  ShoppingBagIcon,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "home",
    icon: HouseIcon,
    url: "/dashboard/home",
    value: "home",
  },
  {
    title: "Exercise",
    icon: DumbbellIcon,
    url: "/dashboard/exercise",
    value: "exercise",
  },
  {
    title: "Diet",
    icon: DonutIcon,
    url: "/dashboard/diet",
    value: "diet",
  },
  {
    title: "Study",
    icon: GraduationCapIcon,
    url: "/dashboard/study",
    value: "study",
  },
  {
    title: "Let's shop",
    icon: ShoppingBagIcon,
    url: "/dashboard/shop",
    value: "shop",
  },
];

export const sidebarSections = [
  {
    label: "Menu",
    items: [
      {
        type: "Link",
        title: "Home",
        url: "/dashboard/home",
        value: "home",
        icon: HouseIcon,
      },
      {
        type: "Link",
        title: "Exercise",
        url: "/dashboard/exercise",
        value: "exercise",
        icon: DumbbellIcon,
      },
      {
        type: "Link",
        title: "Diet",
        url: "/dashboard/diet",
        value: "diet",
        icon: DonutIcon,
      },
      {
        type: "Link",
        title: "Study",
        url: "/dashboard/study",
        value: "study",
        icon: GraduationCapIcon,
      },
      {
        type:"Link" ,
        title: "Shop",
        url: "/dashboard/shop",
        value: "shop",
        icon: ShoppingBagIcon,
      },
    ],
  },

  {
    label: "Others",
    items: [
      {
        type:"Link" ,
        title: "Info",
        url: "/dashboard/info",
        value: "info",
        icon: FileWarningIcon,
      },
      {
        type:"Link" ,
        title: "Grps",
        url: "/dashboard/grps",
        value: "grps",
        icon: MessageSquareMoreIcon,
      },
      {
        type:"hover" ,
        hasChevron : true,
        title: "Status",
        url: "/dashboard/status",
        value: "status",
        icon: ChartBarBigIcon,
      },
    ],
  },
];
