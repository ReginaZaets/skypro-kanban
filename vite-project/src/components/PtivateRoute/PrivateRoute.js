import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../lib/data";

function PrivateRoute({ isAuth }) {
  return (isAuth ? <Outlet/> : <Navigate to={paths.LOGIN}/>);
}

export default PrivateRoute;
