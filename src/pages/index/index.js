import React from "react";
import { PageContainer } from "./styled";
import Memoji from "../../assets/imgs/memoji.gif";
import Layout  from "../../components/layout";
import Project from "../../components/project";

const Projects = [
  {
    name: "D6 Catalog",
    link: "/d6-catalog"
  },
  {
    name: "D6 Website",
    link: "/d6-website"
  },
  {
    name: "Heypex Global",
    link: "/heypex-global"
  },
  {
    name: "2nd Street Outpost",
    link: "/2nd-street-outpost"
  },

]

const Index = () => ( 
  <Layout>
    <PageContainer>
      <div className="banner">
        <img className="memoji" alt="Memoji of myself" src={Memoji} width="150px" height="113px"/>
        <p>Hi I'm <b className="accent">Dalton</b>!</p>
        <p>Full stack developer with a passion for frontend and design.</p>
      </div>
      <div className="projects">
        { Projects.map((project) => <Project project={project}/>) }
      </div>
    </PageContainer>
  </Layout>
);

export default Index;
