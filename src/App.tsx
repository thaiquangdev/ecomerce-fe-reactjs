import { Route, Routes } from "react-router-dom";
import { path } from "./utils/path";
import MainLayout from "./layouts/main-layout";
import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetail from "./pages/product-detail";
import Login from "./pages/login";
import Register from "./pages/register";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import { Toaster } from "react-hot-toast";
import ProtectRouter from "./protect-router";

function App() {
  return (
    <>
      <Routes>
        <Route path={path.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />
          <Route path={path.PRODUCTS} element={<Products />} />
          <Route path={path.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route
            path={path.WISHLIST}
            element={
              <ProtectRouter>
                <Wishlist />
              </ProtectRouter>
            }
          />
          <Route
            path={path.CART}
            element={
              <ProtectRouter>
                <Cart />
              </ProtectRouter>
            }
          />
          <Route
            path={path.CHECKOUT}
            element={
              <ProtectRouter>
                <Checkout />
              </ProtectRouter>
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
