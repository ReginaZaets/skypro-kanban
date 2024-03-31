import Column from "../Column/Column";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column name={"Без статуса"} />
            <Column name={"Нужно сделать"} />
            <Column name={"В работе"} />
            <Column name={"Тестирование"} />
            <Column name={"Готово"} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
