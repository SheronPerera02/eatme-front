import BasketCard from "./BasketCard";
import MenuSection from "./MenuSection";
import { Category } from "../../types";

type MenuPanelProps = {
  categories: Category[];
};

const MenuPanel = ({ categories }: MenuPanelProps) => {
  return (
    <div className="flex px-[3%] py-7 gap-4 bg-[#f9fafa]">
      <div className="flex flex-col gap-8 w-full lg:w-8/12 2xl:w-9/12">
        {categories.map((category, index) => {
          return <MenuSection key={index} category={category} />;
        })}
      </div>
      <div className="hidden lg:flex lg:flex-col lg:w-4/12 2xl:w-3/12">
        <BasketCard />
      </div>
    </div>
  );
};

export default MenuPanel;
