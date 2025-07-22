import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div className="">

        <Navbar />
        <main className="flex-grow !overflow-x-hidden">
          <Outlet />
        </main>

        <footer className="bg-white text-center py-4 border-t text-sm text-gray-500">
          &copy; 2025 My Menu App
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
