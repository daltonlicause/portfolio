import React from "react";
import { ProjectLayoutContainer } from "./styled";
import BackHome from "../../../components/backHome";
import { Link } from "react-router-dom";

const otherProjects = (title) => {
  const projects = {
    "D6 Catalog": "/d6-catalog",
    "D6 Inc. Website": "/d6-website",
    "Heypex Global Website": "/heypex-global",
    "2nd Street Outpost": "/2nd-street-outpost"
  };

 const otherProjectKeys = Object.keys(projects).filter((key) => ( key !== title ));

 return (
  otherProjectKeys.map((key, i) => (
    <span key={i} id={i}>
      <Link  to={projects[key]}>{key}</Link>
      {otherProjectKeys.length > ++i ? ", " : " "}
    </span>
  ))
 )
} 

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
      <div className={`banner-window ${project.mobile && "mobile" }`}>
          <div className="window-header">
            <div className="dots">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <img className="window-img" src={project.img} />
      </div>
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
    <section className="other-projects">
      <p className="attr">
        <span className="attr-name">other projects: </span>
        <span className="attr-value">
          { otherProjects(project.title) }
        </span>
      </p>
    </section>
  </ProjectLayoutContainer>
)

export default ProjectLayout;