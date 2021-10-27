import React from "react";
import BackHome from "../../components/backHome";
import Layout  from "../../components/layout";
import { PageContainer } from "./styled";

const Outpost = () => ( 
  <Layout>
    <PageContainer>
      <BackHome />
      <div className="banner">
        <p>2nd Street Outpost</p>
      </div>
    </PageContainer>
  </Layout>
);

export default Outpost;
