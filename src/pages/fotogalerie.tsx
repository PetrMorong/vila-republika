import React from 'react'
import Fotogalerie from '../Components/Views/Fotogalerie'
import { Helmet } from 'react-helmet'
import DataContainer from '../Components/DataContainer'
import Layout from '../Components/Layout/Layout'

const FotogaleriePage = () => {
  return (
    <Layout>
      <DataContainer>
        <Fotogalerie />
      </DataContainer>
    </Layout>
  )
}

export default FotogaleriePage
