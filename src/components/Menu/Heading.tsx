import { IoArrowBack } from "react-icons/io5";

const Heading = () => {
  return (
    <div className="py-5 px-[3%]">
      <div className="flex items-center gap-2">
        <IoArrowBack color="#00ccbc" size={20} />
        <span className="font-plex_sans text-[#00ccbc]">Back</span>
      </div>
    </div>
  );
};

export default Heading;
