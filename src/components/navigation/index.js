import React from "react";
import { NavigationContainer } from "./styled";
import ThemeToggle from "../themeToggle";
import Social from "../social";

const Navigation = ({theme, toggleTheme}) => (
  <NavigationContainer>
    <h4>Dalton Licause</h4>
    <Social />
    <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
  </NavigationContainer>
)

export default Navigation;