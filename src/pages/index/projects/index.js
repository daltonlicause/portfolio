import React from "react";
import { Link } from "react-router-dom";
import Emoji from "../../../components/emoji";

const ProjectsArray = [
  {
    title: "D6 Inc. Catalog",
    link: "/d6-catalog",
    desc: "Mobile first catalog built for D6 Inc. using Ionic Framework for the Frontend and a Node rest API connected to MongoDB."
  },
  {
    title: "D6 Inc. Website",
    link: "/d6-website",
    desc: "Company website built for D6 Inc. using Gatsby JS with content sourced from Netlify CMS."
  },
  {
    title: "Heypex Global Website",
    link: "/heypex-global",
    desc: "Company website built for Heypex Global using Gatsby JS with content sourced from Netlify CMS."
  },
  {
    title: "2nd Street Outpost Website",
    link: "/2nd-street-outpost",
    desc: "Ecommerce business website built for 2nd Street Outpost using Shopify."
  },

]

const Projects = () => {
  return (
    <section className="projects">
      <h2><Emoji name="manTechnologist"/> Latest Projects</h2>
      { 
        ProjectsArray.map((item, i) => 
          <div className="sub-section" key={i}>
            <Link className="section-headline" to={item.link}>{item.title}</Link> 
            <p>{item.desc}</p>
          </div>
        )
      }
    </section>
  )
}

export default Projects;
