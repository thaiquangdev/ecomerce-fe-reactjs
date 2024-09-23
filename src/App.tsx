import { Route, Routes } from "react-router-dom";
import { path } from "./utils/path";
import MainLayout from "./layouts/main-layout";
import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetail from "./pages/product-detail";

function App() {
  return (
    <>
      <Routes>
        <Route path={path.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={path.PRODUCTS} element={<Products />} />
          <Route path={path.PRODUCT_DETAIL} element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
