import React, { createContext, useContext, useReducer } from 'react';
import { lightTheme, darkTheme } from './Theme';

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === lightTheme ? darkTheme : lightTheme;
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
