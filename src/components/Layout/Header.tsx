import { GiKangaroo } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed top-0 w-full h-[73px] flex justify-center items-center gap-[35%]">
      <div className="flex items-center">
        <GiKangaroo color="#00ccbc" size={50} />
        <p className="text-[#00ccbc] font-poppins font-semibold text-lg">
          deliveroo
        </p>
      </div>
      <div className="flex gap-2">
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
