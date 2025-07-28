import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import DesktopBlocker from "../Components/shared/DesktopBlocker";

const MainLayout = () => {

  return (
    <div dir="rtl" className="min-h-screen flex flex-col gap-4">
      <div className="">
        <DesktopBlocker />
        <Navbar />
        <main className="flex-grow !overflow-x-hidden min-h-screen">
          <Outlet />
        </main>
       
      </div>
    </div>
  );
};

export default MainLayout;
