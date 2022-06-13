import React from "react";
import Layout  from "../../../components/layout";
import ProjectLayout from "../projectLayout";
import Image from "../../../assets/imgs/VGANChocolates-page.png";

const Project = {
  title: "VGAN Chocolates",
  desc: "A one of a kind ecommerce store front built for VGAN Chocolates using Shopify.",
  stack: ["shopify", "liquid", "adobe illustrator", "adobe photoshop"],
  mobile: false,
  img: Image,
  live: true,
  liveLink: "https://eatvgan.com",
  goals: <p>VGAN Chocolates, a company based in Norway, wanted to bring their chocolates into the US market. They needed an eye catching online store front that would help grow their brand recognition and establish themselves in the niche vegan chocolate marketplace. VGAN also wanted something easibly scaleable so that they could expand not only into the US but markets around the world.</p>,
  stackExplained: <p>I decided to go with Shopify for this project as I had done several other ecommerce sites on Shopify up until this point and knew it would be the best fit considering their need to grow into other markets in the near future.</p>,
  challenges: <p>Since I had already built several Shopify sites, getting VGAN's site up and running was a breeze.</p>,
  takeaways: <p>I took away from this project knowing that I made the right choice with Shopify. The ease of setup and continued support makes it both something the client and myself are extremely happy with.</p>
};

const VGANChocolates = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default VGANChocolates;
