import { useEffect, useState } from "react"

interface IToggleDarkMode {
  darkMode: boolean
  toggleDarkMode: () => void
}

const useToggleDarkMode = (): IToggleDarkMode => {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return { darkMode, toggleDarkMode }
}

export default useToggleDarkMode
