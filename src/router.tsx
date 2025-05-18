import { PostRoutes } from "@features/Post/routes";
import { useRoutes } from "react-router";
import { WelcomeRoutes } from "@features/Welcome/routes";
import { ProducsRoute } from "@/features/Product/routes";

export const appRoutes = [...WelcomeRoutes, ...PostRoutes, ...ProducsRoute];

export const AppRouter = () => {
  const element = useRoutes(appRoutes);
  return element;
};
