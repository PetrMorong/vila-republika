import React from "react";
import Okoli from "../Components/Views/Okoli";
import { Helmet } from "react-helmet";

const OkoliPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Co dělat ve Velkých Losinách ? Lázně, ThermalPark, Zámek, Papírna a
          další
        </title>
        <meta
          name="description"
          content="Velké Losiny se řadí k nejstarším moravským lázním. Příznivé klimatické podmínky a čerstvý horský vzduch prospějí vašemu tělu i duši, stejně jako léčivé minerální prameny nebo unikátní termální lázně, které nemají v České republice obdoby. Za návštěvu stojí rovněž pozdně renesanční zámek s prohlídkovými okruhy či velkolosinská ruční papírna a pralinkárna."
        />
      </Helmet>
      <Okoli />
    </>
  );
};

export default OkoliPage;
