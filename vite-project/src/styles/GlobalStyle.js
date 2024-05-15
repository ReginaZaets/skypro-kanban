import { createGlobalStyle } from "styled-components";


export   const lightTheme = {
  body: '#FFF',
  text: '#363537',
  background: '#eaeef6',
  
  // Другие стили светлой темы
};

export const darkTheme = {
  body: '#20202c',
  text: '#FAFAFA',
  background: '#151419',

  // Другие стили темной темы
};

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  background:  ${(props) => props.theme.background};
  
    transition: all 0.25s linear; // Плавный переход цвета при смене темы
}
.wrapper {
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.body};
}
`;

