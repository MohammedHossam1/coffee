import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import CategorySidebar from "../Components/Categories";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-1">
          {/* الكاتيجوريز */}
          <CategorySidebar />
        </div>
        <div className="col-span-11">

          <Navbar />
          <main className="flex-grow !overflow-x-hidden">
            <Outlet />
          </main>

          <footer className="bg-white text-center py-4 border-t text-sm text-gray-500">
            &copy; 2025 My Menu App
          </footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
