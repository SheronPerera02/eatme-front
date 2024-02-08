import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import Auth from "./pages/Auth/Auth";
import { AppDispatch, RootState } from "./state";
import Menu from "./pages/Menu/Menu";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { setAccessToken } from "./state/slices/auth";

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const access_token = useSelector(
    (state: RootState) => state.auth.access_token,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    if (accessToken) {
      setSearchParams({});
      localStorage.setItem("access_token", accessToken);
      dispatch(setAccessToken(accessToken));
    } else {
      checkLocalStorage();
    }
  }, []);

  const checkLocalStorage = () => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) return;
    dispatch(setAccessToken(accessToken));
  };

  return <Layout>{access_token ? <Menu /> : <Auth />}</Layout>;
};

export default App;
