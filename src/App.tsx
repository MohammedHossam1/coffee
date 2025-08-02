import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import CategoriesPage from "./pages/CategoriesPage";

const App = () => {
  return (
    <Routes>
      {/* Layout Wrapper */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="category-details/:id" element={<CategoryDetails />} /> */}
        <Route path="categories/:id" element={<CategoriesPage />} />
        <Route path="Product-details/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
