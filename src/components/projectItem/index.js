import React from "react";
import { ProjectItemContainer } from "./styled";
import { Link } from "react-router-dom";

const ProjectItem = ({project}) => (
  <ProjectItemContainer>
    <Link to={project.link}>{project.name}</Link>
  </ProjectItemContainer>
)

export default ProjectItem;