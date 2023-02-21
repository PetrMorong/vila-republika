import * as React from 'react'
import HomeIndex from '../Components/Views/Home'
import DataContainer from '../Components/DataContainer'
import Layout from '../Components/Layout/Layout'

const IndexPage = () => {
  return (
    <DataContainer>
      <Layout>
        <HomeIndex />
      </Layout>
    </DataContainer>
  )
}

export default IndexPage
