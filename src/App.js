// ThemeContext.js
import React, { createContext, useContext } from 'react';

// Create a Context
const ThemeContext = createContext('light');

const ThemeProvider = ({ children }) => {
  const theme = 'dark';
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

const ThemeConsumerComponent = () => {
  const theme = useContext(ThemeContext);
  return <div>Current Theme: {theme}</div>;
};

const App = () => (
  <ThemeProvider>
    <ThemeConsumerComponent />
  </ThemeProvider>
);

export default App;
