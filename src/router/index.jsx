import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ShopPage from "../pages/Shop/ShopPage";
import Footer from "../components/main/Footer";
import Header from "../components/main/Header";
import ProductPage from "../pages/Product/ProductPage";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
