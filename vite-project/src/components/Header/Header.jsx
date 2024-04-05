import HeaderPop from "./HeaderPop";
import * as S from "./Header.styled";

export default function Header({ cards, setCards, toggleDropdown }) {
  
  function onClick() {
    const newCard = {
      id: cards.length + 1,
      topic: "Web Design",
      title: "Новая задача",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }
  return (
    <S.Header>
      <div className="container">
        <S.HeaderBlock>
          <S.Logo>
            <a href="" target="_self">
              <img src="image/logo.png" alt="logo" />
            </a>
          </S.Logo>
          {/* <S.HeaderLogo>
            <a href="" target="_self">
              <img src="image/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo> */}
          <S.Nav>
            <S.Button onClick={onClick} id="btnMainNew">
              Создать новую задачу
            </S.Button>
            <HeaderPop onClick={toggleDropdown}/>
          </S.Nav>
        </S.HeaderBlock>
      </div>
    </S.Header>
  );
}
