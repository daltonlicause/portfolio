import React from "react";
import Layout  from "../../../components/layout";
import ProjectLayout from "../projectLayout";
import Image from "../../../assets/imgs/d6Catalog-page.png";

const Project = {
  title: "D6 Catalog",
  desc: "A mobile first catalog website/ PWA built for D6 Inc. using React with Ionic Framework on the Frontend and a Node REST API to connected to MongoDB & Google Cloud Storage.",
  stack: ['react', 'ionic framework', 'styled components', 'redux', 'google cloud storage', 'node', 'express', 'mongodb'],
  mobile: true,
  img: Image,
  live: true,
  goals: <p>D6 Inc. came to us with a problem they found their sales team dealing with. The problem being that all of their products lived in a single spreadsheet, while it was simple to update it was growing difficult for the sales team to use. They instead wanted a way to easily find and show off their products no matter where they were, while also giving the product team the ability to add and update them. The Final project requirement was a website/ app that was accessible to only the D6 Inc team that cataloged their enitre product line.</p>,
  stackExplained: <div>
    <p>After meeting with the D6 team and going over their requirements, I spent some time thinking of the best approach. With this being my first solo full stack development project I wanted to use something familiar but also wanted to learn someting new along the way. In the end I decided on the MERN stack (MongoDB, Express, React, Node) along with Google Could Storage.</p>
    <p>On the the front-end I knew I wanted to go with React JS as it's my favorite javascript framework and could get it up and running quickly. Along with React I used Ionic Framework, which gave me the ability to build one code base in Javascript and run the application on both the web and native operating systems.</p>
    <p>The back-end was more difficult to decide on. I wanted to learn along the way, but also didn’t want to get in over my head. I ended up deciding to build a Node JS API that connected to a MongoDB database. I went with Node JS because it was something I hadn’t used before, but was familiar enough because of my experience with Javascript. I chose to use MongoDB because of the flexibility. D6 Inc had hundreds of products with different specs and requirements, so it made a good match for a NoSQL database. Plus I had yet to have experience with a NoSQL database and thought it would be great to learn.</p>
  </div>,
  challenges: <div>
    <p>By far the biggest challenge I faced for this project was being the solo developer on the brand new project. From the design stage until production deployment, it was all done myself. Up until this point I had only worked on applications similar to this with a full team of collaborators and leads.</p>
    <p>Not having someone to help architect the backend or a designer to help create the UX/ UI or even someone that was oversing the project was a huge adjustment from what I had been used to. </p>
  </div>
  ,
  takeaways: <div>
    <p>My biggest takeaway from this project was that having a team versus being a solo developer is a huge difference. With it being my first solo project, I'm proud of what I was able to accomplish and while also learn. I now know what it really takes to build a complete project from scratch plus I now have the benift of experince in NodeJS, Express, and MonogDB that I gained along the way.</p>
    <p>The D6 Inc. team is very happy with the production product. Their team is actively using it and are adding products. I’m currently in talks with them to see what features they’d like to add plus any quality of life improvements they want to see.</p>
  </div>
};

const D6Catalog = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default D6Catalog;
