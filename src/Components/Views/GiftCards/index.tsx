import React from "react";
import Layout from "../../Layout/Layout";
import ChooseValue from "./ChooseValue";
import Header from "./Header";
import SectionTwo from "./SectionTwo";

const GiftCards: React.FC = () => {
  return (
    <Layout>
      <Header />
      <SectionTwo />
      <ChooseValue />
    </Layout>
  );
};

export default GiftCards;
