import Card from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./ColumnStyle";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useCardContext } from "../../contexts/useUser";

function Column({ status, cardList }) {
  const { cards } = useCardContext();

  // const ForwardedCard = React.forwardRef((props, ref) => (
  //   <Card {...props} forwardedRef={ref} />
  // ));

  // function CardItem(props) {
  //   const { forwardedRef, ...rest } = props;
  //   return <div ref={forwardedRef} {...rest} />;
  // }
  return (
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
      <Droppable droppableId="ROOT" type="group">
        {(provided) => (
          <MainColumn {...provided.droppableProps} ref={provided.innerRef}>
            <ColumnTitle>
              <p>{status}</p>
            </ColumnTitle>
            <Cards>
              {cardList.map((card, index) => {
                return <Card index={index} key={card._id} {...card} />;
              })}
            </Cards>
          </MainColumn>
        )}
      </Droppable>
    </DragDropContext>
  );
}
export default Column;
