import { Routes, Route, useNavigate } from "react-router-dom";
import { paths } from "./lib/data";
import MainPage from "./pages/MainPage";
import ExitPage from "./pages/ExitPage";
import CardPage from "./pages/CardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useState } from "react";
import PrivateRoute from "./components/PtivateRoute/PrivateRoute";

const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate();
  function Authorization(event) {
    event.preventDefault();
    setIsAuth((item) => !item)
    navigate(paths.MAIN);
  }
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path={paths.MAIN} element={<MainPage />}>
            <Route path={paths.EXIT} element={<ExitPage Authorization={Authorization}/>} />
            <Route path={paths.CARD} element={<CardPage />} />
          </Route>
        </Route>
        <Route path={paths.LOGIN} element={<LoginPage Authorization={Authorization}/>} />
        <Route path={paths.REGISTER} element={<RegisterPage Authorization={Authorization}/>} />
        <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
