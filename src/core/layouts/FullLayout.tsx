import Header from "./components/Header";
import { Outlet } from "react-router";

export default function FullLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
