import { useState } from "react";
import * as S from "../Header.styled";
import { ButtonUsetPop, HeaderPopSet, PopUserMail, PopUserName, PopUserTheme } from "./HeaderPopStyled.js";
import { Link } from "react-router-dom";

export default function HeaderPop () {
    const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
    return (
        <>
        <S.User onClick={toggleDropdown}>Ivan Ivanov</S.User>
        {isOpen && (
              <HeaderPopSet
                id="user-set-target"
              >
                <PopUserName>Ivan Ivanov</PopUserName>
                <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
                <PopUserTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" name="checkbox" />
                </PopUserTheme>
                <ButtonUsetPop>
                  <Link to="/exit">Выйти</Link>
                </ButtonUsetPop>
              </HeaderPopSet>
        )}
        </>
    )
}