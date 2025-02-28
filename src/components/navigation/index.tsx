import * as React from "react";
import { Link } from "react-router-dom";
import { NavigationContainer } from "./styled";
import ThemeToggle from "components/themeToggle";
import Social from "components/social";
import Resume from "assets/resume.pdf";

const Navigation = (props: {theme: string, toggleTheme: () => void}) => (
  <NavigationContainer>
    <div className="links-container">
      <Link to="/" className="home no-decoration no-hover plain"><h4>Dalton Licause</h4></Link>
      <span>&nbsp;|&nbsp;</span>
      <a className="no-decoration no-hover plain" href={Resume} target="_blank">Resume</a>
      <span>&nbsp;|&nbsp;</span>
      <Social />
    </div>
    <ThemeToggle theme={props.theme} toggleTheme={props.toggleTheme}/>
  </NavigationContainer>
)

export default Navigation;