"use client"
import { getThemeFromLocalStorage } from "@/utils/systemInfo"
import React, { useLayoutEffect } from "react"

const InitTheme: React.FC = () => {

  useLayoutEffect(() => {
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