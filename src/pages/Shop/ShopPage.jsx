import Hero from "./components/shop-hero/hero";
import Nav from "./components/nav/nav";
import ProductGrid from "./components/product-grid/product-grid";
import Sidebar from "./components/sidebar/sidebar";
import ProductControl from "./components/product-control/product-control";

const ShopPage = () => {
  return (
    <main className="">
      <Hero />
      <div className="container pt-[60px] pb-[100px]">
        {/* <ProductControl /> */}
        <div className="flex gap-x-6">
          <Sidebar />
          <main className="w-3/4">
            <Nav />
            <ProductGrid />
          </main>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;
