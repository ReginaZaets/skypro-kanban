import { statusList } from "../../data";
import Column from "../Column/Column";

function Main({cards}) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status, index) => {
              return <Column 
              key={index}
              status={status}
              cardList={cards.filter((card) => card.status === status)}
              />
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
