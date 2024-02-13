import { GiKangaroo } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "../../state";
import { twMerge } from "tailwind-merge";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const access_token = useSelector(
    (state: RootState) => state.auth.access_token,
  );

  return (
    <div
      className={twMerge(
        "fixed top-0 w-full h-[60px] flex items-center justify-between border-b-[1px] border-gray-200 px-[3%] bg-white z-10 lg:h-[73px]",
      )}
      style={
        !access_token ? { justifyContent: "center", gap: "35%" } : undefined
      }
    >
      <div className="flex gap-4 items-center">
        <div className="cursor-pointer flex items-center">
          <GiKangaroo color="#00ccbc" size={50} />
          <p className="text-[#00ccbc] font-poppins font-semibold text-lg">
            deliveroo
          </p>
        </div>
        <button className="h-[42px] justify-center items-center gap-2 outline-none border-[1px] border-gray-200 px-3.5 py-2 rounded-[4px] lg:hidden">
          <FiSearch color="#00ccbc" size={15} />
        </button>
      </div>

      {access_token ? (
        <div className="hidden items-center h-[46px] border-[1px] border-gray-200 px-3.5 py-2 rounded-[4px] bg-[#f5f5f5] lg:flex lg:w-[50%] 2xl:w-[35%]">
          <input
            className="outline-none font-plex_sans w-full bg-transparent"
            placeholder="Search Tossed - St Martin's Lane"
          />
        </div>
      ) : null}
      <div className="flex gap-3">
        {access_token ? (
          <button className="hidden justify-center items-center gap-2 outline-none border-[1px] border-gray-200 px-3.5 py-2 rounded-[4px] lg:flex">
            <RiShoppingBasketLine color="#00ccbc" size={15} />
            <span className="font-plex_sans">£0.00</span>
          </button>
        ) : null}
        <button className="hidden justify-center items-center gap-2 outline-none border-[1px] border-gray-200 px-3.5 py-2 rounded-[4px] lg:flex">
          <HiOutlineHome color="#00ccbc" size={15} />
          <span className="font-plex_sans">Sign up or log in</span>
        </button>
        {access_token ? (
          <button className="flex justify-center items-center gap-2 outline-none border-[1px] border-gray-200 px-3.5 py-2 rounded-[4px]">
            <FaRegUser color="#00ccbc" size={14} />
            <span className="font-plex_sans">Account</span>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
