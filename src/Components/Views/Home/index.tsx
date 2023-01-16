import React from "react";
import Layout from "../../Layout/Layout";
import Vybaveni from "./Vybaveni";
import Header from "./Header";
import HistorieSection from "./HistorieSection";
import IntimniAtmosfera from "./IntimniAtmosfera";
import JesenikySection from "./JesenikySection";
import SectionTwo from "./SectionTwo";
import DataContainer from "../../../Components/DataContainer";

const HomeIndex: React.FC = () => {
  return (
    <DataContainer>
      <Layout>
        <Header />
        <SectionTwo />
        <IntimniAtmosfera />
        <HistorieSection />
        <Vybaveni />
        <JesenikySection />
      </Layout>
    </DataContainer>
  );
};

export default HomeIndex;
