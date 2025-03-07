import { useSelector } from "react-redux";
import { ProductCard } from "@/components/main/ProductCard";
import Hero from "@/components/main/Hero";
import NotFound from "@/components/ui/NotFound";

const Wishlist = () => {
  const likeProducts = useSelector((state) => state.wishlist.likes);

  return (
    <main className="main pb-10">
      <Hero
        title="Wishlist"
        description="Your products which you clicked like"
      />
      <div className="container mt-10">
        {likeProducts.length ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {likeProducts.map((item) => (
              <ProductCard key={item.id} productData={item} />
            ))}
          </div>
        ) : (
          <NotFound title="Empty data" />
        )}
      </div>
    </main>
  );
};

export default Wishlist;
