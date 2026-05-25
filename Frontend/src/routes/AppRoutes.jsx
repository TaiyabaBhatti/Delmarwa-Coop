import { Routes, Route } from "react-router-dom";
import ShopPage from "../pages/shop/ShopPage";
import { APP_ROUTES_NAME } from "../utils/appRoutesNames";
import ProductDetailPage from "../pages/product/ProductDetailPage";



export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
     <Route path={APP_ROUTES_NAME.productsPage} element={<ShopPage />} />
     <Route path={APP_ROUTES_NAME.productDetail} element={<ProductDetailPage />} />
    </Routes>
  );
};
