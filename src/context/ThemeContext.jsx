"use client"

import { createContext, useState} from "react";

export const ThemeContext = createContext()

const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
    return "light";
}

export const ThemeContextProvider = ({children}) => {
    const [theme,setTheme] = useState(()=>{
        return getFromLocalStorage()
    });
    
    const toggle = ()=>{
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", newTheme);
        }
    };

    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    );
};
