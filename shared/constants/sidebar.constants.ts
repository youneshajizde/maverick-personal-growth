import {
  ChartBarBigIcon,
  DonutIcon,
  DumbbellIcon,
  FileWarningIcon,
  GraduationCapIcon,
  HouseIcon,
  ListIcon,
  MessageSquareMoreIcon,
  ShoppingBagIcon,
  StoreIcon,
} from "lucide-react";
import { SidebarSection } from "../types/sidebar.types";

export const sidebarSections: SidebarSection[] = [
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
        type: "Dropdown",
        title: "Shop",
        url: "/dashboard/shop",
        value: "shop",
        icon: ShoppingBagIcon,
        items: [
          {
            type: "Link",
            title: "Wishlist",
            url: "/dashboard/shop/wishlist",
            value: "wishlist",
            icon: ListIcon,
          },
          {
            type: "Link",
            title: "Amazon",
            url: "/dashboard/shop/products",
            value: "products",
            icon: StoreIcon,
          },
          
        ],
      },
    ],
  },
  {
    label: "Others",
    items: [
      {
        type: "Modal",
        title: "Info",
        value: "info",
        icon: FileWarningIcon,
        action: () => console.log("Open Info Modal"),
      },
      {
        type: "Link",
        title: "Grps",
        url: "/dashboard/grps",
        value: "grps",
        icon: MessageSquareMoreIcon,
      },
      {
        type: "Link",
        title: "Status",
        url: "/dashboard/status",
        value: "status",
        icon: ChartBarBigIcon,
      },
    ],
  },
];