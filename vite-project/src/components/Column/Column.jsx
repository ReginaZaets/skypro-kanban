import Card from "../Card/Card";

function Column({ status, cardList }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{status}</p>
      </div>
      <div className="cards">
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
      </div>
    </div>
  );
}
export default Column;
