import React from "react";
import { FooterContainer } from './styled'
import Social from "../social";

const Footer = () => ( 
  <FooterContainer>
    <h4>Built by <span>Dalton Licause</span> with React.JS & Styled Components. You should checkout <a href="https://github.com/daltonlicause/portfolio">the sourcecode</a>.</h4>
    <div className="social"><Social /></div>
  </FooterContainer>
);

export default Footer;