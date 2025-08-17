import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MenuPage from "../features/menu/pages/MenuPage";
import NotFound from "../pages/notFound";
import CartPage from "../features/cart/pages/CartPage";
import MenuItemDetail from "../features/menu/pages/MenuItemDetails";
import Login from "../features/auth/Login";
import SignUp from "../features/auth/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:id" element={<MenuItemDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
