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
import Home from "../pages/Home";
import AdminPage from "../admin/AdminPage";
import Dashboard from "../admin/dashboard/Dashboard";
import CreateProduct from "../admin/crud/create/CreateProduct";
import Shop from "../pages/shop/Shop";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* productss */}
      <Route path="/shop" element={<Shop />}>
        <Route index element={<ShopPage />} />
        <Route path="products" element={<ShopPage />} />
        <Route path={"products/:productId"} element={<ProductDetailPage />} />
      </Route>

      <Route path={"/account"} element={<AccountPage />} />
      <Route path={"/cart"} element={<CartPage />} />
      <Route
        path={"/checkout"}
        element={
          <CartProtectedRoute>
            <CheckOutPage />
          </CartProtectedRoute>
        }
      />
      <Route
        path={"/order-creation-success/:orderId"}
        element={
          <ProtectedRoute>
            <OrderCreationSuccessPage />
          </ProtectedRoute>
        }
      />
      <Route path={"admin-panel"} element={<AdminPage />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="create-product" element={<CreateProduct />} />

        {/* <Route path="products" element={<ProductsPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="users" element={<UsersPage />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
