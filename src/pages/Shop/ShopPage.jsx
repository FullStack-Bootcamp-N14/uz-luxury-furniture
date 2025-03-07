import Hero from "@/components/main/Hero";
import Nav from "./components/nav/nav";
import ProductGrid from "./components/product-grid/product-grid";
import Sidebar from "./components/sidebar/sidebar";
import SidebarRS from "./components/sidebar/sidebar-rs";
import { useState } from "react";
import Contact from "@/components/main/Contact";
import axios from "@/api/axios.js";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/ui/loading/Loading";

const ShopPage = () => {
  const [openRs, setOpenRs] = useState(false);
  const [filter, setFilter] = useState("all");

  const getByCategory = async (category) => {
    try {
      const url =
        category === "all"
          ? "https://dummyjson.com/products"
          : `/products/category/${category}`;
      const { data } = await axios.get(url);
      return data.products;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["filter-products", filter],
    queryFn: () => getByCategory(filter),
  });

  return (
    <main className="">
      <SidebarRS open={openRs} openFn={setOpenRs} filter={setFilter} />
      <Hero
        title="Shop page"
        description="Let’s design the place you always imagined."
      />
      <div className="container pt-6 lg:pt-[60px] pb-12 lg:pb-[100px]">
        <div className="flex flex-col gap-y-0 lg:flex-row lg:gap-x-16">
          <Sidebar filter={setFilter} />
          <main className="w-full lg:w-3/4">
            <Nav openFn={setOpenRs} />
            {isError && <div>{error.message}</div>}
            {isLoading ? <Loading /> : <ProductGrid products={data} />}
          </main>
        </div>
      </div>
      <Contact />
    </main>
  );
};

export default ShopPage;
