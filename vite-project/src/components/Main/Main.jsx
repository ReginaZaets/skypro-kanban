import { statusList } from "../../lib/data";
import Column from "../Column/Column";
import * as S from "./MainStyled";
import { Container } from "../../styles/shared";
import { useCardContext } from "../../contexts/useUser";

function Main({ isLoading, error }) {
  const {cards} = useCardContext();

  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          {isLoading ? (
            <S.MailContent>
              {statusList.map((status, index) => {
                return (
                  <Column
                    key={index}
                    status={status}
                    cardList={cards.filter((card) => card.status === status)}
                  />
                );
              })}
            </S.MailContent>
          ) : (
            "Загрузка..."
          )}
          {error && <p style={{ color: "red" }}>Ошибка, попробуйте позже</p>}
        </S.MainBlock>
      </Container>
    </S.Main>
  );
}

export default Main;
