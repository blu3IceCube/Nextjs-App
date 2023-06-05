"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
    const [mode, setMode] = useState("dark")

    function toggle() {
        setMode((prevState) => (prevState === "dark" ? "light" : "dark"))
    }

    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            {console.log(mode)}
            <div className={`${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}