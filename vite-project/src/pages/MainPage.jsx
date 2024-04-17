import Main from "./../components/Main/Main";
import { useEffect, useState } from "react";
import Header from "./../components/Header/Header";
import { Outlet } from "react-router-dom";
import { getTodos } from "../Api";

const MainPage = ({user}) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTodos({token: user.token}).then((data) => {
      setCards(data.tasks);
    })
    .catch((err)=>{
      setError(err.message)
    })
    .finally(()=>{
      setIsLoading(true);
    })
  }, 
  []);
  return (
    <>
      <Header setCards={setCards} cards={cards} user={user} />
      <Main error={error} cards={cards} isLoading={isLoading}/>
      <Outlet />
    </>
  );
};

export default MainPage;
