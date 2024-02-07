import { PropsWithChildren } from "react";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen min-w-full pt-[73px]">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
