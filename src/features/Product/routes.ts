import type { RouteObject } from "react-router";
import ProductView from "./views/ProductView";
import FullLayout from "@/core/layouts/FullLayout";
export const ProducsRoute: RouteObject[] = [
  {
    path: "/products",
    Component: FullLayout,
    children: [
      {
        path: "",
        Component: ProductView,
      },
    ],
  },
];
