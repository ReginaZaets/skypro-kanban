import { useState } from "react";

export default function Header({ cards, setCards }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  function onClick() {
    const newCard = {
      id: cards.length + 1,
      topic: 'Web Design',
      title: 'Новая задача',
      date: '30.10.23',
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="image/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="image/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button
              onClick={onClick}
              className="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              Создать новую задачу
            </button>
            <a
              onClick={toggleDropdown}
              href="#user-set-target"
              className="header__user _hover02"
            >
              Ivan Ivanov
            </a>
            {isOpen && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                <a href="">x</a>
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
