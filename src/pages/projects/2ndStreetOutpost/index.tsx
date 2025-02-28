import * as React from "react";
import Layout  from "components/layout";
import ProjectLayout from "../projectLayout";
import Image from "assets/imgs/2ndStOutpost-page.png";

const Project = {
  title: "2nd Street Outpost",
  desc: "An E-commerce website developed for 2nd Street Outpost using Shopify.",
  stack: ["shopify", "liquid", "javascript", "css", "html", "adobe illustrator", "adobe photoshop"],
  img: Image,
  live: true,
  liveLink: "https://2ndstoutpost.com",
  goals: <p>2nd Street Outpost needed an e-commerce website integrated with their in-store point of sale and inventory system. The site had to be built within a tight timeline while offering an easy-to-update storefront. It was crucial that the storefront could display all of their products and provide a seamless shopping experience, whether customers were choosing in-store pickup, local delivery, or shipping.</p>,
  stackExplained: <p>I chose Shopify for this project after thorough research, including reading numerous blogs, articles, and reviews. It proved to be the best all-in-one solution. Shopify made development seamless, allowing me to leverage a pre-made theme and customize it further with their templating language, Liquid. That combined with their point of sale and inventory systems made having everything in one platform a no brainer.</p>,
  challenges: <p>I faced a few challenges initially with the Shopify site, as it was my first time working with the platform. I needed to familiarize myself with how products, themes, and the overall system were structured, as well as understand its limitations. However, after diving into Liquid and Shopify's data schema, I quickly gained the knowledge needed to start creating custom sections.</p>,
  takeaways: <p>My takeaways from this project are mixed. I'm glad I chose Shopify for the e-commerce and point-of-sale platform, as it remains one of the best on the market. However, I was disappointed with the site's speed performance. Despite using a free starter theme and adding custom sections, I expected better results. In the future, I may explore other frontend options, such as purchasing a more optimized theme, building a custom theme, or potentially transitioning to a headless solution with the Shopify Storefront API.</p>
};

const Outpost = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default Outpost;
