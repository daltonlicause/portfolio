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
    <menu> 
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

const ProjectLayout = (props: {project: {[key: string]: any;}}) => (
  <ProjectPageContainer>
    
    <article className="about">
      <h2><Emoji name={Emojis.leftArrow}/><BackHome /></h2>
      <header className="sub-section">
        <h1 className="section-headline">{props.project.title}</h1>
      </header>
      {
        props.project.liveLink && props.project.live &&
        <section className="sub-section">
          <h3 className={`section-headline live ${props.project.live}`}>
            <a href={props.project.liveLink}>{props.project.liveLink}</a>
          </h3>
        </section>
      }
      
      <section className="sub-section">
        <dl className="section-headline stack">
          { props.project.stack.map((item: string, i: number) => <dt key={item}>{++i === props.project.stack.length ? item : `${item}, `}</dt>) }
        </dl>
      </section>
      
      <section className="sub-section">
        <p className="section-headline">{props.project.desc}</p>
      </section>

      {props.project.img && (
        <section className="sub-section">
          <span className="section-headline">
            <div className={`img-window ${props.project.mobile ? "mobile" : "" }`}>
                <div className="window-header">
                  <div className="dots">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <img className="window-img" src={props.project.img} alt={`${props.project.title} Screenshot`}/>
            </div>
          </span>
        </section>
      )}

      <section className="sub-section">
        <h3 className="section-headline bold">Goals</h3>
        <span className="section-value">
          {props.project.goals}
        </span>
      </section>
      <section className="sub-section">
        <h3 className="section-headline bold">Stack Explained</h3>
        <span className="section-value">
          {props.project.stackExplained}
        </span>
      </section>
      <section className="sub-section">
        <h3 className="section-headline bold">Challenges</h3>
        <span className="section-value">
          {props.project.challenges}
        </span>
      </section>
      <section className="sub-section">
        <h3 className="section-headline bold">Takeaways</h3>
        <span className="section-value">
          {props.project.takeaways}
        </span>
      </section>
      <section className="sub-section">
        <h3 className="section-headline"><Emoji name={Emojis.rightArrow}/> Other Projects</h3>
        { otherProjects(props.project.title) }
      </section>
    </article>
  </ProjectPageContainer>
)

export default ProjectLayout;