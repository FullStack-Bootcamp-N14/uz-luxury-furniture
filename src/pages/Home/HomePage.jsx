import HomeSlider from "./components/home-slider/home-slider";
import { Info } from "./components/info-grid/info";
import { Arrivals } from "./components/product-slider/arrivals";

const HomePage = () => {
  return (
    <div>
      <HomeSlider />
      <Arrivals />
      <Info />
    </div>
  );
};

export default HomePage;
