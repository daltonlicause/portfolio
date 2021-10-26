import React from "react";
import { NavigationContainer } from "./styled";
import ThemeToggle from "../themeToggle";

const Navigation = ({theme, toggleTheme}) => (
  <NavigationContainer>
    Dalton Licause
    <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
  </NavigationContainer>
)

export default Navigation;