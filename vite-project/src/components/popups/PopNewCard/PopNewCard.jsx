import { Link, useNavigate } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import { useState } from "react";
import { postTodos } from "../../../Api";
import { useUserContext, useCardContext } from "../../../contexts/useUser";


function PopNewCard() {
const {setCards} = useCardContext();

  const [selected, setSelected] = useState();

  const [newCard, setNewCard] = useState({
    title: "",
    description: "",
    topic: "",
  });
  const { user } = useUserContext();
  const navigate = useNavigate();
  

  const handleSibmit = async (e) => {
    e.preventDefault();
    const newCardUser = { ...newCard, date: selected };
    postTodos({ ...newCardUser, token: user?.token })
      .then((response) => {
        setCards(response.tasks);
        navigate(-1);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="pop-new-card" id="new-card">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to="/" className="pop-new-card__close">
              &#10006;
            </Link>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    onChange={(e) =>
                      setNewCard({ ...newCard, title: e.target.value })
                    }
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    onChange={(e) =>
                      setNewCard({ ...newCard, description: e.target.value })
                    }
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <Calendar selected={selected} setSelected={setSelected} />
              </div>
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <label>
                  Web Design
                  <input
                    type="radio"
                    onChange={(e) =>
                      setNewCard({ ...newCard, topic: e.target.value })
                    }
                  />
                </label>

                <label>
                  Research
                  <input
                    type="radio"
                    onChange={(e) =>
                      setNewCard({ ...newCard, topic: e.target.value })
                    }
                  />
                </label>
                <label>
                  Copywriting
                  <input
                    type="radio"
                    onChange={(e) =>
                      setNewCard({ ...newCard, topic: e.target.value })
                    }
                  />
                </label>
                {/* <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div> */}
              </div>
            </div>
            <button
              className="form-new__create _hover01"
              onClick={handleSibmit}
              id="btnCreate"
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
