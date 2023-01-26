import React from "react";
import { Helmet } from "react-helmet";
import { setConfig } from "cloudinary-build-url";
import { buildImageUrl } from "cloudinary-build-url";

setConfig({
  cloudName: "morireality",
  apiKey: "465321175721736",
  apiSecret: "71xSUQ9WJBuUtLTVwlBy5BwOQ74",
});

export default function DataContainer({ children }: any) {
  const ogImage = buildImageUrl(
    "v1673863133/vilaRepublikaFoto/DSC07600-HDR_3_maveff.jpg",
    {}
  );
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/uve2xcq.css" />
        <meta
          property="og:title"
          content="Wellness Apartmány Vila Republika - Velké Losiny"
        />
        <meta
          property="og:description"
          content="Wellness Apartmány Vila Republika leží pod svahy Hrubého Jeseníku v lázeňské obci Velké Losiny. K ubytování nabízíme i privátní wellness. Původní stavba z 30. let minulého století je citlivě zrekonstruována, krásné prvorepublikové prvky zachovány. Moderně pojaté, komfortní ubytování uspokojí i nejnáročnější klientelu. Vila Republika je díky své poloze ideální destinací pro trávení letní i zimní lyžařské dovolené. Na dosah budete mít termální lázně, malebný lázeňský park i čistou přírodu CHKO Jeseníky."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content="https://www.vila-republika.cz" />
        <meta property="og:site_name" content="Vila Republika" />
        <meta property="og:type" content="website" />
      </Helmet>
      {children}
    </>
  );
}
