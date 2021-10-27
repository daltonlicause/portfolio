import React from "react";
import { ProjectLayoutContainer } from "./styled";
import BackHome from "../backHome";

const ProjectLayout = ({project}) => (
  <ProjectLayoutContainer>
    <BackHome />
    <div className="banner">
      <h1>{project.title}</h1>
      <p>{project.desc}</p>
      <p>stack: <span className="stack">{ project.stack.map((item, i) => ++i === project.stack.length ? item : `${item}, `)}</span></p>
      <p>live: <span className={`live ${project.live}`}>{project.live ? project.liveLink || "yes - not available to the public" : "no" }</span></p>
      <img src={project.img} />
    </div>
  </ProjectLayoutContainer>
)

export default ProjectLayout;