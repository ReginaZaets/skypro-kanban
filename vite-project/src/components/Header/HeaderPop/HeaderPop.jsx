import { useState } from "react";
import * as S from "../Header.styled";
import { ButtonUsetPop, HeaderPopSet, PopUserMail, PopUserName, PopUserTheme } from "./HeaderPopStyled.js";
import { Link } from "react-router-dom";
import { paths } from "../../../lib/data.js";
import { useUserContext } from "../../../contexts/useUser.jsx";

export default function HeaderPop () {
  const {user} = useUserContext();

    const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
    return (
        <>
        <S.User onClick={toggleDropdown}>{user.name}</S.User>
        {isOpen && (
              <HeaderPopSet
                id="user-set-target"
              >
                <PopUserName>{user.name}</PopUserName>
                <PopUserMail>{user.login}</PopUserMail>
                <PopUserTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" name="checkbox" />
                </PopUserTheme>
                <ButtonUsetPop>
                  <Link to={paths.EXIT}>Выйти</Link>
                </ButtonUsetPop>
              </HeaderPopSet>
        )}
        </>
    )
}