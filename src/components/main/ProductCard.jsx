import Reating from "@/assets/svg/reating.svg";
import { useDispatch, useSelector } from "react-redux";
import { addLike, removeLike } from "@/store/slices/wishlist.slice";
import { addCart, removeCart } from "@/store/slices/cart.slice";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";

export const ProductCard = ({ productData }) => {
  const [isLike, setIsLike] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const likeProducts = useSelector((state) => state.wishlist.likes);
  const cartProducts = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const clickLike = () => {
    setIsLike(!isLike);
    !isLike
      ? dispatch(addLike(productData))
      : dispatch(removeLike(productData));
  };

  const clickCart = () => {
    setIsCart(!isCart);
    !isCart
      ? dispatch(addCart(productData))
      : dispatch(removeCart(productData));
  };

  useEffect(() => {
    let likeId = likeProducts?.find((item) => item.id === productData.id);
    if (likeId) setIsLike(true);

    let cartId = cartProducts?.find((item) => item.id === productData.id);
    if (cartId) setIsCart(true);
  }, []);

  return (
    <div className="relative overflow-hidden group">
      <div className="absolute top-5 right-5 z-10 flex flex-col items-center gap-y-2 duration-200 group-hover:right-5">
        <span className="text-xl" onClick={clickLike}>
          {isLike ? (
            <FaHeart className="cursor-pointer" />
          ) : (
            <FaRegHeart className="cursor-pointer" />
          )}
        </span>
        <span className="text-2xl" onClick={clickCart}>
          {isCart ? (
            <IoCartSharp className="cursor-pointer" />
          ) : (
            <IoCartOutline className="cursor-pointer" />
          )}
        </span>
      </div>
      <div className="relative">
        <img
          src={productData?.thumbnail}
          alt="product-image"
          className="w-full object-cover h-[270px] md:h-[305px] xl:h-[349px]"
        />
        <span className="absolute py-[4px] px-[14px] top-[16px] left-[16px] bg-[#fff] rounded-[4px]  ">
          <p className="font-bold text-[16px] leading-[100%] text-[#000] text-center">
            NEW
          </p>
        </span>
        {productData?.price ? (
          <span className=" absolute py-[4px] px-[14px] top-[48px] left-[16px] bg-[#38CB89] rounded-[4px]">
            <p className="font-bold text-[16px] leading-[100%] text-[#fff] text-center">
              -5%
            </p>
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="pt-[11px]">
        <div>
          <img src={Reating} alt="star-icon" />
        </div>
        <h3 className=" font-semibold text-[16px] leading-[162%] text-[#000] mt-1">
          {productData?.title}
        </h3>
        <div className=" mt-1 flex gap-[12px]">
          {" "}
          <p className="font-semibold text-[14px] leading-[162%] text-[#000]">
            $ {productData?.price}
          </p>
          <p className="font-semibold text-[14px] leading-[162%] text-[#666464] line-through">
            {(productData?.price + 5).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};
