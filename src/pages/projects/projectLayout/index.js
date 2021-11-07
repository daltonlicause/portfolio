import React from "react";
import { Link } from "react-router-dom";
import { ProjectPageContainer } from "./styled";
import BackHome from "../../../components/backHome";
import Emoji from "../../../components/emoji";

const otherProjects = (title) => {
  const projects = {
    "D6 Catalog": "/d6-catalog",
    "D6 Inc. Website": "/d6-website",
    "Heypex Global Website": "/heypex-global",
    "2nd Street Outpost": "/2nd-street-outpost"
  };

  const otherProjectKeys = Object.keys(projects).filter((key) => ( key !== title ));

  return (
    otherProjectKeys.map((key, i) => {
      return (
        <div className="sub-item">
          <div className="sub-item-headline" key={i}>
            <Link  to={projects[key]}>{key}</Link>
          </div>
        </div>
      )
    })
  )
} 

const ProjectLayout = ({project}) => (
  <ProjectPageContainer>
    
    <section className="about">
      <h2><Emoji name="leftArrow"/><BackHome /></h2>
      <div className="sub-section">
        <h1 className="section-headline">{project.title}</h1>
      </div>
      {
        project.liveLink && project.live &&
        <div className="sub-section">
          <h3 className={`section-headline live ${project.live}`}>
            <a href={project.liveLink}>{project.liveLink}</a>
          </h3>
        </div>
      }
      
      <div className="sub-section">
        <span className="section-headline stack">
          { project.stack.map((item, i) => ++i === project.stack.length ? item : `${item}, `) }
        </span>
      </div>
      
      <div className="sub-section">
        <p className="section-headline">{project.desc}</p>
      </div>
      <div className="sub-section">
        <span className="section-headline">
          <div className={`img-window ${project.mobile ? "mobile" : "" }`}>
              <div className="window-header">
                <div className="dots">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <img className="window-img" src={project.img} />
          </div>
        </span>
      </div>
      <div className="sub-section">
        <h3 className="section-headline">Goals</h3>
        <span className="section-value">
          {project.goals}
        </span>
      </div>
      <div className="sub-section">
        <h3 className="section-headline">Stack Explained</h3>
        <span className="section-value">
          {project.stackExplained}
        </span>
      </div>
      <div className="sub-section">
        <h3 className="section-headline">Challenges</h3>
        <span className="section-value">
          {project.challenges}
        </span>
      </div>
      <div className="sub-section">
        <h3 className="section-headline">Takeaways</h3>
        <span className="section-value">
          {project.takeaways}
        </span>
      </div>
      <div className="sub-section">
        <h3 className="section-headline"><Emoji name="rightArrow"/> Other Projects</h3>
        { otherProjects(project.title) }
      </div>
    </section>
  </ProjectPageContainer>
)

export default ProjectLayout;