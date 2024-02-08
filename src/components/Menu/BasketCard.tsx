import { RiShoppingBasketLine } from "react-icons/ri";

const BasketCard = () => {
  return (
    <div className="sticky top-[172px] flex flex-col gap-10 items-center border-[1px] border-gray-100 p-5 bg-white">
      <div className="flex flex-col gap-2 items-center">
        <RiShoppingBasketLine color="#abadad" size={50} />
        <p className="font-plex_sans text-[#abadad]">Your basket is empty</p>
      </div>
      <button className="flex justify-center items-center gap-2 outline-none bg-[#e2e5e5] text-[#abadad] px-3.5 h-[48px] w-full rounded-[4px]">
        <span className="font-plex_sans font-bold">Go to checkout</span>
      </button>
    </div>
  );
};

export default BasketCard;
