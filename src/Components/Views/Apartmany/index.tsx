import React from "react";
import VybaveniApartmanu from "./VybaveniApartmanu";
import Header from "./Header";
import Tab from "./Tab";
import Apartmany from "./Apartmany";
import ProPrijemne from "./ProPrijemne";
import Dalsi from "./Dalsi";

const ApartmanyIndex: React.FC = () => {
  return (
    <>
      <Header />
      {/* <Tab />
      <div id="VybaveniApartmanu">
        <VybaveniApartmanu />
      </div> */}
      <div id="Apartmany">
        <Apartmany />
      </div>
      <div id="ProPrijemne">
        <ProPrijemne />
      </div>
      <div>
        <Dalsi />
      </div>
    </>
  );
};

export default ApartmanyIndex;
