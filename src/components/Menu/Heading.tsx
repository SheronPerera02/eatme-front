import { IoArrowBack } from "react-icons/io5";
import { GoInfo } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { GoStarFill } from "react-icons/go";
import Categories from "./Categories";
import { Category } from "../../types";

type HeadingProps = {
  categories: Category[];
};

const Heading = ({ categories }: HeadingProps) => {
  return (
    <>
      <div className="flex flex-col py-5 px-[3%] gap-4">
        <div className="cursor-pointer flex items-center gap-2">
          <IoArrowBack color="#00ccbc" size={20} />
          <span className="font-plex_sans text-[#00ccbc]">Back</span>
        </div>
        <div className="flex gap-4 pb-3">
          <div className="w-[30%]">
            <img
              src="https://blog.logomyway.com/wp-content/uploads/2020/09/KFC-logo.jpg"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="font-pt_sans text-[40px] font-bold text-[#2e3333]">
                Tossed - St Martin's Lane
              </p>
              <span className="font-plex_sans text-[#2e3333]">
                10 - 20 min · Chicken · Salads · Healthy
              </span>
              <span className="font-plex_sans text-[#2e3333]">
                0.20 miles away · Closes at 21:00 · £7.00 minimum · £0.49
                delivery
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="cursor-pointer flex items-center gap-3">
                <GoInfo color="#acaeae" size={20} />
                <div className="flex flex-col">
                  <span className="font-plex_sans text-[#2e3333]">Info</span>
                  <span className="font-plex_sans text-[#585c5c] text-sm">
                    Map, allergens and hygiene rating
                  </span>
                </div>
                <IoIosArrowForward color="#00ccbc" size={20} />
              </div>
              <div className="cursor-pointer flex items-center gap-3">
                <GoStarFill color="#4d7c1b" size={20} />
                <div className="flex flex-col">
                  <span className="font-plex_sans text-[#4d7c1b]">
                    4.8 Excellent
                  </span>
                  <span className="font-plex_sans text-[#585c5c] text-sm">
                    See all 500 reviews
                  </span>
                </div>
                <IoIosArrowForward color="#00ccbc" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Categories categories={categories}/>
    </>
  );
};

export default Heading;
