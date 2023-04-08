import React from 'react'
import Apartmany from './Apartmany'
import Exterier from './Exterier'
import Wellness from './Wellness'
import Header from './Header'

const Fotogalerie: React.FC = () => {
  // TODO add fotogalery

  return (
    <>
      <Header />
      {/* <Tab /> */}
      <div id="Apartmany">
        <Apartmany />
      </div>
      <div id="Exterier">
        <Exterier />
      </div>
      <div id="Wellness">
        <Wellness />
      </div>
    </>
  )
}

export default Fotogalerie
