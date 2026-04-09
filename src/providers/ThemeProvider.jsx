"use client";

import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from "react";

const ThemeProvider = ({children}) => {
  const {theme} = useContext(ThemeContext);
  
  return (
    <div className={theme}>
      {children}
    </div>
  );
};

export default ThemeProvider;