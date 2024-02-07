import { useState } from "react";
import AuthOptions from "../../components/Auth/AuthOptions";
import AuthForm from "../../components/Auth/AuthForm";

const Signin = () => {
  const [continueWithEmail, setContinueWithEmail] = useState(false);

  return (
    <div className="flex h-full justify-center items-center">
      <div className="w-[20%] h-max  flex flex-col gap-5">
        <p className="font-plex_sans text-xl font-bold">Sign up or log in</p>
        {continueWithEmail ? (
          <AuthForm />
        ) : (
          <AuthOptions onContinueWithEmail={() => setContinueWithEmail(true)} />
        )}
      </div>
    </div>
  );
};

export default Signin;
