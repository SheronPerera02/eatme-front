import { useState } from "react";
import { twMerge } from "tailwind-merge";

const AuthForm = () => {
  const [mode, setMode] = useState<"signin" | "signup" | null>(null);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-plex_sans text-sm">Email address</p>
          <div className="flex items-center h-[48px] w-full border-[1px] border-gray-400 px-3.5 py-2 rounded-[4px]">
            <input
              className="outline-none font-plex_sans text-sm"
              placeholder="e.g. name@example.com"
            />
          </div>
        </div>
        <div
          className={twMerge(
            "flex flex-col gap-2 overflow-hidden max-h-0 transition-all duration-500 delay-700",
            mode ? "max-h-96" : "",
          )}
        >
          <p className="font-plex_sans text-sm">Password</p>
          <div className="flex items-center h-[48px] w-full border-[1px] border-gray-400 px-3.5 py-2 rounded-[4px]">
            <input
              className="outline-none font-plex_sans text-sm"
              type="password"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-hidden">
        <button
          className={twMerge(
            "flex justify-center items-center h-[48px] overflow-hidden gap-2 outline-none",
            "border-[1px] border-[#00ccbc] px-3.5 py-2 rounded-[4px] bg-[#00ccbc]",
            "transition-all duration-500 min-w-max",
            !mode || mode === "signin" ? "flex-1" : "",
          )}
          onClick={() => setMode("signin")}
        >
          <span className="font-plex_sans text-sm font-bold text-white">
            Sign in
          </span>
        </button>
        <button
          className={twMerge(
            "flex justify-center items-center h-[48px] overflow-hidden gap-2 outline-none",
            "border-[1px] border-[#00ccbc] px-3.5 py-2 rounded-[4px] bg-white",
            "transition-all duration-500 min-w-max",
            !mode || mode === "signup" ? "flex-1" : "",
          )}
          onClick={() => setMode("signup")}
        >
          <span className="font-plex_sans text-sm font-bold text-[#00ccbc] breakkee">
            Sign up
          </span>
        </button>
      </div>
    </>
  );
};
export default AuthForm;