import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from './styled'
import Social from "../social";
import Resume from "../../assets/resume.pdf";

const Footer = () => ( 
  <FooterContainer>
    <h4>Built by <span>Dalton Licause</span> with React.JS & Styled Components. You should checkout <a href="https://github.com/daltonlicause/portfolio">the sourcecode</a>.</h4>
    <div className="navigation">
      <Link to="/" className="home no-decoration no-hover plain"><h4>Home</h4></Link>
      <span>&nbsp;|&nbsp;</span>
      <a className="no-decoration no-hover plain" href={Resume} target="_blank">Resume</a>
      <span>&nbsp;|&nbsp;</span>
      <Social />
    </div>
  </FooterContainer>
);

export default Footer;