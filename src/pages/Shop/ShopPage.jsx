import HomeSlider from "../Home/components/home-slider/home-slider";
import Nav from "./components/nav/nav";
import ProductGrid from "./components/product-grid/product-grid";
import Sidebar from "./components/sidebar/sidebar";

const ShopPage = () => {
  return (
    <main className="">
      <HomeSlider />
      <div className="container flex gap-x-6 mt-14 mb-24">
        <Sidebar />
        <main className="w-3/4 border border-green-500">
          <Nav />
          <ProductGrid />
        </main>
      </div>
    </main>
  );
};

export default ShopPage;
