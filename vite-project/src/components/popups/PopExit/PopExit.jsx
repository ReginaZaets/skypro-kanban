import * as S from "./PopExitStyled";

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
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </S.PopExitYes>
              <S.PopExitNo id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </S.PopExitNo>
            </S.PopExitGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}

export default PopExit;
