import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import Loading from "../components/ui/loading/Loading";

const HomePage = lazy(() => import("../pages/Home/HomePage"));
const ShopPage = lazy(() => import("../pages/Shop/ShopPage"));
const ProductPage = lazy(() => import("../pages/Product/ProductPage"));
const Wishlist = lazy(() => import("../pages/Wishlist/Wishlist"));
const CartPage = lazy(() => import("../pages/Cart/CartPage"));

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/shop"
          element={
            <Suspense fallback={<Loading />}>
              <ShopPage />
            </Suspense>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Suspense fallback={<Loading />}>
              <ProductPage />
            </Suspense>
          }
        />
        <Route
          path="/wishlist"
          element={
            <Suspense fallback={<Loading />}>
              <Wishlist />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<Loading />}>
              <CartPage />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
