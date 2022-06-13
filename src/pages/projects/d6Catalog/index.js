import React from "react";
import Layout  from "../../../components/layout";
import ProjectLayout from "../projectLayout";
import Image from "../../../assets/imgs/d6Catalog-page.png";

const Project = {
  title: "D6 Catalog",
  desc: "A mobile first catalog website/ PWA built for D6 Inc. using Ionic Framework on the Frontend and a Node rest API to connect with MongoDB.",
  stack: ['react', 'ionic framework', 'styled components', 'redux', 'google cloud storage', 'node', 'express', 'mongodb'],
  mobile: true,
  img: Image,
  live: true,
  goals: <p>D6 Inc. came to us with the goal to solve a problem they found their sales team dealing with. The problem being that all of their products lived in a single spreadsheet, while this was simple to update it was growing difficult for the sales team to use. They instead wanted a way to easily find and show off their products no matter where they were while also giving the product team the ability to add and update them. The Final project requirements was a website/ app that was accessible to only the D6 Inc team that cataloged their enitre product line.</p>,
  stackExplained: <div>
    <p>After meeting with the D6 team and going over their requirements for both the catalog and products I spent some time thinking of the best approach. With this being my first solo full stack development project I wanted to use something familiar but also wanted to learn someting new along the way. In the end I decided on the MERN stack (MongoDB, Express, React, Node) with Google Could Storage to host images.</p>
    <p>On the the front-end I knew I wanted to go with React JS as it's my favorite javascript framework and I knew I could get something up and running quickly. Along with React I used Ionic Framework, which gave me the ability to build one code base in Javascript and run the application on both the web and native operating systems.</p>
    <p>The back-end was more difficult to decide on, as I wanted to learn along the way I also didn’t want to get in over my head. I ended up deciding to build a Node JS API and that connected to a MongoDB database. I went with Node JS because it was something I hadn’t used before, but was familiar enough because of my experience with Javascript. I chose to use MongoDB because of the flexibility since D6 had hundreds of products with different specs and requirements it made a good match for a NoSQL database. Plus I had yet to have experience with a NoSQL database and thought it would be great to learn.</p>
  </div>,
  challenges: <p>By far the biggest challenge I faced for this project was being the solo developer on the brand new project. From the design stage until production deployment, it was all done myself. Up until this point I had only worked on applications similar to this with a full team of collaborators and leads.</p>,
  takeaways: <div>
    <p>My biggest takeaway from this project was that having a team versus being a solo developer is a huge task. With it being my first solo project I am proud of what I was able to accomplish and learn. I now know what it really takes to build a complete project from scratch plus I learned NodeJS, Express, and MonogDB along the way.</p>
    <p>The D6 Inc. team was very happy with the project. In fact their team is still using it and adding products. I’m currently in talks with them to see what features they’d like to add plus any quality of life improvements they want to see.</p>
  </div>
};

const D6Catalog = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default D6Catalog;
