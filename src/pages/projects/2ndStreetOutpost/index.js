import React from "react";
import Layout  from "../../../components/layout";
import ProjectLayout from "../projectLayout";
import Image from "../../../assets/imgs/2ndStOutpost-page.png"

const Project = {
  title: "2nd Street Outpost",
  desc: "A ecommerce website built for 2nd Street Outpost using Shopify.",
  stack: ["shopify", "liquid", "adobe illustrator", "adobe photoshop"],
  img: Image,
  live: true,
  liveLink: "https://2ndstoutpost.com",
  goals: <p>2nd Street Outpost wanted an ecommerce website that was also connected with their in store point of sale and inventory. The site needed to be set up quickly and easily. It also needed to house all of their products and give the customer ease of purchase and mind no matter if it was for in-store pickup, local delivery, or shipped.</p>,
  stackExplained: <p>I decided to go with Shopfiy for this project. After researching through many blogs, articles, and reviews it seemed to be the best fit. It made development easy with using a premade theme and any additional custom items using the templating language Liquid. That combined with their point of sale and inventory systems made having it all in one place a no brainer.</p>,
  challenges: <p>I ran into a few challenges initially with the shopify site. With it being my first dive into shopify I had to become familiar with how things are set up including products and themes as well as its limitations. After learning some of liquid and how shopify stores product info I quickly was able to start making custom sections in liquid.</p>,
  takeaways: <p>My takeaways from this project are mostly mixed. I’m happy I went with Shopify for the ecommerce and point of sale platform as it still seems to be the best on the market. However not happy with the site performance, with using a free starter theme and a few custom sections I was hoping for better results. In the future I will look to either pay for a more optimized theme or move to Gatsby JS with the Shopify API.</p>
};

const Outpost = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default Outpost;
