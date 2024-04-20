import Main from "./../components/Main/Main";
import { useEffect, useState } from "react";
import Header from "./../components/Header/Header";
import { Outlet } from "react-router-dom";
import { getTodos } from "../Api";
import { useCardContext, useUserContext } from "../contexts/useUser";

const MainPage = () => {
  const {user} = useUserContext();
const {setCards} = useCardContext();

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
  [user, setCards]);
  return (
    <>
      <Header />
      <Main error={error} isLoading={isLoading}/>
      <Outlet />
    </>
  );
};

export default MainPage;
