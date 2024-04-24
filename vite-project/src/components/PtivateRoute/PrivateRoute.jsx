import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../lib/data";
import { useUserContext } from "../../contexts/useUser";

function PrivateRoute() {
  const {user} = useUserContext()
  return (user ? <Outlet/> : <Navigate to={paths.LOGIN}/>);
}

export default PrivateRoute;
