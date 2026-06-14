import { Routes, Route } from "react-router-dom";
import ShopPage from "../pages/shop/ShopPage";
import { APP_ROUTES_NAME } from "../utils/appRoutesNames";
import ProductDetailPage from "../pages/product/ProductDetailPage";
import AccountPage from "../pages/account/AccountPage";
import CartPage from "../pages/cart/CartPage";
import CheckOutPage from "../pages/checkout/CheckOutPage";
import OrderCreationSuccessPage from "../pages/checkout/OrderCreationSuccessPage";
import NotFound from "../pages/NotFound";
import CartProtectedRoute from "./CartProtectedRoute";
import ProtectedRoute from "./ProtectedRoute";

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
      <Route
        path={APP_ROUTES_NAME.checkoutPage}
        element={
          <CartProtectedRoute>
            <CheckOutPage />
          </CartProtectedRoute>
        }
      />
      <Route
        path={APP_ROUTES_NAME.orderCreationSuccessPage}
        element={
          <ProtectedRoute>
            <OrderCreationSuccessPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
