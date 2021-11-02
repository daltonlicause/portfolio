import React from "react";
import Layout  from "../../../components/layout";
import ProjectLayout from "../projectLayout";
import Image from "../../../assets/imgs/d6Website.png"

const Project = {
  title: "D6 Inc. Website",
  desc: "A website built for D6 Inc. using Gatsby JS and content sourced from Netlify CMS.",
  stack: ["react", "gatsby", "styled components", "graphql", "netlify cms"],
  img: Image,
  live: true,
  liveLink: "https://d6inc.com",
  goals: <p>D6 Inc. wanted to build a new company website. Their existing site was built on an outdated version of Wordpress and they weren't happy with the load time, SEO, and their current provider. The site needed to be fast, responsive, and have the ability to be easily updated.</p>,
  stackExplained: <p>I saw this new site as a perfect fit for GatsbyJS. Since I had been using React for a while at the time and had yet to use Gatsby. I also found it to be a good learning opportunity as well. With Gatsby out the gate the load time and seo issues their Wordpress website had been mostly solved. Plus with Netlify CMS and GraphQL I was able to create pages that their internal team could add and update. Add in my favorite way to style react, Styled Components and the site came together quickly.</p>,
  challenges: <p>At the time I had yet to learn GatsbyJS and with that GraphQL. Initially there was some time I had to spend reading documentation and finding solutions to the problems I ran into. All in all though the site had very few challenges and those that I ran into we’re relatively easy to find a solution for.</p>,
  takeaways: <p>My takeaway was my new found appreciation for GatsbyJS. After years of working with Wordpress I don’t think I could ever go back. Having the ability to quickly build static sites with React and Gatsby is immensely more enjoyable and by far less of a headache.</p>
};

const D6Website = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default D6Website;
