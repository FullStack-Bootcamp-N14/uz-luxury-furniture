import { useSelector } from "react-redux";
import { ProductCard } from "@/components/main/ProductCard";

const CartPage = () => {
  const cartProducts = useSelector((state) => state.cart.cart);

  return (
    <main className="main py-10">
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold">My Cart</h1>
        </div>
        {cartProducts.length ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {cartProducts.map((item) => (
              <ProductCard key={item.id} productData={item} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[60vh] rounded-2xl bg-gray-100">
            <span className="text-lg font-medium uppercase">Empty Data</span>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;
