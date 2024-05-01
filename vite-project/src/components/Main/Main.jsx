import { Colomns } from "../../lib/data";
import Column from "../Column/Column";
import * as S from "./MainStyled";
import { Container } from "../../styles/shared";
import { useCardContext, useUserContext } from "../../contexts/useUser";
import { DragDropContext } from "react-beautiful-dnd";
import { editTodos } from "../../Api";

function Main({ isLoading, error }) {
  const { cards, setCards } = useCardContext();
  const { user } = useUserContext();

  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          {isLoading ? (
            <DragDropContext
              onDragEnd={async ({ source, destination }) => {
                if (!destination) return;
                if (
                  source.droppableId === destination.droppableId &&
                  source.index === destination.index
                ) {
                  return;
                }
                console.log("Source:", source);
                console.log("Destination:", destination);

                const newCards = [...cards];

                const [removedCard] = newCards.splice(source.index, 1);
                newCards.splice(destination.index, 0, removedCard);
                setCards(newCards);

                const newStatus = Colomns.find(
                  (column) => column.id.toString() === destination.droppableId
                ).status;

                const newSaveCard = newCards.find(
                  (card) => card._id === removedCard._id
                );
                console.log(newSaveCard.status)

                console.log(newStatus)
                console.log(removedCard._id);

                console.log(cards.find(
                  (card) => card._id === removedCard._id
                ));

                console.log(newSaveCard);

                newSaveCard.status = newStatus;

                // console.log(newCards[source.index]._id);
                await editTodos({
                  _id: newSaveCard._id,
                  token: user.token,
                  newSaveCard,
                });
              }}
            >
              <S.MailContent>
                {Colomns.map((status, index) => {
                  return (
                    <Column
                      key={index}
                      index={index}
                      status={status.status}
                      cardList={cards.filter(
                        (card) => card.status === status.status
                      )}
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
