import { ProductCard } from "@/components/main/ProductCard";
import { ProductData } from "@/pages/Home/data/data.js";

const ProductGrid = () => {
  return (
    <section className="grid grid-cols-3 gap-6">
      {ProductData.map((item) => (
        <ProductCard
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          old_price={item.old_price}
          skidka={item.skidka}
        />
      ))}
    </section>
  );
};

export default ProductGrid;
