import * as React from "react";
import { ToggleButton } from './styled'
import Icon from 'components/icon'
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "providers/appProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme} = useContext();
  return (
    <ToggleButton onClick={() => toggleTheme()} aria-label="Toggle Site Theme">
      { theme === "light" ? <Icon iconType={FaMoon}/> : <Icon iconType={FaSun}/> }
    </ToggleButton>
  )
}

export default ThemeToggle;