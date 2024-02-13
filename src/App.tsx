import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import Auth from "./pages/Auth/Auth";
import { AppDispatch, RootState } from "./state";
import Menu from "./pages/Menu/Menu";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { setAccessToken, setRefreshToken } from "./state/slices/auth";

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");
    if (accessToken && refreshToken) {
      setSearchParams({});
      localStorage.setItem(
        "auth",
        JSON.stringify({ accessToken, refreshToken }),
      );
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
    } else {
      checkLocalStorage();
    }
  }, []);

  const checkLocalStorage = () => {
    const authData = localStorage.getItem("auth");
    if (!authData) return;
    const { accessToken, refreshToken } = JSON.parse(authData as string);
    if (!accessToken || !refreshToken) return;
    dispatch(setAccessToken(accessToken));
    dispatch(setRefreshToken(refreshToken));
  };

  return <Layout>{accessToken ? <Menu /> : <Auth />}</Layout>;
};

export default App;
