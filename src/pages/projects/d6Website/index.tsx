import * as React from "react";
import Layout  from "components/layout";
import ProjectLayout from "../projectLayout";
import Image from "assets/imgs/d6Website-page.png"

const Project = {
  title: "D6 Inc. Website",
  desc: "Company website developed for D6 Inc. using Gatsby.js, with content managed via Netlify CMS.",
  stack: ["javascript", "react", "gatsby", "styled components", "sass", "html", "graphql", "netlify cms"],
  img: Image,
  live: true,
  liveLink: "https://d6inc.com",
  goals: <p>D6 Inc. wanted to create a new company website to replace their outdated WordPress site, which was underperforming in terms of load time, SEO, and overall user experience. They needed a fast, responsive site that could be easily updated.</p>,
  stackExplained: <p>Having worked with React for some time and hearing great things about Gatsby and JAMstack sites, I decided it would be a perfect fit for this project. It also provided a great opportunity to dive into GatsbyJS. From the start, converting the site to a static setup resolved most of the load time and SEO issues that plagued their old WordPress site. The addition of Netlify CMS and GraphQL gave me the able to create pages that their internal team could easily add and update. Styling was custom and handled with Styled Components.</p>,
  challenges: <p>At the time, I was new to both GatsbyJS and GraphQL, so I had to spend some time reading documentation and troubleshooting the challenges I encountered. However, overall, I faced very few issues, and those that did arise were relatively easy to solve. Thanks to GatsbyJS's large and active community, I was able to quickly find helpful forum posts and threads addressing most of the problems I faced.</p>,
  takeaways: <p>My takeaway from this project was a newfound appreciation for GatsbyJS and static sites. After years of working with WordPress, it was a breath of fresh air, and I honestly don’t think I could go back. The ability to quickly build static sites using React and Gatsby is far more enjoyable and much less of a headache.</p>
};

const D6Website = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default D6Website;
