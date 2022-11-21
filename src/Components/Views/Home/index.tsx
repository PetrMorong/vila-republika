import React from "react";
import Layout from "../../Layout/Layout";
import Vybaveni from "./Vybaveni";
import Header from "./Header";
import HistorieSection from "./HistorieSection";
import IntimniAtmosfera from "./IntimniAtmosfera";
import JesenikySection from "./JesenikySection";
import SectionTwo from "./SectionTwo";

const HomeIndex: React.FC = () => {
  return (
    <Layout>
      <Header />
      <SectionTwo />
      <IntimniAtmosfera />
      <HistorieSection />
      <Vybaveni />
      <JesenikySection />
    </Layout>
  );
};

export default HomeIndex;
