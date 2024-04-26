import { Colomns } from "../../lib/data";
import Card from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./ColumnStyle";
import { Draggable, Droppable } from "react-beautiful-dnd";

function Column({ status, cardList, index}) {
  // const ForwardedCard = React.forwardRef((props, ref) => (
  //   <Card {...props} forwardedRef={ref} />
  // ));

  // function CardItem(props) {
  //   const { forwardedRef, ...rest } = props;
  //   return <div ref={forwardedRef} {...rest} />;
  // }
  return (
    <MainColumn>
      <Droppable droppableId={Colomns[index].id} key={Colomns[index].id} index={Colomns.index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            {...provided.dragHandleProps}
          >
            <ColumnTitle>
              <p>{status}</p>
            </ColumnTitle>

            <Cards>
              {cardList.map((card, index) => {
                return (
                  <Draggable draggableId={card._id} key={card._id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card key={card._id} {...card} />
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </Cards>
          </div>
        )}
      </Droppable>
    </MainColumn>
  );
}
export default Column;
