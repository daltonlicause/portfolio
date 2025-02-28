import * as React from "react";
import Layout  from "components/layout";
import ProjectLayout from "../projectLayout";
import Image from "assets/imgs/VGANChocolates-page.png";

const Project = {
  title: "VGAN Chocolates",
  desc: "E-commerce storefront developed for VGAN Chocolates using Shopify.",
  stack: ["shopify", "liquid", "javascript", "css", "html", "adobe illustrator", "adobe photoshop"],
  mobile: false,
  img: Image,
  live: true,
  liveLink: "https://vganchocolate.com/",
  goals: <p>VGAN Chocolates, a Norway-based company, sought to introduce their products to the US market. They needed an eye-catching online storefront that would boost brand recognition and establish their presence in the niche vegan chocolate market. Additionally, VGAN wanted a scalable solution that would allow them to expand not only into the US but also into global markets.</p>,
  stackExplained: <p>I chose Shopify for this project because of my previous experience building e-commerce sites on the platform. Given VGAN Chocolates' plans for expansion into other markets, I knew Shopify would be the best fit to support their growth."</p>,
  challenges: <p>Having built several Shopify sites before, setting up VGAN's site was a breeze.</p>,
  takeaways: <p>My key takeaway from this project is that choosing Shopify was the right decision. Its ease of setup and ongoing support have made it a solution both the client and I are extremely satisfied with.</p>
};

const VGANChocolates = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default VGANChocolates;
