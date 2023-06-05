"use client"
import { ThemeContext } from "@/Context/ThemeContext"
import { useContext } from "react"

export default function DarkModeToggle() {
    const { toggle, mode } = useContext(ThemeContext)
    // const mode = "dark"
    return (
        <div className="w-11 h-6 border-2 border-solid border-green-600 rounded-3xl flex items-center justify-between p-1 relative cursor-pointer" onClick={toggle}>
            <span className="text-sm text-yellow-500"><i className="fa-solid fa-moon fa-flip-horizontal"></i></span>
            <span className="text-sm text-yellow-500"><i className="fa-solid fa-sun"></i></span>
            <span className="bg-green-400 w-4 h-4 rounded-xl absolute" style={mode === "light" ? { left: "2px" } : { right: "2px" }} />
        </div>
    )
}