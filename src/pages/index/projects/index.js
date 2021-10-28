import React from "react";
import ProjectItem from "./projectItem";

const ProjectsArray = [
  {
    name: "D6 Catalog",
    link: "/d6-catalog"
  },
  {
    name: "D6 Website",
    link: "/d6-website"
  },
  {
    name: "Heypex Global",
    link: "/heypex-global"
  },
  {
    name: "2nd Street Outpost",
    link: "/2nd-street-outpost"
  },

]

const Projects = () => {
  return (
    <section className="projects">
      <h2>&#128104;&#8205;&#128187; Latest Projects</h2>
      { ProjectsArray.map((project) => <ProjectItem key={project.name} project={project}/>) }
    </section>
  )
}

export default Projects;
