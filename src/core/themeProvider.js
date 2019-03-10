import React, { useContext } from 'react';
import THEMES from './themes.json';

const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ themes: THEMES, theme: THEMES[0] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function withTheme(Component) {
  return props => {
    const { themes, theme } = useContext(ThemeContext);
    return <Component {...props} themes={themes} theme={theme} />;
  };
}
