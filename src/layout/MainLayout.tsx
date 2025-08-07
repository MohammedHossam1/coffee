import Footer from "@/Components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useTheme } from "../hooks/useTheme";
import ScrollToTopNavigation from "@/Components/shared/ScrollToTopNavigation";

const MainLayout = () => {
  const { isDark } = useTheme();


  return (
    <div dir="rtl" className={` flex flex-col gap-4 ${isDark ? "dark" : ""} `}>
        <ScrollToTopNavigation />
      <div className={`h-full dark:bg-black`}>
        <Navbar />
        <main className="flex-grow  overflow-x-hidden  text-black dark:bg-black dark:text-white">
          <Outlet />
        </main>
        <div className="max-lg:hiddden">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
