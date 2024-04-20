import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../lib/data";

export const UserContext = createContext(null);
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

export function UserProvider({children}) {
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
        <UserContext.Provider value={{user, userLogin, userReg, Logout}}>
            {children}
        </UserContext.Provider>
    )
}

