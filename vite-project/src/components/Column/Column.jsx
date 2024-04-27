import { Colomns } from "../../lib/data";
import Card from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./ColumnStyle";
import {  Draggable } from "react-beautiful-dnd";
import {StrictModeDroppable as Droppable} from "../../lib/helpDroppable"

function Column({ status, cardList, index }) {
  // const ForwardedCard = React.forwardRef((props, ref) => (
  //   <Card {...props} forwardedRef={ref} />
  // ));

  // function CardItem(props) {
  //   const { forwardedRef, ...rest } = props;
  //   return <div ref={forwardedRef} {...rest} />;
  // }


  return (
    <MainColumn>
      
      <Droppable
        droppableId={Colomns[index].id.toString()}
        key={Colomns[index].id}
        index={index}
      >
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            {...provided.dragHandleProps}
          >
            {/* {console.log(provided)} */}

            <ColumnTitle>
              <p>{status}</p>
            </ColumnTitle>

            <Cards>
              {cardList.map((card, index) => {
                return (
                  <Draggable
                    draggableId={card._id.toString()}
                    key={card._id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {/* {console.log(provided)} */}

                        <Card
                          index={index}
                          id={card._id}
                          status={card.status}
                          key={card._id}
                          {...card}
                        />
                        
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </Cards>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      
    </MainColumn>
  );
}
export default Column;
