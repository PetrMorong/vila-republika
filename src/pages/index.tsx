import * as React from "react";
import HomeIndex from "../Components/Views/Home";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Wellness Apartmány Vila Republika Velké Losiny</title>
        <meta
          name="description"
          content="Wellness Apartmány Vila Republika leží pod svahy Hrubého Jeseníku v lázeňské obci Velké Losiny. K ubytování nabízíme i privátní wellness. Původní stavba z 30. let minulého století je citlivě zrekonstruována, krásné prvorepublikové prvky zachovány. Moderně pojaté, komfortní ubytování uspokojí i nejnáročnější klientelu. Vila Republika je díky své poloze ideální destinací pro trávení letní i zimní lyžařské dovolené. Na dosah budete mít termální lázně, malebný lázeňský park i čistou přírodu CHKO Jeseníky."
        />
      </Helmet>
      <HomeIndex />
    </>
  );
};

export default IndexPage;
