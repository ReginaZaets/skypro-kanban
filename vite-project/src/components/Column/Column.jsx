import Card from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./ColumnStyle";

function Column({ status, cardList }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{status}</p>
      </ColumnTitle>
      <Cards>
        {cardList.map((card) => {
          return (
            <Card
              topic={card.topic}
              title={card.title}
              date={card.date}
              key={card.id}
            />
          );
        })}
      </Cards>
    </MainColumn>
  );
}
export default Column;
