import React from "react";
import BackHome from "../../components/backHome";
import Layout  from "../../components/layout";
import { PageContainer } from "./styled";

const HeypexGlobal = () => ( 
  <Layout>
    <PageContainer>
      <BackHome/>
      <div className="banner">
        <p>Heypex Global</p>
      </div>
    </PageContainer>
  </Layout>
);

export default HeypexGlobal;
