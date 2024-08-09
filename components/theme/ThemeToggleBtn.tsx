"use client"
import { useState } from "react"
import { FaSun } from "react-icons/fa6"


const toggleTheme = () => {
  const html: HTMLElement = document.documentElement
  const currentTheme: string | null = html.getAttribute("data-theme")
  const newTheme: string = currentTheme === "light" ? "dark" : "light"
  html.setAttribute("data-theme", newTheme)
  localStorage.setItem("rlappyTheme", newTheme)
}

const ThemeSwitcherBtn = () => {
  
  return (
    <button className="btn btn-primary" onClick={toggleTheme}> <FaSun />  </button>
  )
}

export default ThemeSwitcherBtn