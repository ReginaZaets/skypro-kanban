// import React from 'react'
// import { GlobalStyle } from '../../styles/GlobalStyle'
// import { ContainerSignin, Modal, ModalBlock, ModalFormLogin, ModalTtl } from './LoginStyle';
import { Link } from "react-router-dom";
import { paths } from "../../lib/data";
import { ContainerSignin, Modal, ModalBlock, ModalBtnEnter, ModalFormGroup, ModalFormLogin, ModalInput, ModalTtl } from "./LoginStyle";
import { Wrapper } from "../../styles/shared";
import { useState } from "react";
import { loginUser } from "../../Api";

const Login = ({userLogin}) => {
  const [error, setError] = useState(null);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = async () => {
    // try {
    //   let log = await loginUser({login, password});
    //   userLogin(log.user)
    // } catch(err) {
    //   setError(err.message)
    // }
    
    
    await loginUser( {login, password})
    .then((response) => {userLogin(response.user)}) 
    .catch((err)=>{
      setError(err.message)
    })
  }
  return (
    <Wrapper>
      <ContainerSignin>
        <Modal>
          <ModalBlock>
            <ModalTtl>
            <h2>Вход</h2>
            </ModalTtl>
            <ModalFormLogin id="formLogIn" action="#">
            <ModalInput type="text" name="login" id="formlogin" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Эл. почта" />
            <ModalInput type="password" name="password" id="formpassword" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
            <p>
            {error && <p style={{ color: "red" }}>Неверный логин или пароль</p>}
            </p>
            <ModalBtnEnter id="btnEnter" type="button" onClick={handleLoginClick}>Войти</ModalBtnEnter>
            <ModalFormGroup>
              <p>Нужно зарегистрироваться?</p>
              <Link to={paths.REGISTER}>Регистрируйтесь здесь</Link>
            </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignin>
    </Wrapper>
  );
};

export default Login;
