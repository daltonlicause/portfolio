import React from "react";
import { SocialContainer } from "./styled";
import Icon from "../icon";

const Links = [
  {
    name: "LinkedIn",
    icon: "FaLinkedin",
    href: "https://www.linkedin.com/in/dalton-licause-b4874b97/"
  },
  {
    name: "GitHub",
    icon: "FaGithub",
    href: "https://github.com/daltonlicause"
  },
  {
    name: "Dribbble",
    icon: "FaDribbble",
    href: "https://dribbble.com/Licause"
  },
  {
    name: "Discord",
    icon: "FaDiscord",
    href: "https://discord.com/users/171386645684289536"
  }
];

const Social = () => {
  return (
    <SocialContainer>
      {
        Links.map((link) => (
          <a className="no-hover" href={link.href} key={link.name} aria-label={link.name}>
            <Icon name={link.icon}/>
          </a>
        ))
      }
    </SocialContainer>
  ) 
}

export default Social;