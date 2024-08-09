"use client"
import React, { useEffect} from "react"

const InitTheme: React.FC = () => {

  useEffect(() => {
    // Check previously saved theme
    const savedTheme: string | null = localStorage.getItem("rlappyTheme")
    console.log(`savedTheme: ${savedTheme}`)
    console.log(`LOCALSTORAGE ${localStorage.getItem("rlappyTheme")}`)
    // Sync Daisy theme with tailwind theme
    if (savedTheme) {
      if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark")
      } else {
        document.documentElement.setAttribute("data-theme", "light")
      } 
    }

    // Use color scheme
    else {
        const preferDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        if (preferDarkScheme) document.documentElement.classList.add("dark")
    }
    
  })
  return (
    <>
    {/* Empty */}
    </>
  )
}

export default InitTheme