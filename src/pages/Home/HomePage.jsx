import Contact from "@/components/main/Contact";
import HomeSlider from "./components/Home-slider/home-slider";
import { Info } from "./components/info-grid/info";
import { Arrivals } from "./components/product-slider/arrivals";
import ServiceGrid from "./components/service-grid/service-grid";
import ReklamaHome from "./components/ads-discount/reklama";

const HomePage = () => {
  return (
    <main>
      <HomeSlider />
      <ServiceGrid />
      <Arrivals />
      <Info />
      <ReklamaHome />
      <Contact />
    </main>
  );
};

export default HomePage;
