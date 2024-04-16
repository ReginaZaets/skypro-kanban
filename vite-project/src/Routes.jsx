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

//если убираем значение у ключа в локал сторадж
function checkLs () {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  } catch (error) {
    localStorage.removeItem("user")
    return null;
  }
}

const AppRoutes = () => {
  // const [isAuth, setIsAuth] = useState(false)
  // const navigate = useNavigate();
  // function Authorization(event) {
  //   event.preventDefault();
  //   setIsAuth((item) => !item)
  //   navigate(paths.MAIN);
  // }

  const [user, setUser] = useState(checkLs());
  const navigate = useNavigate();

  function userLogin(newUser) {
    localStorage.setItem("user", JSON.stringify(newUser))
    setUser(newUser);
    navigate(paths.MAIN)
  }

  function userReg (newUser) {
    localStorage.setItem("user", JSON.stringify(newUser))
    setUser(newUser);
    navigate(paths.LOGIN)
  }


  function Logout() {
    localStorage.removeItem("user");
    setUser(null);
    navigate(paths.LOGIN)
  }
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute user={user} />}>
          <Route path={paths.MAIN} element={<MainPage user={user}/>}>
            <Route path={paths.EXIT} element={<ExitPage Logout={Logout}/>} />
            <Route path={paths.CARD} element={<CardPage />} />
          </Route>
        </Route>
        <Route path={paths.LOGIN} element={<LoginPage userLogin={userLogin}/>} />
        <Route path={paths.REGISTER} element={<RegisterPage userReg={userReg}/>} />
        <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
