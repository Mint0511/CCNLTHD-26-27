"use client";

import { ThemeContext } from '@/context/ThemeContext';
import { useContext, useEffect, useState } from "react";

const ThemeProvider = ({children}) => {
  const {theme} = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  
  if (!mounted) {
    return null;
  }
  
  return <>{children}</>;
};

export default ThemeProvider;