import { useState } from "react";
import { VscSettings } from "react-icons/vsc";
import { Link } from "react-router-dom";
import tickIcon from '../../../../assets/svg/sidebar-tick-icon.svg'

const links = [
  { name: "All Rooms", path: "#" },
  { name: "Living Room", path: "#" },
  { name: "Bedroom", path: "#" },
  { name: "Kitchen", path: "#" },
  { name: "Bathroom", path: "#" },
  { name: "Dinning", path: "#" },
  { name: "Outdoor", path: "#" },
  { name: "Room", path: "#" },
  { name: "Garage", path: "#" },
  { name: "Living", path: "#" },
];

const prices = [
  { name: "All Price", id: 1 },
  { name: "$0.00 - 99.99", id: 2 },
  { name: "$100.00 - 199.99", id: 3 },
  { name: "$200.00 - 299.99", id: 4 },
  { name: "$300.00 - 399.99", id: 5 },
  { name: "$400.00+", id: 6 },
];

const Sidebar = () => {
  const [active, setActive] = useState("All Rooms");
  const [choosePrice, setChoosePrice] = useState(null);

  return (
    <aside className="w-1/4">
      <button className="flex gap-[8px] items-center mb-[32px]">
        <VscSettings className="w-[24px] h-[24px]" />
        <p className="text-[20px] font-semibold">Filter</p>
      </button>
      <div className="w-full">
        <div className="mb-[32px]">
          <h3 className="font-semibold text-[18px]/[162%] mb-[16px] text-[#121212]">
            CATEGORIES
          </h3>
          <ul className="flex flex-col gap-[12px] h-[264px] overflow-auto custom-scrollbar">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setActive(link.name)}
                  className={`font-semibold text-[18px] ${
                    active === link.name
                      ? "text-black border-b-2 border-black"
                      : "text-[#807e7e]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-[18px]/[162%] mb-[16px] text-[#121212]">
            PRICE
          </h3>
          <ul className="w-full flex flex-col gap-[9px]">
            {prices.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                <p className="text-[#6c7275] font-semibold text-[15px]">{item.name}</p>
                <input
                name="productPrice"
                onFocus={() => setChoosePrice(item.name)}
                className="opacity-0 absolute"
                id={`allPrice${index}`}
                type="radio"
              />
              <label className={`w-[24px] h-[24px] cursor-pointer rounded-[4px] ${item.name !== choosePrice ? 'border-2 border-[#6c7275]': 'bg-[#141718] flex items-center justify-center'}`} htmlFor={`allPrice${index}`}>
                {item.name === choosePrice? <img src={tickIcon} />: ""}
              </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
