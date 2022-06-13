import React from "react";
import Layout  from "../../../components/layout";
import ProjectLayout from "../projectLayout";
import Image from "../../../assets/imgs/d6Website-page.png"

const Project = {
  title: "D6 Inc. Website",
  desc: "A website built for D6 Inc. using Gatsby JS and content sourced from Netlify CMS.",
  stack: ["react", "gatsby", "styled components", "graphql", "netlify cms"],
  img: Image,
  live: true,
  liveLink: "https://d6inc.com",
  goals: <p>D6 Inc. wanted to build a new company website. Their existing site was built on an outdated version of Wordpress and they weren't happy with the load time, SEO, and their current web services provider. The site needed to be fast, responsive, and have the ability to be easily updated.</p>,
  stackExplained: <p>Since I had been using React for a while and heard good things about Gatsby/ JAM stack sites, I decided this would be a good fit for a React/ GatsbyJS Static Site. I also found it to be a good opportunity to finally learn and try out GatsbyJS. Out of the gate the static site fixed the most load time and SEO issues their Wordpress website had struggled with. The addition of Netlify CMS and GraphQL gave me the able to create pages that their internal team could easily add and update. Styling was custom and handled with my person favorite, Styled Components.</p>,
  challenges: <p>At the time I had yet to learn GatsbyJS and with that GraphQL. So initially there was some time I had to spend reading documentation and finding solutions to the problems I ran into. All in all though I had very few challenges and those that I ran into we’re relatively easy to find a solution for. Thanks to the already large community, GatsbyJS has tons of forms and threads realted to most issues.</p>,
  takeaways: <p>My takeaway from this project was my new found appreciation for GatsbyJS. After years of working with Wordpress it was a breath of fresh air and I don’t think I could ever go back. Having the ability to quickly build static sites with React and Gatsby is immensely more enjoyable and by far less of a headache.</p>
};

const D6Website = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default D6Website;
