import { useEffect } from "react";
import { GoStarFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { Category, Dish } from "../../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state";
import { setVisibleCategory } from "../../state/slices/menu";

type MenuSectionProps = {
  category: Category;
};

const MenuSection = ({ category }: MenuSectionProps) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(setVisibleCategory(category.name));
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin
        threshold: 0.5, // Trigger when 50% of the component is visible
      },
    );

    if (category.sectionRef?.current) {
      observer.observe(category.sectionRef.current);
    }

    return () => {
      if (category.sectionRef?.current) {
        observer.unobserve(category.sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={category.sectionRef} className="flex flex-col gap-4 w-full">
      <p className="font-pt_sans text-2xl font-bold text-[#2e3333]">
        {category.name}
      </p>
      <div className="grid grid-cols-3 gap-4 w-full">
        {category.dishes.map((dish, index) => {
          return <MenuItem key={index} dish={dish} />;
        })}
      </div>
    </div>
  );
};

type MenuItemProps = {
  dish: Dish;
};

const MenuItem = ({ dish }: MenuItemProps) => {
  return (
    <div
      className={twMerge(
        "cursor-pointer rounded-[4px] p-4 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.08)] flex bg-white gap-4",
        "transition-all duration-300 hover:shadow-[0px_10px_10px_8px_rgba(0,0,0,0.08)]",
      )}
    >
      <div className="flex flex-col overflow-ellipsis gap-1">
        <p className="font-plex_sans font-bold">{dish.name}</p>
        <p className="flex text-sm items-start gap-1 text-[#585c5c] max-h-20 w-full overflow-hidden">
          <span className="flex gap-1 items-center text-[#4d7c1b] whitespace-nowrap">
            {<GoStarFill color="#4d7c1b" size={18} />}
            Higly Rated
          </span>
          {` · ${dish.description}`}
        </p>
        <span className="flex items-center gap-1 text-[#2e3333]">
          {dish.calories} kcal
        </span>
        <p className="flex items-center gap-1 text-[#2e3333]">
          £{dish.price}
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
          "cursor-pointer w-56 h-full border-[1px] border-gray-200 rounded-[4px]",
          "flex justify-center items-center transition-all duration-200 hover:border-gray-300",
        )}
      >
        <FaPlus color="#00ccbc" size={20} />
      </div>
    </div>
  );
};

export default MenuSection;
