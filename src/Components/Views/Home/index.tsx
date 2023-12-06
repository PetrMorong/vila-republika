import React from 'react'
import Vybaveni from './Vybaveni'
import Header from './Header'
import HistorieSection from './HistorieSection'
import IntimniAtmosfera from './IntimniAtmosfera'
import JesenikySection from './JesenikySection'
import SectionTwo from './SectionTwo'
import Reviews from './Reviews'

const HomeIndex: React.FC = () => {
  return (
    <>
      <Header />
      <Reviews />
      <SectionTwo />
      <IntimniAtmosfera />
      <HistorieSection />
      <Vybaveni />
      <JesenikySection />
    </>
  )
}

export default HomeIndex
