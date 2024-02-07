import { GoStarFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

const MenuPanel = () => {
  return (
    <div className="grid grid-cols-3 gap-4 px-[3%] py-12">
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  );
};

const MenuItem = () => {
  return (
    <div
      className={twMerge(
        "cursor-pointer rounded-[4px] p-4 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.08)] flex bg-white gap-4",
        "transition-all duration-300 hover:shadow-[0px_10px_10px_8px_rgba(0,0,0,0.08)]",
      )}
    >
      <div className="flex flex-col overflow-ellipsis gap-1">
        <p className="font-plex_sans font-bold">The Italian</p>
        <p className="flex text-sm items-start gap-1 text-[#585c5c]">
          <span className="flex gap-1 items-center text-[#4d7c1b] whitespace-nowrap">
            {<GoStarFill color="#4d7c1b" size={18} />}
            Higly Rated
          </span>
          {" · "}Your chioce of chicken or mozzarella, with avocado, roasted
          tomatoes, olives, supergrains, croutons, pesto & balsamic dressing
        </p>
        <span className="flex items-center gap-1 text-[#2e3333]">646 kcal</span>
        <p className="flex items-center gap-1 text-[#2e3333]">
          £12.49
          <span className="flex gap-1 items-center text-[#f08308] whitespace-nowrap">
            {" · "}Popular
          </span>
        </p>
      </div>
      <div className="h-full w-full">
        <div className="aspect-w-1 aspect-h-1">
          <img
            src="https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love-1080x700.jpg"
            className="object-cover"
          />
        </div>
      </div>
      <div
        className={twMerge(
          "cursor-pointer w-[30%] h-full border-[1px] border-gray-200 rounded-[4px]",
          "flex justify-center items-center transition-all duration-200 hover:border-gray-300",
        )}
      >
        <FaPlus color="#00ccbc" size={20} />
      </div>
    </div>
  );
};

export default MenuPanel;
