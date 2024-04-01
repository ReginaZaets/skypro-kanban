import { cardList } from "../../data";
import Card from "../Card/Card";

function Column({ status }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{status}</p>
      </div>
      <div className="cards">
        {cardList.map((card) => {
          <Card 
          topic={card.topic}
          title={card.title}
          date={card.date}
          key={card.id}
          />
        })}
        {/* <Card
          topic={"Web Design"}
          title={"Название задачи"}
          date={"30.10.23"}
        />
        <Card 
		topic={"Research"} 
		title={"Название задачи"} 
		date={"30.10.23"} 
		/>
        <Card
          topic={"Copywriting"}
          title={"Название задачи"}
          date={"30.10.23"}
        /> */}
      </div>
    </div>
  );
}

export default Column;
