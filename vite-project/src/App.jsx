import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import { useState } from "react";
import { cardList } from "./data";

function App() {
  const [cards, setCards] = useState(cardList);
  
  return (
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header setCards={setCards} cards={cards} />
      <Main cards={cards} />
    </div>
  );
}

export default App;
