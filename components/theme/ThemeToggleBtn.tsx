"use client"
import { getThemeFromLocalStorage } from "@/utils/themeStore"
import React, { useEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa6"


const toggleTheme = (): string => {
  const html: HTMLElement = document.documentElement
  const currentTheme: string | null = html.getAttribute("data-theme")
  const newTheme: string = currentTheme === "light" ? "dark" : "light"

  html.setAttribute("data-theme", newTheme)
  localStorage.setItem("rlappyTheme", newTheme)

  return newTheme

}

const ThemeSwitcherBtn: React.FC = () => {
  const [theme, setTheme] = useState<string>("")


  useEffect(() => {
    const currentTheme: string = getThemeFromLocalStorage()
    setTheme(currentTheme)
  })
  
  return (
    <button className="mbtn mbtn-ghost" onClick={() => setTheme(toggleTheme())}> 
      {theme === "dark" ? <FaSun /> : <FaMoon />} 
    </button>
  )
}

export default ThemeSwitcherBtn