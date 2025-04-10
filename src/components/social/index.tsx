import * as React from "react";
import { SocialContainer } from "./styled";
import Icon, { Icons } from "components/icon";

const Links = [
  {
    name: "LinkedIn",
    icon: Icons.FaLinkedin,
    href: "https://linkedin.com/in/daltonlicause"
  },
  {
    name: "GitHub",
    icon: Icons.FaGithub,
    href: "https://github.com/daltonlicause"
  },
  {
    name: "Dribbble",
    icon: Icons.FaDribbble,
    href: "https://dribbble.com/Licause"
  }
];

const Social = () => {
  return (
    <SocialContainer>
      {
        Links.map((link) => (
          <a className="no-hover" href={link.href} key={link.name} aria-label={link.name}>
            <Icon iconType={link.icon}/>
          </a>
        ))
      }
    </SocialContainer>
  ) 
}

export default Social;