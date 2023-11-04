// DarkModeContext.js
import React, { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();
const CounterContext = createContext();

export function useDarkMode() {
  return useContext(DarkModeContext);
}
export function Counter() {
  return useContext(CounterContext);
}

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [count, setCount] = useState(0);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  const changeCount = () => {
    setCount(count + 1);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <CounterContext.Provider value={{count , changeCount}}>
      {children}
      </CounterContext.Provider>
    </DarkModeContext.Provider>
  );
}


