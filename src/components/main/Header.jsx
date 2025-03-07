import { Link, NavLink } from "react-router-dom";
import Logo from "@/assets/images/logo.png";
import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Advertize from "../ui/Advertize";
import { useSelector } from "react-redux";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const likes = useSelector((state) => state.wishlist.count);
  const carts = useSelector((state) => state.cart.count);

  return (
    <header className="bg-white sticky top-0 w-full z-40">
      <Advertize setShow={setShow} show={show} />
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div
            className="mr-3 w-5 h-5 flex items-center justify-center lg:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {!open ? (
              <FaBars className="text-xl" />
            ) : (
              <IoMdClose className="text-xl" />
            )}
          </div>

          <Link to="/" className="mt-[6px] lg:mt-0">
            <img src={Logo} alt="logo image" />
          </Link>
        </div>

        <nav
          className={
            show
              ? "flex flex-col lg:flex-row py-10 lg:py-0 gap-y-10 lg:gap-y-0 items-center lg:gap-x-10 fixed top-[103px] left-0  lg:static border-t border-gray-300 lg:border-0 w-full lg:w-auto h-[calc(100vh-63px)] lg:h-auto bg-[#ffffffd5] duration-300"
              : "flex flex-col lg:flex-row py-10 lg:py-0 gap-y-10 lg:gap-y-0 items-center lg:gap-x-10 fixed top-[63px] left-0  lg:static border-t border-gray-300 lg:border-0 w-full lg:w-auto h-[calc(100vh-63px)] lg:h-auto bg-[#ffffffd5] duration-300"
          }
          style={open ? { left: "0px" } : { left: "-100%" }}
        >
          <NavLink
            onClick={() => setOpen(false)}
            to="/"
            className="hover:text-black text-2xl lg:text-base lg:text-[#6C7275] duration-200"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/shop"
            className="hover:text-black text-2xl lg:text-base lg:text-[#6C7275] duration-200"
          >
            Shop
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/products/1"
            className="hover:text-black text-2xl lg:text-base lg:text-[#6C7275] duration-200"
          >
            Product
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/contact"
            className="hover:text-black text-2xl lg:text-base lg:text-[#6C7275] duration-200"
          >
            Contact Us
          </NavLink>
        </nav>

        <div className="flex items-center gap-x-4">
          <FiSearch className="text-2xl" />
          <Link to="/">
            <FaRegUserCircle className="text-[22px]" />
          </Link>
          <Link to="/cart" className="block relative">
            <IoCartOutline className="text-[27px]" />
            <span className="absolute bottom-0 -right-[6px] w-4 h-4 flex items-center justify-center text-[10px] bg-[#6C7275] text-white font-medium rounded-full">
              {carts}
            </span>
          </Link>
          <Link to="/wishlist" className="block relative">
            <FaRegHeart className="text-[22px]" />
            <span className="absolute bottom-0 -right-[6px] w-4 h-4 flex items-center justify-center text-[10px] bg-[#6C7275] text-white font-medium rounded-full">
              {likes}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
