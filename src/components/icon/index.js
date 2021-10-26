import React from "react";
import { 
  FaMoon,
  FaSun,
  FaExclamationTriangle,
  FaLinkedin,
  FaGithub,
  FaDribbble
} from "react-icons/fa"

const Icons = {
  FaMoon: FaMoon,
  FaSun: FaSun,
  FaExclamationTriangle: FaExclamationTriangle,
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  FaDribbble: FaDribbble
}

const Icon = ({name}) => {
  const IconComponent = Icons[name] ? Icons[name] : Icons["FaExclamationTriangle"];

  return <IconComponent />
};

export default Icon