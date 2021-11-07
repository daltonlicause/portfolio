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
  otherProjectKeys.map((key, i) => (
    <span key={i} id={i}>
      <Link  to={projects[key]}>{key}</Link>
      {otherProjectKeys.length > ++i ? ", " : " "}
    </span>
  ))
 )
} 

const ProjectLayout = ({project}) => (
  <ProjectPageContainer>
    
    <section className="about">
      <h2><Emoji name="leftArrow"/><BackHome /></h2>
      <div className="sub-section">
        <h3 className="section-headline"><Emoji name="greenCircle"/>{project.title}</h3>
        <div className="sub-item">
          <p className="sub-item-headline">{project.desc}</p>
        </div>
        <div className="sub-item">
          <h4 className="sub-item-headline">stack</h4>
          <span className="sub-item-value stack">
            { 
              project.stack.map((item, i) => ++i === project.stack.length ? item : `${item}, `)
            }
          </span>
        </div>
        <div className="sub-item">
          <h4 className="sub-item-headline">live</h4>
          <span className={`sub-item-value live ${project.live}`}>
            {
              project.live ? (project.liveLink && <a href={project.liveLink}>{project.liveLink}</a>) || "yes" : "no"
            }
          </span>
        </div>
        <div className="sub-item">
          <span className="sub-item-headline">
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
        <div className="sub-item">
          <h4 className="sub-item-headline">goals</h4>
          <span className="sub-item-value">
            {project.goals}
          </span>
        </div>
        <div className="sub-item">
          <h4 className="sub-item-headline">stack explained</h4>
          <span className="sub-item-value">
            {project.stackExplained}
          </span>
        </div>
        <div className="sub-item">
          <h4 className="sub-item-headline">challenges</h4>
          <span className="sub-item-value">
            {project.challenges}
          </span>
        </div>
        <div className="sub-item">
          <h4 className="sub-item-headline">takeways</h4>
          <span className="sub-item-value">
            {project.takeaways}
          </span>
        </div>
        <div className="sub-item">
          <h4 className="sub-item-headline">other projects</h4>
          <span className="sub-item-value">
            { otherProjects(project.title) }
          </span>
        </div>
      </div>
    </section>
  </ProjectPageContainer>
)

export default ProjectLayout;