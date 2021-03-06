import React from "react";
import { ToggleButton } from './styled'
import Icon from '../icon'

const ThemeToggle = ({ theme, toggleTheme}) => {
  const isLight = theme === "light";

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle Site Theme">
      { isLight ? <Icon name="FaMoon"/> : <Icon name="FaSun"/> }
    </ToggleButton>
  )
}

export default ThemeToggle;