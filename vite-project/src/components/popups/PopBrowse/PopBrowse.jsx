import { Link, useNavigate } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import { useParams } from "react-router-dom";
import { useCardContext, useUserContext } from "../../../contexts/useUser";
import {
  BtnBg,
  BtnBor,
  BtnGroup,
  CategotiesTheme,
  FormBrowseArea,
  PopBrows,
  PopBrowseBlock,
  PopBrowseBtn,
  PopBrowseCalendar,
  PopBrowseCalendarTtl,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseFormBlock,
  PopBrowseStatus,
  PopBrowseStatusP,
  PopBrowseTopBlock,
  PopBrowseTtl,
  PopBrowseWrap,
  StatusTheme,
  StatusThemes,
  Subttl,
} from "./PopBrowseStyle";
import { paths } from "../../../lib/data";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/themeContext";
import { deleteTodos } from "../../../Api";

function PopBrowse() {
  const { id } = useParams();
  const { cards, setCards} = useCardContext();
  const {theme} = useContext(ThemeContext);
  const {user} = useUserContext();
  const navigate = useNavigate()


  const currentCard = cards.find((element) => id === element._id);

  const handleDeleteClick = (e)=> {
    e.preventDefault();
     
     deleteTodos({_id: currentCard._id, token: user.token})
     .then((response) => {
      // Обновляем состояние с новыми данными карточек
      setCards(response.tasks);
      navigate(paths.MAIN)
     })
     .catch((err) => {
      console.log(err.message)
     })
     
  }

  return (
    <PopBrows id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>Задача: {currentCard.title}</PopBrowseTtl>
              <CategotiesTheme $theme={theme} $topic={currentCard.topic}>
                <p>{currentCard.topic}</p>
              </CategotiesTheme>
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              <PopBrowseStatusP>Статус</PopBrowseStatusP>
              <StatusThemes>
                <StatusTheme>
                  <p>{currentCard.status}</p>
                </StatusTheme>
              </StatusThemes>
            </PopBrowseStatus>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <PopBrowseFormBlock>
                  <Subttl htmlFor="textArea01">Описание задачи</Subttl>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></FormBrowseArea>
                </PopBrowseFormBlock>
              </PopBrowseForm>
              <PopBrowseCalendar>
                <PopBrowseCalendarTtl>Даты</PopBrowseCalendarTtl>
                <Calendar/>
              </PopBrowseCalendar>
            </PopBrowseWrap>
            <PopBrowseBtn>
              <BtnGroup>
                <BtnBor >
                  <Link>Редактировать задачу</Link>
                </BtnBor>
                <BtnBor onClick={handleDeleteClick}>
                  Удалить задачу
                </BtnBor>
              </BtnGroup>
              <BtnBg>
                <Link to={paths.MAIN}>Закрыть</Link>
              </BtnBg>
            </PopBrowseBtn>
            {/* <div className="pop-browse__btn-edit _hide">
								<div className="btn-group">
									<BtnBg><a href="#">Сохранить</a></BtnBg>
									<BtnBo"><a href="#">Отменить</a></BtnBo>
									<BtnBo" id="btnDelete"><a href="#">Удалить задачу</a></BtnBo>
								</div>
								<BtnBg><Link to={paths.MAIN}>Закрыть</Link></BtnBg>
							</div> */}
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrows>
  );
}

export default PopBrowse;
