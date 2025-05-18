import type { RouteObject } from "react-router";
import PostView from "./views/PostView";
import FullLayout from "@/core/layouts/FullLayout";
export const PostRoutes: RouteObject[] = [
  {
    path: "/posts",
    Component: FullLayout,
    children: [
      {
        path: "",
        Component: PostView,
      },
    ],
  },
];
