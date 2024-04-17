import { Link } from "react-router-dom";
import { Wrapper } from "../../styles/shared";
import {
  ContainerSignup,
  Modal,
  ModalBlock,
  ModalBtnEnter,
  ModalFormGroup,
  ModalFormLogin,
  ModalInput,
  ModalTtl,
} from "./RegisterStyle";
import { paths } from "../../lib/data";
import { useState } from "react";
import { registerUser } from "../../Api";
import { sanitizeHtml } from "../../lib/sanitizeHtml";

const Register = ({ userReg }) => {
  

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = async () => {
    await registerUser({ name:sanitizeHtml(name), login:sanitizeHtml(login), password:sanitizeHtml(password) })
      .then((response) => {
        userReg(response.user);
      })
      .catch((err) => {
        console.log(err.message)
        if (err.message === "Такой пользователь уже существует") {
          alert("Такой пользователь уже существует");
        }
        if (err.message === "Failed to fetch") {
          alert("Ошибка сервера");
        }
        if (window.navigator.onLine === false) {
          alert('Проблемы с интернетом, проверьте подключение')
        }
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <ContainerSignup>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Регистрация</h2>
            </ModalTtl>
            <ModalFormLogin id="formLogUp" action="#">
              <ModalInput
                onSubmit={handleSubmit}
                type="text"
                name="name"
                id="first-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
              />
              <ModalInput
                onSubmit={handleSubmit}
                type="text"
                name="login"
                id="loginReg"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Эл. почта"
              />
              <ModalInput
                onSubmit={handleSubmit}
                type="password"
                name="password"
                id="passwordFirst"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
              />
              <ModalBtnEnter id="SignUpEnter">
                <Link onClick={handleInputChange}>Зарегистрироваться</Link>
              </ModalBtnEnter>
              <ModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to={paths.LOGIN}>Войдите здесь</Link>
                </p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignup>
    </Wrapper>
  );
};

export default Register;
