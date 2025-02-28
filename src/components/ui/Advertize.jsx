import { IoMdClose } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useEffect } from "react";

const Advertize = ({ show, setShow }) => {
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 15000);
  }, []);
  return (
    <>
      {show && (
        <div className="py-2 flex items-center justify-between bg-[#F3F5F7] px-4">
          <div></div>
          <div className="flex items-center gap-x-3">
            <RiDiscountPercentLine className="text-lg sm:text-xl" />
            <span className="text-sm sm:text-base">
              30% off storewide — Limited time!{" "}
            </span>
            <Link to="/" className="text-blue-600 items-center hidden lg:flex">
              <span>Shop Now</span>
              <IoArrowForwardOutline className="ml-1" />
            </Link>
          </div>
          <IoMdClose
            className="text-lg sm:text-xl cursor-pointer"
            onClick={() => setShow(false)}
          />
        </div>
      )}
    </>
  );
};

export default Advertize;
