import React from "react";
import { ProjectLayoutContainer } from "./styled";
import BackHome from "../../../components/backHome";

const ProjectLayout = ({project}) => (
  <ProjectLayoutContainer>
    <BackHome />
    <section className="banner">
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
            project.live ? (project.liveLink && <a href={project.liveLink}>{project.liveLink}</a>) || "yes" : "no"
          }
        </span>
      </p>
      <img className="img" src={project.img} />
    </section>
    <section className="goals">
      <h2>Goals</h2>
      {project.goals}
    </section>
    <section className="stack">
      <h2>Stack Explained</h2>
      {project.stackExplained}
    </section>
    <section className="challenges">
      <h2>Challenges</h2>
      {project.challenges}
    </section>
    <section className="takeaways">
      <h2>Takeways</h2>
      {project.takeaways}
    </section>
  </ProjectLayoutContainer>
)

export default ProjectLayout;