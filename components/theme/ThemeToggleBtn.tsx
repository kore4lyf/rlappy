"use client"
import { getThemeFromLocalStorage } from "@/utils/systemInfo"
import React, { useEffect, useState } from "react"
import { MdBrightness2, MdSunny } from "react-icons/md"


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
    const currentTheme: "light" | "dark" = getThemeFromLocalStorage()
    setTheme(currentTheme)
  },[])
  
  return (
    <button className="btn btn-ghost" onClick={() => setTheme(toggleTheme())}> 
      {theme === "dark" ? <MdSunny className="w-4 h-4" /> : <MdBrightness2 className="w-4 h-4" />} 
    </button>
  )
}

export default ThemeSwitcherBtn