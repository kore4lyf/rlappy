"use client"
import { getThemeFromLocalStorage } from "@/utils/themeStore"
import React, { useEffect, useState } from "react"
import { MdBrightness2, MdBrightness4, MdBrightness7 } from "react-icons/md"


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
    <button className="btn btn-ghost" onClick={() => setTheme(toggleTheme())}> 
      {theme === "dark" ? <MdBrightness7 className="w-4 h-4" /> : <MdBrightness2 className="w-4 h-4" />} 
    </button>
  )
}

export default ThemeSwitcherBtn