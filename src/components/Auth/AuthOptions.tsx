import { FcGoogle } from "react-icons/fc";
import { MdMailOutline } from "react-icons/md";

type AuthOptionsProps = {
  onContinueWithEmail: () => void;
};

const AuthOptions = ({ onContinueWithEmail }: AuthOptionsProps) => {
  return (
    <>
      <button className="flex justify-center items-center h-[48px] w-full gap-2 outline-none border-[1px] border-gray-400 px-3.5 py-2 rounded-[4px]">
        <FcGoogle color="#00ccbc" size={15} />
        <span className="font-plex_sans text-sm font-bold">
          Continue with Google
        </span>
      </button>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="w-full h-[1px] bg-gray-200" />
          <span className="font-plex_sans text-sm">or</span>
          <div className="w-full h-[1px] bg-gray-200" />
        </div>
        <button
          className="flex justify-center items-center h-[48px] w-full gap-2 outline-none border-[1px] border-[#00ccbc] px-3.5 py-2 rounded-[4px] bg-[#00ccbc]"
          onClick={() => onContinueWithEmail()}
        >
          <MdMailOutline color="#ffffff" size={15} />
          <span className="font-plex_sans text-sm font-bold text-white">
            Continue with email
          </span>
        </button>
      </div>
    </>
  );
};

export default AuthOptions;
