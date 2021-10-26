import React from "react";
import { FooterContainer } from './styled'
import Social from "../social";

const Footer = () => ( 
  <FooterContainer>
    <h4>Built by <span>Dalton Licause</span> with React.JS & Styled Components</h4>
    <div className="social"><Social /></div>
  </FooterContainer>
);

export default Footer;