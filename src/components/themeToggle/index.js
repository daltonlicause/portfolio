import React from "react";
import { ToggleButton } from './styled'

const ThemeToggle = ({ theme, toggleTheme}) => {
  const isLight = theme === "light";

  return (
    <ToggleButton onClick={toggleTheme}>
      Toggle The Lights
    </ToggleButton>
  )
}

export default ThemeToggle;