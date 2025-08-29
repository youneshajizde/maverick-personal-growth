import { DonutIcon, DumbbellIcon, GraduationCapIcon, HouseIcon, ShoppingBagIcon } from "lucide-react";

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
