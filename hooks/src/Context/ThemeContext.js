// 1. tạo ra context
// 2. cung cấp context
import { useState, createContext } from "react";

export const ThemeContext = createContext()

function ThemeProvider({children }) {
    const [theme, setTheme] = useState('light')
    const handleChangeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    const value = {
        theme,
        handleChangeTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;