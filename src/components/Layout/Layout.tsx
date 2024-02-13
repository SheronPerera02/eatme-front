import { PropsWithChildren } from "react";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen min-w-full pt-[60px] lg:pt-[73px]">
      <Header />
      <div className="h-[calc(100vh-60px)] lg:h-[calc(100vh-73px)]">{children}</div>
    </div>
  );
};

export default Layout;
