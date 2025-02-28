import * as React from "react";
import Layout  from "components/layout";
import ProjectLayout from "../projectLayout";
import Image from "assets/imgs/heypexGlobal-page.png"

const Project = {
  title: "Heypex Global Website",
  desc: "Company website developed for Heypex Global using Gatsby.js, with content managed through Netlify CMS.",
  stack: ["javascript", "react", "gatsby", "styled components", "sass", "bulma", "html", "graphql", "netlify cms"],
  img: Image,
  live: true,
  liveLink: "https://heypexglobal.com",
  goals: <p>At Heypex Global, we aimed to create a new site that could accommodate more pages, content, and functionality than our existing single-page site. The new site also needed to better showcase our services and visually appeal to a broader range of clients.</p>,
  stackExplained: <p>After working on the D6 Inc. website with GatsbyJS and discovering how well it works for static-generated sites, I decided to build on that experience for this project. I also chose to continue using Netlify CMS for content management, as it was free, easy to implement, and a great fit for our needs.</p>,
  challenges: <p>Having already learned the process of building a GatsbyJS site with Netlify CMS and GraphQL, I encountered fewer challenges with this project. It was similar to the previous one, but on a larger scale, with more content sources and pages. The main challenges I faced were related to file structure, organization, and the setup of custom data objects in Netlify CMS.</p>,
  takeaways: <p>My takeaway from this project is that I’m eager to continue using GatsbyJS for static sites, but I also want to explore other GraphQL content providers beyond Netlify CMS. For larger projects in the future, it makes more sense to use a more robust CMS that can handle the complexity and scale that Netlify CMS may not be suited for.</p>
};

const HeypexGlobal = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default HeypexGlobal;
