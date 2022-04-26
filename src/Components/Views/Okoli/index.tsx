import React from "react";
import Layout from "../../Layout/Layout";
import VelkeLosiny from "./VelkeLosiny";
import Header from "./Header";
import Tab from "./Tab";
import Jeseniky from "./Jeseniky";
import Vylety from "./Vylety";

const Okoli: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Tab />
      <div id="VelkeLosiny">
        <VelkeLosiny />
      </div>
      <div id="Jeseniky">
        <Jeseniky />
      </div>
      <div id="Vylety">
        <Vylety />
      </div>
    </Layout>
  );
};

export default Okoli;
