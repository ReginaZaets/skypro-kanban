
import { useContext } from "react";
import "./App.css";
import AppRoutes from "./Routes";

import { GlobalStyle, darkTheme, lightTheme } from "./styles/GlobalStyle";
import { ThemeContext } from "./contexts/themeContext";
import { ThemeProvider } from "styled-components";



function App() {
  const {theme} = useContext(ThemeContext)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyle />
    <AppRoutes />

    </ThemeProvider>
  );
}

export default App;
