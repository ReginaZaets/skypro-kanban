import HeaderPop from "./HeaderPop/HeaderPop.jsx";
import * as S from "./Header.styled";
import { Container } from "../../styles/shared.js";
import { Link } from "react-router-dom";
import { paths } from "../../lib/data.js";

export default function Header({ toggleDropdown }) {
  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.Logo>
            <Link to="" target="_self">
              <img src="image/logo.png" alt="logo" />
            </Link>
          </S.Logo>
          {/* <S.Logo>
            <Link to="" target="_self">
              <img src="image/logo_dark.png" alt="logo" />
            </Link>
          </S.Logo> */}
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
