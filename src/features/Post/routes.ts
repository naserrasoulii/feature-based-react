import type { RouteObject } from "react-router";
import PostView from "./views/PostView";
export const PostRoutes: RouteObject[] = [
  {
    path: "/",
    Component: PostView,
  },
];
