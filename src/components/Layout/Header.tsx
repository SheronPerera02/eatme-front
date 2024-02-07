import { GiKangaroo } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="fixed top-0 w-full h-[73px] flex justify-between items-center  border-b-[1px] border-gray-200 px-[3%] bg-white z-10">
      <div className="flex items-center">
        <GiKangaroo color="#00ccbc" size={50} />
        <p className="text-[#00ccbc] font-poppins font-semibold text-lg">
          deliveroo
        </p>
      </div>
      <div className="flex items-center h-[46px] w-[35%] border-[1px] border-gray-200 px-3.5 py-2 rounded-[4px] bg-[#f5f5f5]">
        <input
          className="outline-none font-plex_sans w-full bg-transparent"
          placeholder="Search Tossed - St Martin's Lane"
        />
      </div>
      <div className="flex gap-3">
        <button className="flex justify-center items-center gap-2 outline-none border-[1px] border-gray-200 px-3.5 py-2 rounded-[4px]">
          <RiShoppingBasketLine color="#00ccbc" size={15} />
          <span className="font-plex_sans">£0.00</span>
        </button>
        <button className="flex justify-center items-center gap-2 outline-none border-[1px] border-gray-200 px-3.5 py-2 rounded-[4px]">
          <HiOutlineHome color="#00ccbc" size={15} />
          <span className="font-plex_sans">Sign up or log in</span>
        </button>
        <button className="flex justify-center items-center gap-2 outline-none border-[1px] border-gray-200 px-3.5 py-2 rounded-[4px]">
          <FaRegUser color="#00ccbc" size={14} />
          <span className="font-plex_sans">Account</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
