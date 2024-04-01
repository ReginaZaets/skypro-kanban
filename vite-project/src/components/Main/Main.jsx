import { cardList } from "../../data";
import Column from "../Column/Column";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status) => {
              return <Column 
              key={status}
              status={status}
              cardList={cardList.filter((card) => card.status === status)}
              />
            })}
            {/* <Column name={"Без статуса"} />
            <Column name={"Нужно сделать"} />
            <Column name={"В работе"} />
            <Column name={"Тестирование"} />
            <Column name={"Готово"} /> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
