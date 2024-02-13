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
      <div className="flex flex-col gap-4 lg:px-[3%] lg:py-5">
        <div className="cursor-pointer bg-white rounded-full p-3 m-2 items-center gap-2 absolute lg:p-0 lg:m-0 lg:flex lg:relative">
          <IoArrowBack color="#00ccbc" size={20} />
          <span className="font-plex_sans text-[#00ccbc] hidden lg:block">Back</span>
        </div>
        <div className="flex flex-col gap-4 pb-3 lg:flex-row">
          <div className="w-full lg:w-[30%]">
            <img
              src="https://blog.logomyway.com/wp-content/uploads/2020/09/KFC-logo.jpg"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 px-[3%] py-1 lg:px-0 lg:py-0">
            <div className="flex flex-col gap-1">
              <p className="font-pt_sans text-2xl font-bold text-[#2e3333] lg:text-[40px]">
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
              <div className="cursor-pointer flex items-center justify-between gap-3 w-full lg:w-max lg:justify-start">
                <div className="flex items-center gap-3">
                  <GoInfo color="#acaeae" size={20} />
                  <div className="flex flex-col">
                    <span className="font-plex_sans text-[#2e3333]">Info</span>
                    <span className="font-plex_sans text-[#585c5c] text-sm">
                      Map, allergens and hygiene rating
                    </span>
                  </div>
                </div>
                <IoIosArrowForward color="#00ccbc" size={20} />
              </div>
              <div className="cursor-pointer flex items-center justify-between gap-3 w-full lg:w-max lg:justify-start">
                <div className="flex items-center gap-3">
                  <GoStarFill color="#4d7c1b" size={20} />
                  <div className="flex flex-col">
                    <span className="font-plex_sans text-[#4d7c1b]">
                      4.8 Excellent
                    </span>
                    <span className="font-plex_sans text-[#585c5c] text-sm">
                      See all 500 reviews
                    </span>
                  </div>
                </div>
                <IoIosArrowForward color="#00ccbc" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Categories categories={categories} />
    </>
  );
};

export default Heading;
