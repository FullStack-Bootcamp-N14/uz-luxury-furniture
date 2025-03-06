import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ShopPage from "../pages/Shop/ShopPage";
import Footer from "../components/main/Footer";
import Header from "../components/main/Header";
import ProductPage from "../pages/Product/ProductPage";
import Wishlist from "../pages/Wishlist/Wishlist";
import CartPage from "../pages/Cart/CartPage";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
