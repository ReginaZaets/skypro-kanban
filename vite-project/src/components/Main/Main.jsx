import { useEffect, useState } from "react";
import { statusList } from "../../data";
import Column from "../Column/Column";
import * as S from "./MainStyled";
import { Container } from "../../styles/shared";


function Main({cards}) {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000); // 2 секунды задержки
  }, []);
  return (
    <S.Main>
    <Container>
        <S.MainBlock>
        {isLoading ? (
          <S.MailContent>
            {statusList.map((status, index) => {
              return <Column 
              key={index}
              status={status}
              cardList={cards.filter((card) => card.status === status)}
              />
            })}
          </S.MailContent>): "Загрузка..."}
        </S.MainBlock>
      </Container>
    </S.Main>
  );
}

export default Main;
