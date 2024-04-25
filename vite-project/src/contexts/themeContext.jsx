import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider  ({ children }) {
  const [theme, setTheme] = useState('light');
  const [logo, setLogo] = useState('image/logo.png');


  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setLogo('image/logo_dark.png');

    } else {
      setTheme('light');
      setLogo('image/logo.png');

    }
  };

  return (
    <ThemeContext.Provider value={{logo, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}