import * as React from "react";
import { IndexPageContainer } from "./styled";
import Layout  from "components/layout";
import Headshot from "components/headshot";
import About from "./about";
import Projects from "./projects";
import Experience from "./experience";
import Contact from "components/contact"


const Index = () => (
  <Layout>
    <IndexPageContainer>
      <Headshot />
      <About />
      <Projects />
      <Experience/>
      <Contact />
    </IndexPageContainer>
  </Layout>
);

export default Index;
