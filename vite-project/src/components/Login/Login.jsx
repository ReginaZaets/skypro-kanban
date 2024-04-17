// import React from 'react'
// import { GlobalStyle } from '../../styles/GlobalStyle'
// import { ContainerSignin, Modal, ModalBlock, ModalFormLogin, ModalTtl } from './LoginStyle';
import { Link } from "react-router-dom";
import { paths } from "../../lib/data";
import {
  ContainerSignin,
  Modal,
  ModalBlock,
  ModalBtnEnter,
  ModalFormGroup,
  ModalFormLogin,
  ModalInput,
  ModalTtl,
} from "./LoginStyle";
import { Wrapper } from "../../styles/shared";
import { useState } from "react";
import { loginUser } from "../../Api";

const Login = ({ userLogin }) => {
 

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  // useEffect(() => {
  //   const loginErr = async () => {
  //     const userData = await loginUser( {login, password})
  //     setError(userData);
  // };
  // loginErr();
  // }, [])

  const handleLoginClick = async (e) => {
    e.preventDefault();
    // try {
    //   let log = await loginUser({login, password});
    //   userLogin(log.user)
    // } catch(err) {
    //   console.log(err.message)
    //   setError(err.message)
    // }

    await loginUser({ login, password })
      .then((response) => {
        userLogin(response.user);
      })
      .catch((err) => {
        console.log(err.message)
        if (err.message === "Неверный логин или пароль") {
          alert("Неверный логин или пароль");
        }
        if (err.message === "Failed to fetch") {
          alert("Ошибка сервера");
        }
        if (window.navigator.onLine === false) {
          alert('Проблемы с интернетом, проверьте подключение')}
      });
  };
  return (
    <Wrapper>
      <ContainerSignin>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Вход</h2>
            </ModalTtl>
            <ModalFormLogin id="formLogIn" action="#">
              <ModalInput
                type="text"
                name="login"
                id="formlogin"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id="formpassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
              />

             

              <ModalBtnEnter
                id="btnEnter"
                type="button"
                onClick={handleLoginClick}
              >
                Войти
              </ModalBtnEnter>
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
