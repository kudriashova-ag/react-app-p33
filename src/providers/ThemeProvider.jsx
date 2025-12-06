import React, { useEffect, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.body.className = 'theme-' + theme
     }, [theme])


    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;