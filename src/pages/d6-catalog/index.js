import React from "react";
import Layout  from "../../components/layout";
import ProjectLayout from "../../components/projectLayout";
import Image from "../../assets/imgs/d6Catalog.png";

const Project = {
  title: "D6 Catalog",
  desc: "A mobile first catalog website/ PWA built for D6 Inc. using Ionic Framework on the Frontend and a Node rest API to connect with MongoDB.",
  stack: ['react', 'ionic framework', 'styled components', 'redux', 'node', 'express', 'mongodb'],
  img: Image,
  live: true
};

const D6Catalog = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default D6Catalog;
