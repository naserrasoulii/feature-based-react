import { PostRoutes } from "@features/Post/routes";
import { useRoutes } from "react-router";

export const appRoutes = [...PostRoutes];

export const AppRouter = () => {
  const element = useRoutes(appRoutes);
  return element;
};
