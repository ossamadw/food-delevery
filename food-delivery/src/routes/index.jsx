import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MenuPage from "../features/menu/pages/MenuPage";
import CheckOut from "../pages/CheckOut";
import NotFound from "../pages/notFound";
import CartPage from "../features/cart/pages/CartPage";
import MenuItemDetail from "../features/menu/pages/MenuItemDetails";

const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<MenuItemDetail />} />
            <Route path="/checkout" element={<CheckOut/>} />
            <Route path="*" element={<NotFound />} />

        </Routes>

    )
}

export default AppRoutes;