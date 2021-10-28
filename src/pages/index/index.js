import React from "react";
import { PageContainer } from "./styled";
import Memoji from "../../assets/imgs/memoji.gif";
import Layout  from "../../components/layout";
import ProjectItem from "../../components/projectItem";
import RocketLeague from "../../components/rocketLeague"

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
      <section className="banner">
        <img className="memoji" alt="Memoji of myself" src={Memoji} width="150px" height="113px"/>
        <h2>&#128075; Hi, I'm <b className="accent">Dalton</b>!</h2>
        <div className="sub-section">
          <p>Full stack developer with a passion for frontend and design.</p>
          </div>
      </section>
      
      <section className="projects">
        <h2>&#128104;&#8205;&#128187; Latest Projects</h2>
        { Projects.map((project) => <ProjectItem key={project.name} project={project}/>) }
      </section>

      <section className="experience">
        <h2>&#9989; Experience</h2>
      </section>

      <section className="interests">
        <h2>&#10024; Interests</h2>
        <div className="sub-section">
          <h3>&#127918; Gaming</h3>
          <RocketLeague />
        </div>

        <div className="sub-section">
          <h3>&#127911; Music</h3>
          <div>
            <span>Currently on Rotation:</span>
            <span>
              <span>Donda - Kanye West</span>
              <span>Punk - Young Thug</span>
            </span>
          </div>
        </div>

        <div className="sub-section">
          <h3>&#127912; Digital Design</h3>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
      </section>

    </PageContainer>
  </Layout>
);

export default Index;
