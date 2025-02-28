import * as React from "react";
import { IconType } from "react-icons";
import { 
  FaMoon,
  FaSun,
  FaExclamationTriangle,
  FaLinkedin,
  FaGithub,
  FaDribbble,
  FaDiscord,
  FaArrowUp
} from "react-icons/fa"

export const Icons = {
  FaMoon: FaMoon,
  FaSun: FaSun,
  FaExclamationTriangle: FaExclamationTriangle,
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  FaDribbble: FaDribbble,
  FaDiscord: FaDiscord,
  FaArrowUp: FaArrowUp
}

const Icon = (props: {iconType?: IconType}) => {
  const IconComponent = props.iconType ?? Icons["FaExclamationTriangle"];

  return <IconComponent />
};

export default Icon