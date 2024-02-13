import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state";
import { setIsUserScroll } from "../../state/slices/menu";
import { twMerge } from "tailwind-merge";
import { Category } from "../../types";

type CategoriesProps = {
  categories: Category[];
};

const Categories = ({ categories }: CategoriesProps) => {
  const visibleCategory = useSelector(
    (state: RootState) => state.menu.visibleCategory,
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleSelectCategory = (category: Category) => {
    dispatch(setIsUserScroll(false));
    category.sectionRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="no-scrollbar overflow-x-scroll scroll-bar flex py-6 gap-4 border-y-[1px] border-gray-200 px-[3%] sticky top-[59px] bg-white z-10 lg:top-[72px]">
      {categories.map((category, index) => {
        return (
          <div
            key={index}
            className={twMerge(
              "relative px-4 py-0.5 rounded-full flex items-center justify-center",
              visibleCategory === category.name ? "bg-[#00ccbc]" : "",
            )}
          >
            {visibleCategory === category.name ? (
              <>
                <span
                  className={twMerge("whitespace-nowrap text-sm opacity-0")}
                >
                  {category.name}
                </span>
                <span
                  className={twMerge(
                    "absolute cursor-pointer whitespace-nowrap text-sm font-bold text-white",
                    visibleCategory === category.name ? "opacity-100" : "0",
                  )}
                >
                  {category.name}
                </span>
              </>
            ) : (
              <>
                <span
                  className={twMerge(
                    "cursor-pointer whitespace-nowrap text-sm text-[#00ccbc] hover:opacity-80",
                  )}
                  onClick={() => handleSelectCategory(category)}
                >
                  {category.name}
                </span>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
