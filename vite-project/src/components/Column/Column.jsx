import Card from "../Card/Card";

function Column({ name }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{name}</p>
      </div>
      <div className="cards">
        <Card
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
        />
      </div>
    </div>
  );
}

export default Column;
