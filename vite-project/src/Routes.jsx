import { Routes, Route } from "react-router-dom";
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
  return (
    <>
      <Routes>
        <Route path={paths.LOGIN} element={<LoginPage setIsAuth={setIsAuth}/>} />
        <Route path={paths.REGISTER} element={<RegisterPage />} />
        <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path={paths.MAIN} element={<MainPage />}>
            <Route path={paths.EXIT} element={<ExitPage />} />
            <Route path={paths.CARD} element={<CardPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
