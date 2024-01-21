import { useEffect, useRef } from "react"
import { useLocalStorage } from "../../utils/useLocalStorage"

import sun from "./sun.svg"
import moon from "./moon.svg"

import "./style.css"
import detectDarkMode from "../../utils/detectDarkMode"

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("light", detectDarkMode())
  const btnRef = useRef(null)

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark")
      btnRef.current.classList.add("dark-mode-btn--active")
    } else {
      document.body.classList.remove("dark")
      btnRef.current.classList.remove("dark-mode-btn--active")
    }
  }, [darkMode])

  useEffect(() => {
    const handleColorSchemeChange = (event) => {
      const newColorScheme = event.matches ? "dark" : "light"
      setDarkMode(newColorScheme)
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleColorSchemeChange)

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleColorSchemeChange)
    }
  }, [setDarkMode])

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light"
    })
  }

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode} tabIndex="0">
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon"></img>
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"></img>
    </button>
  )
}

export default BtnDarkMode
