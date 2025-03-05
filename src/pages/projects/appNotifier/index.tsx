import * as React from "react";
import Layout  from "components/layout";
import ProjectLayout from "../projectLayout";

const Project = {
  title: "App Notifier",
  desc: "In-App notification queue processor for expo in-app notifications built with Node.js, TypeScript, and BullMQ.",
  stack: ["node", "typescript", "bulmq", "express", "expo", "redis", "docker"],
  goals: <p>Client of mine approached me to develop a more robust in-app notification system to replace their manual heavy process. With their user base surpassing 60,000, scalability and efficiency were critical, as their existing solution took nearly 30 minutes to completion. The new system needed to support scheduled notifications, process messages in a queue, and ensure seamless delivery to relevant users.</p>,
  stackExplained: <p>Node.js was selected as the backend framework to maintain consistency with their existing services and support for Expo's push notification. After evaluating multiple messaging queue processors, I chose BullMQ for its reliability, seamless Redis integration, and robust feature set.</p>,
  challenges: <p>Since this was my first time implementing a messaging queue, I spent some time learning how to architect the system for concurrency, retries, and scalability. Fortunately, BullMQ’s excellent documentation and extensive community support helped me overcome any challenges I encountered along the way.</p>,
  takeaways: <div>
    <p>I came away from this project with a newfound appreciation for the complexities of working with messaging queues. It was incredibly satisfying to reduce notification processing time from nearly 30 minutes to less than a few minutes.</p>
    <p>My client was thrilled with the results. Not only did the new system eliminate their manual process, but it also empowered their content team to manage notifications independently.</p>
  </div>
};

const AppNotifier = () => ( 
  <Layout>
    <ProjectLayout project={Project}/>
  </Layout>
);

export default AppNotifier;
