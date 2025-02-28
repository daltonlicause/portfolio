import * as React from "react";
import Layout  from "components/layout";
import ProjectLayout from "../projectLayout";
import Image from "assets/imgs/d6Catalog-page.png";

const Project = {
  title: "D6 Inc. Catalog",
  desc: "Mobile-first catalog developed for D6 Inc. using the Ionic Framework for the frontend, with a Node.js REST API connected to MongoDB.",
  stack: ["javascript", "react", "ionic framework", "styled components", "sass", "redux", "google cloud storage", "node", "express", "jwt", "mongodb"],
  mobile: true,
  img: Image,
  live: true,
  goals: <p>D6 Inc. approached us with a challenge their sales team was facing: all of their products were stored in a single spreadsheet. While the spreadsheet was easy to update, it was becoming increasingly difficult for the sales team to navigate and use efficiently. They needed a solution that would allow them to easily find and showcase products, regardless of location, while also enabling their product team to add and update items seamlessly. The final solution was a website/app, accessible only to the D6 Inc. team, that cataloged their entire product line.</p>,
  stackExplained: <div>
    <p>After meeting with the D6 team and reviewing their requirements, I took some time to decide on the best approach for my first solo full-stack development project. I wanted to balance familiarity with new learning opportunities, so I ultimately chose the MERN stack (MongoDB, Express, React, Node) along with Google Cloud Storage.</p>
    <p>For the front-end, I opted for React.js, my preferred JavaScript framework, as it allowed for quick development. I also used the Ionic Framework, enabling me to build a single codebase that worked across both web and native platforms.</p>
    <p>The back-end was a more challenging decision. Wanting to learn while avoiding complexity, I chose to build a Node.js API with a MongoDB database. Node.js was new to me, but my JavaScript experience made it approachable. I selected MongoDB for its flexibility, which was ideal for managing D6 Inc.'s diverse product specs. Plus, it offered a great opportunity to gain hands-on experience with NoSQL databases.</p>
  </div>,
  challenges: <div>
    <p>The biggest challenge I faced in this project was being the sole developer on a brand-new project. From the design phase to production deployment, I handled everything on my own. Until then, I had only worked on similar projects as part of a full team with collaborators and leads.</p>
    <p>The lack of support in architecting the back-end, designing the UX/UI, or having someone overseeing the project was a significant adjustment compared to what I was accustomed to.</p>
  </div>
  ,
  takeaways: <div>
    <p>My biggest takeaway from this project was realizing the significant difference between working solo and being part of a team. As my first solo project, I'm proud of what I accomplished and the lessons I learned. I now have a clear understanding of what it takes to build a complete project from scratch, along with valuable experience in Node.js, Express, MongoDB, and Google Cloud Storage.</p>
    <p>D6 Inc. is extremely pleased with the final product and is actively using it across their organization. I’m currently in discussions with them to explore additional features and quality-of-life improvements they’d like to implement.</p>
  </div>
};

const D6Catalog = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default D6Catalog;
