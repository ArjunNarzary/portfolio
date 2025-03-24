import useToggleDarkMode from "./hooks/useToggleDarkMode"

function App() {
  const { darkMode, toggleDarkMode } = useToggleDarkMode()

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 relative transition-colors duration-300">
      <button
        className="fixed top-3 right-3 text-black dark:text-white"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light" : "Dark"}
      </button>
    </div>
  )
}

export default App
