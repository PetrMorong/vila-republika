import React from 'react'
import Wellnesss from '../Components/Views/Wellness'
import { Helmet } from 'react-helmet'
import DataContainer from '../Components/DataContainer'
import Layout from '../Components/Layout/Layout'

const WellnessPage = () => {
  return (
    <Layout>
      <DataContainer>
        <Helmet>
          <title>Privátní Wellness Velké Losiny</title>
          <meta
            name="description"
            content="Po aktivně stráveném dni na čerstvém vzduchu si dopřejte zasloužený relax. Rozmazlujte se v našem privátním wellness vonícím dřevem. Čeká zde na vás finská sauna, vířivka a soukromí."
          />
        </Helmet>
        <Wellnesss />
      </DataContainer>
    </Layout>
  )
}

export default WellnessPage
