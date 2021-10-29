import React from "react";
import { PageContainer } from "./styled";
import Layout  from "../../components/layout";

import About from "./about";
import Projects from "./projects";
import Experience from "./experience";
import Interests from "./interests";
import Contact from "../../components/contact"
import Memoji from "../../components/memoji";

const Index = () => ( 
  <Layout>
    <PageContainer>
      <Memoji />
      <About />
      <Projects />
      <Experience/>
      <Interests />
      <Contact />
    </PageContainer>
  </Layout>
);

export default Index;
