export const getThemeFromLocalStorage = (): string => {
  const currentTheme: string | null  = localStorage.getItem("rlappyTheme")
  const preferDarkScheme: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches

  if(currentTheme === null) return preferDarkScheme ? "dark" : "light"
  
  return currentTheme
}