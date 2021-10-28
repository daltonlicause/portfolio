import React from "react";
import { PageContainer } from "./styled";
import Layout  from "../../components/layout";

import Banner from "./banner";
import Projects from "./projects";
import Experience from "./experience";
import Interests from "./interests";
import Contact from "../../components/contact"


const Index = () => ( 
  <Layout>
    <PageContainer>
      <Banner />
      <Projects />
      <Experience/>
      <Interests />
      <Contact />
    </PageContainer>
  </Layout>
);

export default Index;
