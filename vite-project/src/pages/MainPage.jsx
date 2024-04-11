import Main from "./../components/Main/Main"
import { useState } from "react";
import { cardList } from "./../lib/data";
import Header from "./../components/Header/Header";
import {Outlet} from "react-router-dom"


const MainPage = () => {
    const [cards, setCards] = useState(cardList);
  return (
    <>
    <Header setCards={setCards} cards={cards} />
    <Main cards={cards}/>
    <Outlet/>
    </>
  )
}

export default MainPage
