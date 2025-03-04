import * as React from "react";
import { Link } from "react-router-dom";
import { ProjectPageContainer } from "./styled";
import BackHome from "components/backHome";
import Emoji, { Emojis } from "components/emoji";

const otherProjects = (title: string) => {
  const projects: {[key: string]: string} = {
    "CMS Dashboard": "/cms-dashboard",
    "App Notifier": "/app-notifier",
    "VGAN Chocolates": "/vgan-chocolates",
    "D6 Inc. Catalog": "/d6-catalog",
    "D6 Inc. Website": "/d6-website",
    "Heypex Global Website": "/heypex-global",
    "2nd Street Outpost": "/2nd-street-outpost"
  };

  const otherProjectKeys = Object.keys(projects).filter((key) => ( key !== title ));

  return (
    <menu className="other-projects"> 
      {
        otherProjectKeys.map((key) => {
          return (
            <li className="sub-item" key={key}>
              <Link className="sub-item-headline" to={projects[key]}>{key}</Link>
            </li>
          )
        })
      }
    </menu>
  )
} 

const ProjectLayout = ({ project }: {project: {[key: string]: any;}}) => (
  <ProjectPageContainer>
    
    <article className="about">
      <h2><Emoji name={Emojis.leftArrow}/><BackHome /></h2>
      <header className="sub-section">
        <h1 className="section-headline">{project.title}</h1>
      </header>
      {
        project.liveLink && project.live &&
        <section className="sub-section">
          <h3 className={`section-headline live ${project.live}`}>
            <a href={project.liveLink}>{project.liveLink}</a>
          </h3>
        </section>
      }
      
      <section className="sub-section">
        <dl className="section-headline stack">
          { project.stack.map((item: string, i: number) => <dt key={item}>{++i === project.stack.length ? item : `${item}, `}</dt>) }
        </dl>
      </section>
      
      <section className="sub-section">
        <p className="section-headline">{project.desc}</p>
      </section>

      {project.img && (
        <section className="sub-section">
          <span className="section-headline">
            <div className={`img-window ${project.mobile ? "mobile" : "" }`}>
                <div className="window-header">
                  <div className="dots">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <img className="window-img" src={project.img} alt={`${project.title} Screenshot`}/>
            </div>
          </span>
        </section>
      )}

      <section className="sub-section">
        <h3 className="section-headline bold">Goals</h3>
        <span className="section-value">
          {project.goals}
        </span>
      </section>
      <section className="sub-section">
        <h3 className="section-headline bold">Stack Explained</h3>
        <span className="section-value">
          {project.stackExplained}
        </span>
      </section>
      <section className="sub-section">
        <h3 className="section-headline bold">Challenges</h3>
        <span className="section-value">
          {project.challenges}
        </span>
      </section>
      <section className="sub-section">
        <h3 className="section-headline bold">Takeaways</h3>
        <span className="section-value">
          {project.takeaways}
        </span>
      </section>
      <section className="sub-section">
        <h3 className="section-headline"><Emoji name={Emojis.rightArrow}/> Other Projects</h3>
        { otherProjects(project.title) }
      </section>
    </article>
  </ProjectPageContainer>
)

export default ProjectLayout;