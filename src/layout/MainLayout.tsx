import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import DesktopBlocker from "../Components/shared/DesktopBlocker";

const MainLayout = () => {

  return (
    <div dir="rtl" className=" flex flex-col gap-4 h-screen !overflow-hidden">
      <div className="h-full">
        <DesktopBlocker />
        <Navbar />
        <main className="flex-grow h-full ">
          <Outlet />
        </main>
       
      </div>
    </div>
  );
};

export default MainLayout;
