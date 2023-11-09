import React from 'react'
import { Helmet } from 'react-helmet'
import { setConfig } from 'cloudinary-build-url'
import { buildImageUrl } from 'cloudinary-build-url'
import Favicon from '../images/faviconWhite.ico'

setConfig({
  cloudName: 'morireality',
  apiKey: '465321175721736',
  apiSecret: '71xSUQ9WJBuUtLTVwlBy5BwOQ74',
})

export default function DataContainer({ children }: any) {
  const ogImage = buildImageUrl(
    'v1680936650/vilaRepublikaFoto/DSC02010-HDR_ztnz7h.jpg',
    {}
  )
  return (
    <>
      <html lang="cs"></html>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/uve2xcq.css" />
        <link rel="icon" href={Favicon} />
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
        <meta
          name="facebook-domain-verification"
          content="gppmzwm6cys23wdwxsp0ww94ydcu8g"
        />

          <script>
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TJVF4KK6');
          </script>

      </Helmet>
      {children}
    </>
  )
}
