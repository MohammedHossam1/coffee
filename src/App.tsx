import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import MainLayout from "./layout/MainLayout";
import NotFound from "./pages/NotFound";
import Loader from "./Components/shared/Loader";
import Products from "./pages/Products";
import MobileOnlyWrapper from "./Components/shared/IsMobile";

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const CategoriesPage = lazy(() => import("./pages/CategoriesPage"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="categories/:id" element={<MobileOnlyWrapper><CategoriesPage /></MobileOnlyWrapper>} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
