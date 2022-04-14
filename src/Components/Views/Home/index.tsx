import React from "react";
import Layout from "../../Layout/Layout";
import Dalsi from "./Dalsi";
import Header from "./Header";
import HistorieVelkych from "./HistorieVelkych";
import IntimniAtmosfera from "./IntimniAtmosfera";
import Nostalgick from "./Nostalgick";
import VilaRepublika from "./VilaRepublika";

const HomeIndex: React.FC = () => {
  return (
    <Layout>
      <Header />
      <VilaRepublika />
      <IntimniAtmosfera />
      <HistorieVelkych />
      <Dalsi />
      <Nostalgick />
    </Layout>
  );
};

export default HomeIndex;
