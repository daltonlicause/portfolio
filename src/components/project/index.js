import React from "react";
import { ProjectContainer } from "./styled";
import { Link } from "react-router-dom";

const Project = ({project}) => (
  <ProjectContainer>
    <Link to={project.link}>{project.name}</Link>
  </ProjectContainer>
)

export default Project;