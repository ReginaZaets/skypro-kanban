// import React from 'react'
// import { GlobalStyle } from '../../styles/GlobalStyle'
// import { ContainerSignin, Modal, ModalBlock, ModalFormLogin, ModalTtl } from './LoginStyle';
import { Link } from "react-router-dom";
import { paths } from "../../lib/data";
import { ContainerSignin, Modal, ModalBlock, ModalBtnEnter, ModalFormGroup, ModalFormLogin, ModalInput, ModalTtl } from "./LoginStyle";
import { Wrapper } from "../../styles/shared";

const Login = ({ Authorization }) => {
  // const navigate = useNavigate();

  // function login(event) {
  //   event.preventDefault();
  //   setIsAuth(true);
  //   navigate(paths.MAIN);
  // }
  return (
    <Wrapper>
      <ContainerSignin>
        <Modal>
          <ModalBlock>
            <ModalTtl>
            <h2>Вход</h2>
            </ModalTtl>
            <ModalFormLogin id="formLogIn" action="#">
            <ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта" />
            <ModalInput type="password" name="password" id="formpassword" placeholder="Пароль" />
            <ModalBtnEnter id="btnEnter" type="button" onClick={Authorization}> Войти </ModalBtnEnter>
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
