import * as React from "react";
import { ToggleButton } from './styled'
import Icon from 'components/icon'
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = (props: { theme: string, toggleTheme: () => void}) => {
  const isLight = props.theme === "light";

  return (
    <ToggleButton onClick={props.toggleTheme} aria-label="Toggle Site Theme">
      { isLight ? <Icon iconType={FaMoon}/> : <Icon iconType={FaSun}/> }
    </ToggleButton>
  )
}

export default ThemeToggle;