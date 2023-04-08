import React from 'react'
import Layout from '../../Layout/Layout'
import VybaveniWellness from './VybaveniWellness'
import Header from './Header'
import Tab from './Tab'
import ProVerejnost from './ProVerejnost'
import Fotogalerie from './Fotogalerie'

const Wellnesss: React.FC = () => {
  return (
    <>
      <Header />
      <Tab />
      <div id="VybaveniWellness">
        <VybaveniWellness />
      </div>
      <div id="ProVerejnost">
        <ProVerejnost />
      </div>
      <div id="Fotogalerie">
        <Fotogalerie />
      </div>
    </>
  )
}

export default Wellnesss
