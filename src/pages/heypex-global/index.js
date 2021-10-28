import React from "react";
import Layout  from "../../components/layout";
import ProjectLayout from "../../components/projectLayout";

import Image from "../../assets/imgs/heypexGlobal.png"

const Project = {
  title: "Heypex Global Website",
  desc: "A website built for Heypex Global using Gatsby JS and content sourced from Netlify CMS.",
  stack: ["react", "gatsby", "styled components", "bulma", "graphql", "netlify cms"],
  img: Image,
  live: true,
  liveLink: "https://heypexglobal.com"
};

const HeypexGlobal = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default HeypexGlobal;
