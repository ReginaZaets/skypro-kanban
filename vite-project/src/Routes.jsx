import { Routes, Route } from "react-router-dom";
import { paths } from "./lib/data";
import MainPage from "./pages/MainPage";
import ExitPage from "./pages/ExitPage";
import CardPage from "./pages/CardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={paths.LOGIN} element={<LoginPage />} />
        <Route path={paths.REGISTER} element={<RegisterPage />} />
        <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={paths.MAIN} element={<MainPage />}>
          <Route path={paths.EXIT} element={<ExitPage />} />
          <Route path={paths.CARD} element={<CardPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
