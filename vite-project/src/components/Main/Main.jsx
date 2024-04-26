import { Colomns } from "../../lib/data";
import Column from "../Column/Column";
import * as S from "./MainStyled";
import { Container } from "../../styles/shared";
import { useCardContext } from "../../contexts/useUser";
import { DragDropContext } from "react-beautiful-dnd";

function Main({ isLoading, error }) {
  const { cards } = useCardContext();

  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          {isLoading ? (
            <DragDropContext
              onDragEnd={({ destination, source }) => {
                if (!destination) return;
                cards((prevCard) => {
                  const updatedCards = Array.from(prevCard);
                  const [removed] = updatedCards.slice(source.index, 1);
                  updatedCards.slice(destination.index, 0, removed);
                  return updatedCards;
                });
              }}
            >
              <S.MailContent>
                {Colomns.map((status, index) => {
                  return (
                    <Column
                      key={index}
                      status={status.status}
                      cardList={cards.filter((card) => card.status === status.status)}
                    />
                  );
                })}
              </S.MailContent>
            </DragDropContext>
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
