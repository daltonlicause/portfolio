import React from "react";
import { ProjectLayoutContainer } from "./styled";
import BackHome from "../../../components/backHome";

const ProjectLayout = ({project}) => (
  <ProjectLayoutContainer>
    <BackHome />
    <div className="banner">
      <h1 className="title">{project.title}</h1>
      <p className="desc">{project.desc}</p>
      <p className="attr">
        <span className="attr-name">stack:</span>
        <span className="attr-value stack">
          { 
            project.stack.map((item, i) => ++i === project.stack.length ? item : `${item}, `)
          }
        </span>
      </p>
      <p className="attr">
        <span className="attr-name">live:</span>
        <span className={`attr-value live ${project.live}`}>
          {
            project.live ? (project.liveLink && <a href={project.liveLink}>{project.liveLink}</a>) || "yes - not available to the public" : "no"
          }
        </span>
      </p>
      <img className="img" src={project.img} />
    </div>
  </ProjectLayoutContainer>
)

export default ProjectLayout;