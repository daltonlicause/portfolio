import React from "react";
import { NavigationContainer } from "./styled";
import ThemeToggle from "../themeToggle";
import Social from "../social";
import { Link } from "react-router-dom";

const Navigation = ({theme, toggleTheme}) => (
  <NavigationContainer>
    <Link to="/" className="home no-hover"><h4>Dalton Licause</h4></Link>
    <Social />
    <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
  </NavigationContainer>
)

export default Navigation;