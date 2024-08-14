"use client"
import { getThemeFromLocalStorage } from "@/utils/themeStore"
import React, { useEffect} from "react"

const InitTheme: React.FC = () => {

  useEffect(() => {
    // Check previously saved theme
    const savedTheme: string = getThemeFromLocalStorage()

    // Sync Daisy theme with tailwind theme
    if (savedTheme === "dark" ) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.setAttribute("data-theme", "light")
    }
    
  })
  return (
    <>
    {/* Empty */}
    </>
  )
}

export default InitTheme