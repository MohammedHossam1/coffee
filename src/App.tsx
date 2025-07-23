import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MainLayout from "./layout/MainLayout";
import CategoryDetails from "./pages/CategoryDetails";

const App = () => {
  return (
    <Routes>
      {/* Layout Wrapper */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="category-details/:id" element={<CategoryDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
