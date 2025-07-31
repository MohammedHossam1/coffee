import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import DesktopBlocker from "../Components/shared/DesktopBlocker";

const MainLayout = () => {

  return (
    <div dir="rtl" className=" flex flex-col gap-4  ">
      <div className="h-full">
        <DesktopBlocker />
        <Navbar />
        <main className="flex-grow h-[calc(100dvh-56px)]">
          <Outlet />
          {/* <CardsSection /> */}
        </main>

      </div>
    </div>
  );
};

export default MainLayout;
