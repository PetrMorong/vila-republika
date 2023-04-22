import React from 'react'
import Layout from '../Components/Layout/Layout'
// import ChooseValue from '../Components/Views/DarkovePoukazy/ChooseValue'
// import Header from '../Components/Views/DarkovePoukazy/Header'
// import SectionTwo from '../Components/Views/DarkovePoukazy/SectionTwo'
import DataContainer from '../Components/DataContainer'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const DarkovePoukazy: React.FC = () => {
  return (
    <DataContainer>
      <Helmet>
        <script
          type="text/javascript"
          src="https://booking.previo.cz/iframe/"
        ></script>
      </Helmet>

      <Layout>
        <Wrap>
          <WrapBg>
            <iframe
              src="https://booking.previo.cz/?hotId=758539&lang=cs&theme=black&showTabs=coupon"
              scrolling="no"
              frameBorder="0"
              width="100%"
              height="2000"
              name="previo-booking-iframe"
              id="previo-booking-iframe"
              allowTransparency={true}
            ></iframe>
          </WrapBg>
        </Wrap>
      </Layout>
    </DataContainer>
  )
}

export const Wrap = styled.div`
  padding-top: 115px;
  background: rgb(38, 43, 59);
`

export const WrapBg = styled.div`
  background: white;
`

export default DarkovePoukazy
