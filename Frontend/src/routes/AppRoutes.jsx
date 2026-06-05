import { Routes, Route } from "react-router-dom";
import ShopPage from "../pages/shop/ShopPage";
import { APP_ROUTES_NAME } from "../utils/appRoutesNames";
import ProductDetailPage from "../pages/product/ProductDetailPage";
import AccountPage from "../pages/account/AccountPage";
import CartPage from "../pages/cart/CartPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES_NAME.homePage} element={<ShopPage />} />
      <Route path={APP_ROUTES_NAME.productsPage} element={<ShopPage />} />
      <Route
        path={APP_ROUTES_NAME.productDetail}
        element={<ProductDetailPage />}
      />
      <Route path={APP_ROUTES_NAME.accountPage} element={<AccountPage />} />
      <Route path={APP_ROUTES_NAME.cartPage} element={<CartPage />} />
    </Routes>
  );
};
