import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <Routes>
      {/* Layout Wrapper */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
