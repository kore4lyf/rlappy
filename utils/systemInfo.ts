// Theme
export const getThemeFromLocalStorage = (): "light" | "dark" => {
  const currentTheme: string | null  = localStorage.getItem("rlappyTheme")
  const preferDarkScheme: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches

  if(currentTheme === null) return preferDarkScheme ? "dark" : "light"
  
  return currentTheme as "light" | "dark"
}

// Color Scheme
export const reducedMotion = (): boolean => window.matchMedia("prefers-reduced-motion: reduce").matches