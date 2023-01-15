import React from "react";
import Layout from "../../Layout/Layout";
import Apartmany from "./Apartmany";
import Exterier from "./Exterier";
import Wellness from "./Wellness";
import Header from "./Header";
import Tab from "./Tab";

const Fotogalerie: React.FC = () => {
  // TODO add fotogalery

  return (
    <Layout>
      <Header />
      {/* <Tab /> */}
      <div id="Apartmany">
        <Apartmany />
      </div>
      <div id="Exterier">
        <Exterier />
      </div>
      {/* <div id="Wellness">
        <Wellness />
      </div> */}
    </Layout>
  );
};

export default Fotogalerie;
