import React from "react";
import Layout  from "../../../components/layout";
import ProjectLayout from "../projectLayout";
import Image from "../../../assets/imgs/2ndStOutpost.png"

const Project = {
  title: "2nd Street Outpost",
  desc: "A ecommerce website built for 2nd Street Outpost using Shopify.",
  stack: ["shopify", "adobe illustrator", "adobe photoshop"],
  img: Image,
  live: true,
  liveLink: "https://2ndstoutpost.com"
};

const Outpost = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default Outpost;
