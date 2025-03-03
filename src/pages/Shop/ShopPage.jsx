import Hero from "./components/shop-hero/hero";
import Nav from "./components/nav/nav";
import ProductGrid from "./components/product-grid/product-grid";
import Sidebar from "./components/sidebar/sidebar";
import SidebarRS from "./components/sidebar/sidebar-rs";
import { useState } from "react";
import Contact from "@/components/main/Contact";

const ShopPage = () => {
  const [openRs, setOpenRs] = useState(false);

  return (
    <main className="">
      <SidebarRS open={openRs} openFn={setOpenRs} />
      <Hero />
      <div className="container pt-6 lg:pt-[60px] pb-12 lg:pb-[100px]">
        <div className="flex flex-col gap-y-0 lg:flex-row lg:gap-x-16">
          <Sidebar />
          <main className="w-full lg:w-3/4">
            <Nav openFn={setOpenRs} />
            <ProductGrid />
          </main>
        </div>
      </div>
      <Contact />
    </main>
  );
};

export default ShopPage;
