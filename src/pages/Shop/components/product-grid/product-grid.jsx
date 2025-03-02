import { ProductCard } from "@/components/main/ProductCard";
import { ProductData } from "@/pages/Home/data/data.js";

const ProductGrid = () => {
  return (
    <>
      <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
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
      <section className="flex justify-center mt-8 sm:mt-10 lg:mt-20">
        <button className="py-[6px] sm:py-2 px-6 sm:px-10 rounded-[30px] outline-0 border border-gray-600 text-sm sm:text-base">
          Show more
        </button>
      </section>
    </>
  );
};

export default ProductGrid;
