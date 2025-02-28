import * as React from "react";
import { Link } from "react-router-dom";
import Emoji, { Emojis } from "components/emoji";

const ProjectsArray = [
  {
    title: "App Notifier",
    link: "/app-notifier",
    desc: "In-App notification queue processor for  built with Node.js, TypeScript, and BullMQ."
  },
  {
    title: "CMS Dashboard",
    link: "/cms-dashboard",
    desc: "Internal dashboard and CMS developed for  using Next.js & Tailwind CSS."
  },
  {
    title: "VGAN Chocolates Website",
    link: "/vgan-chocolates",
    desc: "E-commerce storefront developed for VGAN Chocolates using Shopify."
  },
  {
    title: "D6 Inc. Catalog",
    link: "/d6-catalog",
    desc: "Mobile-first catalog developed for D6 Inc. using the Ionic Framework for the frontend, with a Node.js REST API connected to MongoDB."
  },
  {
    title: "Heypex Global Website",
    link: "/heypex-global",
    desc: "Company website developed for Heypex Global using Gatsby.js, with content managed through Netlify CMS."
  },
  {
    title: "D6 Inc. Website",
    link: "/d6-website",
    desc: "Company website developed for D6 Inc. using Gatsby.js, with content managed via Netlify CMS."
  },
  {
    title: "2nd Street Outpost Website",
    link: "/2nd-street-outpost",
    desc: "E-commerce website developed for 2nd Street Outpost using Shopify."
  },

]

const Projects = () => {
  return (
    <article className="projects">
      <h2 className="bold"><Emoji name={Emojis.manTechnologist}/> Latest Projects</h2>
      { 
        ProjectsArray.map((item, i) => 
          <section className="sub-section" key={i}>
            <header className="section-headline">
              <Link to={item.link}>{item.title}</Link> 
            </header>
            <p>{item.desc}</p>
          </section>
        )
      }
    </article>
  )
}

export default Projects;
