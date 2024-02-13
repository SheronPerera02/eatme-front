import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import Auth from "./pages/Auth/Auth";
import { AppDispatch, RootState } from "./state";
import Menu from "./pages/Menu/Menu";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { setAuthData } from "./state/slices/auth";

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const auth = useSelector((state: RootState) => state.auth.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");
    const expiration = searchParams.get("expiration");
    if (accessToken && refreshToken && expiration) {
      setSearchParams({});
      localStorage.setItem(
        "auth",
        JSON.stringify({ accessToken, expiration, refreshToken }),
      );
      dispatch(
        setAuthData({
          accessToken,
          expiration: Number(expiration),
          refreshToken,
        }),
      );
    } else {
      checkLocalStorage();
    }
  }, []);

  const checkLocalStorage = () => {
    const authData = localStorage.getItem("auth");
    if (!authData) return;
    const { accessToken, expiration, refreshToken } = JSON.parse(
      authData as string,
    );
    if (!accessToken || !expiration || !refreshToken) return;
    dispatch(
      setAuthData({
        accessToken,
        expiration: Number(expiration),
        refreshToken,
      }),
    );
  };

  return <Layout>{auth?.accessToken ? <Menu /> : <Auth />}</Layout>;
};

export default App;
