import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ShopPage from "../pages/Shop/ShopPage";
import Footer from "../components/main/Footer";
import { Contact } from "../components/main/Contact";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
};

export default Router;
