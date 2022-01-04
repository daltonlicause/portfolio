import React from "react";
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

const Icons = {
  FaMoon: FaMoon,
  FaSun: FaSun,
  FaExclamationTriangle: FaExclamationTriangle,
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  FaDribbble: FaDribbble,
  FaDiscord: FaDiscord,
  FaArrowUp: FaArrowUp
}

const Icon = ({name}) => {
  const IconComponent = Icons[name] ? Icons[name] : Icons["FaExclamationTriangle"];

  return <IconComponent />
};

export default Icon