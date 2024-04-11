import * as S from "./PopExitStyled";
import { Link } from 'react-router-dom';

function PopExit() {
  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <form id="formExit" action="#">
            <S.PopExitGroup>
              <S.PopExitYes id="exitYes">
                <Link to="/login">Да, выйти</Link>
              </S.PopExitYes>
              <S.PopExitNo id="exitNo">
                <Link to="/">Нет, остаться</Link>
              </S.PopExitNo>
            </S.PopExitGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}

export default PopExit;
