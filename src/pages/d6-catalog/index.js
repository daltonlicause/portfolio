import React from "react";
import BackHome from "../../components/backHome";
import Layout  from "../../components/layout";
import { PageContainer } from "./styled";

const D6Catalog = () => ( 
  <Layout>
    <PageContainer>
      <BackHome/>
      <div className="banner">
        <p>D6 Catalog</p>
      </div>
    </PageContainer>
  </Layout>
);

export default D6Catalog;
