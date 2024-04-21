import { Link, useNavigate } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import { useState } from "react";
import { postTodos } from "../../../Api";
import { useUserContext, useCardContext } from "../../../contexts/useUser";
import * as S from "../PopNewCard/PopNewcardStyle";
import { paths } from "../../../lib/data";
import { PopBrowseCalendar, Subttl } from "../PopBrowse/PopBrowseStyle";

function PopNewCard() {
  const { setCards } = useCardContext();
  
  const [error, setError] = useState(null);



  const [selected, setSelected] = useState();

  const [newCard, setNewCard] = useState({
    title: "",
    description: "",
    topic: "",
  });

  const { user } = useUserContext();
  const navigate = useNavigate();
  // Функция на проверку пустых полей ввода
  function isEmptyFields(arrFields) {
    return arrFields.some((el) => el === "");
  }

  //функция срабатывает при нажатии добавить
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { title, topic, description } = newCard;
    if (isEmptyFields([title.trim(), topic.trim(), description.trim()])) {
      setError("Заполни все поля");
      // showError("Заполни все поля");
      return;
    }

    const newCardUser = { ...newCard, date: selected };
    postTodos({ ...newCardUser, token: user?.token })
      .then((response) => {
        setCards(response.tasks);
        navigate(-1);
      })
      .catch((err) =>
      {console.log(err.message);
      setError(err.message)}
      );
  };

  //Функция, которая будет срабытывать, когда пользователь будет вводить или стирать, какие то данные в поле ввода.
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение (value)- это value где хранится значение нашего поля ввода.

    setNewCard({
      ...newCard,
      [name]: value,
    });
  };
  // function showError(errorText) {
  //   return alert(errorText);
  // }

  return (
    <S.PopNewCard id="new-card">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <Link to={paths.MAIN}>&#10006;</Link>
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" action="#">
                <S.FormNewBlock>
                  <Subttl htmlFor="formTitle" >
                    Название задачи
                  </Subttl>
                  <S.FormNewInput
                    onChange={handleInputChange}
                    type="text"
                    name="title"
                    value={newCard.title}
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    $isError={error}
                  />
                </S.FormNewBlock>

                <S.FormNewBlock>
                  <Subttl htmlFor="textArea">
                    Описание задачи
                  </Subttl>
                  <S.PopNewCardArea
                    onChange={handleInputChange}
                    value={newCard.description}
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    $isError={error}
                  ></S.PopNewCardArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <PopBrowseCalendar>
                <Calendar selected={selected} setSelected={setSelected} />
              </PopBrowseCalendar>
            </S.PopNewCardWrap>
            <S.Categories>
              <S.CategoriesP>Категория</S.CategoriesP>
              <S.CategoriesThemes>
                <S.PopNewCardLabel>
                  <S.LabelPW>Web Design</S.LabelPW>
                  <input
                    type="radio"
                    id="radio1"
                    name="topic"
                    value="Web Design"
                    onChange={handleInputChange}
                  />
                </S.PopNewCardLabel>

                <S.PopNewCardLabel>
                  <S.LabelC>Research</S.LabelC>
                  <input
                    type="radio"
                    id="radio2"
                    name="topic"
                    value="Research"
                    onChange={handleInputChange}
                  />
                </S.PopNewCardLabel>
                <S.PopNewCardLabel>
                  <S.LabelR>Copywriting</S.LabelR>

                  <input
                    type="radio"
                    id="radio3"
                    name="topic"
                    value="Copywriting"
                    onChange={handleInputChange}
                  />
                </S.PopNewCardLabel>
                {/* <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div> */}
              </S.CategoriesThemes>
            </S.Categories>
            {error && (
                <p style={{ color: "red" }}>{error}</p>
              )}
            <S.FormNewCreate onClick={handleFormSubmit} id="btnCreate">
              Создать задачу
            </S.FormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;
