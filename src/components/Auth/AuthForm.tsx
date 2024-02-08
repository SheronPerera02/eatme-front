import { useState } from "react";
import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";
import { signin, signup } from "../../state/slices/auth/actions";
import { AppDispatch } from "../../state";

const AuthForm = () => {
  const [mode, setMode] = useState<"signin" | "signup" | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (action: "signin" | "signup") => {
    if (action !== mode) return setMode(action);

    if (action === "signin") {
      return dispatch(signin({ email, password }));
    }

    dispatch(signup({ email, password, onSuccess: clearForm }));
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-plex_sans text-sm">Email address</p>
          <div className="flex items-center h-[48px] w-full border-[1px] border-gray-400 px-3.5 py-2 rounded-[4px]">
            <input
              className="outline-none font-plex_sans text-sm"
              placeholder="e.g. name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          onClick={() => handleSubmit("signin")}
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
          onClick={() => handleSubmit("signup")}
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
