import HomeSlider from "./components/home-slider/home-slider";
import { Info } from "./components/info-grid/info";
import { Arrivals } from "./components/product-slider/arrivals";
import ServiceGrid from "./components/service-grid/service-grid";

const HomePage = () => {
  return (
    <main>
      <HomeSlider />
      <ServiceGrid />
      <Arrivals />
      <Info />
    </main>
  );
};

export default HomePage;
