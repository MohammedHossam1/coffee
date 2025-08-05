import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useTheme } from "../hooks/useTheme";

const MainLayout = () => {
  const { isDark } = useTheme();


  return (
    <div dir="rtl" className={` flex flex-col gap-4 ${isDark ? "dark" : ""} `}>
      <div className={`h-full dark:bg-black`}>
        <Navbar />
        <main className="flex-grow max-xl:h-[calc(100dvh-56px)] overflow-x-hidden text-black dark:bg-black dark:text-white">
          <Outlet />

        </main>

      </div>
    </div>
  );
};

export default MainLayout;
