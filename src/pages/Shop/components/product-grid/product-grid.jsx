import { ProductCard } from "@/components/main/ProductCard";
// import { ProductData } from "@/pages/Home/data/data.js";
import NotFound from "@/components/ui/NotFound";

const ProductGrid = ({ products }) => {
  return (
    <>
      {products.length ? (
        <section className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} productData={item} />
          ))}
        </section>
      ) : (
        <NotFound title="Empty data" />
      )}

      <section className="flex justify-center mt-8 sm:mt-10 lg:mt-20">
        <button className="py-[6px] sm:py-2 px-6 sm:px-10 rounded-[30px] outline-0 border border-gray-600 text-sm sm:text-base">
          Show more
        </button>
      </section>
    </>
  );
};

export default ProductGrid;
