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
  liveLink: "https://d6inc.com"
};

const D6Website = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default D6Website;
