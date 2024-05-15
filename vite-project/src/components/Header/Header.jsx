import HeaderPop from "./HeaderPop/HeaderPop.jsx";
import * as S from "./Header.styled";
import { Container } from "../../styles/shared.js";
import { Link } from "react-router-dom";
import { paths } from "../../lib/data.js";
import { ThemeContext } from "../../contexts/themeContext.jsx";
import { useContext } from "react";

export default function Header({ toggleDropdown }) {
  const { logo } = useContext(ThemeContext);
  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.Logo>
            <Link to={paths.MAIN} target="_self">
              <img src={logo} alt="logo" />
            </Link>
          </S.Logo>
          <S.Nav>
            <S.Button id="btnMainNew">
              <Link to={paths.NEWCARD}>Создать новую задачу</Link>
            </S.Button>
            <HeaderPop onClick={toggleDropdown} />
          </S.Nav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}
