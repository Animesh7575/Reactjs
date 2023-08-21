import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, dispatch } = useTheme();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggle;
