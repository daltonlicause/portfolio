import React from "react";
import Emoji from "../emoji";
import { ContactContainer } from "./styled";

const Contact = () => {

  return (
    <ContactContainer className="contact">
      <h2><Emoji name="envelope"/> Contact Me</h2>
    </ContactContainer>
  )
}

export default Contact;
