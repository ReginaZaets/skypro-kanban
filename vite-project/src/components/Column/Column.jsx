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
              key={card.id}{...card}
            />
          );
        })}
      </Cards>
    </MainColumn>
  );
}
export default Column;
