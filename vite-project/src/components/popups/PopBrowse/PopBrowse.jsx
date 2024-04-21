import { Link } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import { useParams } from "react-router-dom";
import { useCardContext } from "../../../contexts/useUser";
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

function PopBrowse() {
  const { id } = useParams();
  const { cards } = useCardContext();
  const currentCard = cards.find((element) => id === element._id);

  return (
    <PopBrows id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>Задача: {currentCard.title}</PopBrowseTtl>
              <CategotiesTheme $topic={currentCard.topic}>
                <p>{currentCard.topic}</p>
              </CategotiesTheme>
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              <PopBrowseStatusP>Статус</PopBrowseStatusP>
              <StatusThemes>
                {/* <div className="status__theme _hide">
										<p>Без статуса</p>
									</div> */}
                <StatusTheme>
                  <p>{currentCard.status}</p>
                </StatusTheme>
                {/* <div className="status__theme _hide">
										<p>В работе</p>
									</div>
									<div className="status__theme _hide">
										<p>Тестирование</p>
									</div>
									<div className="status__theme _hide">
										<p>Готово</p>
									</div> */}
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
            {/* <div className="theme-down__categories theme-down">
								<p className="categories__p subttl">Категория</p>
								<div className="categories__theme _orange _active-category">
									<p className="_orange">Web Design</p>
								</div>
							</div> */}
            <PopBrowseBtn>
              <BtnGroup>
                <BtnBor>
                  <Link>Редактировать задачу</Link>
                </BtnBor>
                <BtnBor>
                  <Link>Удалить задачу</Link>
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
