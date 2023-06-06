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
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}