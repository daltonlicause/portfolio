import * as React from "react";
import Layout  from "components/layout";
import ProjectLayout from "../projectLayout";
import LightImage from "assets/imgs/cmsDashboard-page-light.png"
import DarkImage from "assets/imgs/cmsDashboard-page-dark.png"
import { useContext } from "providers/appProvider";

const Project = (theme: string | boolean) => ({
  title: "CMS Dashboard",
  desc: "Internal dashboard and CMS developed using Next.js & Tailwind CSS.",
  stack: ["next.js", "react", "typescript", "tailwind"],
  img: theme === "light" ? LightImage : DarkImage,
  goals: <p>I client of mine approached me with the goal of developing an internal tool for their content and customer success teams to manage in-app content for their popular mobile app. Previously, in-app content updates required manual intervention from an in-house developer. They needed a CMS solution that would empower these teams to manage and update content independently.</p>,
  stackExplained: <p>Next.js was chosen not only for consistency with their other front-end projects but also for its ease of use and rapid development capabilities. With it automatically having react configurations like compiling, routing, and more, it streamlined the development process, allowing me to focus on building the application itself.</p>,
  challenges: <p>With my prior experience in react and next.js, developing the dashboard was a breeze.</p>,
  takeaways: 
  <div>
    <p>My key takeaway from this project is that Next.js was a perfect fit. Its seamless setup, combined with Tailwind CSS, allowed me to get the project up and running quickly and efficiently.</p>
    <p>My client was thrilled with the results of this project. Empowering their internal teams to make changes independently without relying on developers was a game changer, transforming the way they approach their in-app content strategy.</p>
  </div>
});

const CMSDashboard = () => {
  const { theme } = useContext()
  
  return (
    <Layout>
      <ProjectLayout project={Project(theme)}/>
    </Layout>
  )
}

export default CMSDashboard;
