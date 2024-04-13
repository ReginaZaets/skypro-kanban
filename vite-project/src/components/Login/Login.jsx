// import React from 'react'
// import { GlobalStyle } from '../../styles/GlobalStyle'
// import { ContainerSignin, Modal, ModalBlock, ModalFormLogin, ModalTtl } from './LoginStyle';
import { useNavigate } from "react-router-dom";
import { paths } from "../../lib/data";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  function login() {
    setIsAuth(true);
    navigate(paths.MAIN);
  }
  return (
    <div>
      <h2>логин пейдж</h2>
      <button type="button" onClick={login()}></button>
    </div>
  );
};

export default Login;
