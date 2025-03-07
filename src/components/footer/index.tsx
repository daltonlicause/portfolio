import * as React from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from './styled'
import Social from "components/social";
import Resume from "assets/resume.pdf";

const Footer = () => ( 
  <FooterContainer>
    <p>Built by <span>Dalton Licause</span> with React.js & Styled Components. You should checkout <a className="no-hover plain" href="https://github.com/daltonlicause/portfolio">the sourcecode</a>.</p>
    <div className="navigation">
      <Link to="/" className="home no-decoration no-hover plain">Home</Link>
      <span>&nbsp;|&nbsp;</span>
      <a className="no-decoration no-hover plain" href={Resume} target="_blank">Resume</a>
      <span>&nbsp;|&nbsp;</span>
      <Social />
    </div>
  </FooterContainer>
);

export default Footer;