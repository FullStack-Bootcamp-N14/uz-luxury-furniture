import navIcon1 from "@/assets/svg/nav-icon1.svg";
import navIcon2 from "@/assets/svg/nav-icon2.svg";
import navIcon3 from "@/assets/svg/nav-icon3.svg";
import navIcon4 from "@/assets/svg/nav-icon4.svg";
import { useState } from "react";
import { VscSettings } from "react-icons/vsc";

const icons = [
  {
    id: 1,
    url: navIcon1,
  },
  {
    id: 2,
    url: navIcon2,
  },
  {
    id: 3,
    url: navIcon3,
  },
  {
    id: 4,
    url: navIcon4,
  },
];

const Nav = ({ openFn }) => {
  const [chooseSelect, setChooseSelect] = useState(0);
  return (
    <div className="mb-[32px] flex items-center justify-between">
      <div className="flex items-center">
        <h3 className="font-semibold text-[20px] mr-4 sm:mr-8">Living Room</h3>
        <button
          className="flex gap-[8px] items-center lg:hidden"
          onClick={() => openFn(true)}
        >
          <VscSettings className="w-[24px] h-[24px]" />
          <p className="text-[20px] font-semibold">Filter</p>
        </button>
      </div>
      <div className="flex items-center gap-[32px]">
        <p className="text-[#121212] font-semibold text-xl">Sort by</p>
        <div className="hidden md:flex">
          {icons.map((item) => (
            <button
              key={item.id}
              onClick={() => setChooseSelect(item.id)}
              className={`w-[46px] flex items-center justify-center cursor-pointer h-[40px] ${
                item.id !== chooseSelect
                  ? "border-1 border-[#e8ecef]"
                  : "border-none bg-[#f3f5f7]"
              }`}
            >
              <img
                className={`${
                  item.id !== chooseSelect ? "bg-[#6c7275" : "bg-[#14118]"
                }`}
                src={item.url}
                alt=""
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
