import React from "react";
import Layout  from "../../../components/layout";
import ProjectLayout from "../projectLayout";
import Image from "../../../assets/imgs/heypexGlobal-page.png"

const Project = {
  title: "Heypex Global Website",
  desc: "A website built for Heypex Global using Gatsby JS and content sourced from Netlify CMS.",
  stack: ["react", "gatsby", "styled components", "bulma", "graphql", "netlify cms"],
  img: Image,
  live: true,
  liveLink: "https://heypexglobal.com",
  goals: <p>At Heypex Global we wanted to build a new site that housed more pages, content, and functionality than our current single page site at the time. The site also needed to convey more of what the business had to offer and visually appeal to more clients.</p>,
  stackExplained: <p>Since working on the D6 Inc website in Gatsby JS and finding that to be a great framework for static generated sites, I decided to build upon that with this project. I also decided to continue to use Netlify CMS for the content since it was free and easy to implement.</p>,
  challenges: <p>After already learning the initial build out of a GatsbyJS site with Netlify CMS/ GraphQL, I didn’t run into much issue with this project. It was more of the same, but at a larger scale with more content sources and pages. Some of the challenges that did arise came from the file structure, organization, and setup of some custom data objects in Netlify CMS.</p>,
  takeaways: <p>The takeaway I received from this project was that I want to continue using Gatsby JS for static sites, but I now want to try other GraphQL content providers other than Netlify CMS. For larger projects in the future, it makes more sense to have a more robust CMS that can handle more than what Netlify CMS is built for.</p>
};

const HeypexGlobal = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default HeypexGlobal;
