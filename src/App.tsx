import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import MainLayout from "./layout/MainLayout";
import NotFound from "./pages/NotFound";
import Loader from "./Components/shared/Loader";

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const CategoriesPage = lazy(() => import("./pages/CategoriesPage"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Main Layout Wrapper */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="categories/:id" element={<CategoriesPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
