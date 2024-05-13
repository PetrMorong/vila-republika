import { Helmet } from 'react-helmet'
import React from 'react'
import Layout from '../Components/Layout/Layout'
import styled from 'styled-components'
import Header from '../Components/Views/Rezervace/Header'
import DataContainer from '../Components/DataContainer'

const Reservation = () => {
  return (
    <DataContainer>
      <Helmet>
        <script
          type='text/javascript'
          src='https://booking.previo.cz/iframe/'
        ></script>

        <title>
          Rezervace - Wellness Apartmány Vila Republika Velké Losiny
        </title>
        <meta
          name='description'
          content='Wellness Apartmány Vila Republika leží pod svahy Hrubého Jeseníku v lázeňské obci Velké Losiny. K ubytování nabízíme i privátní wellness. Původní stavba z 30. let minulého století je citlivě zrekonstruována, krásné prvorepublikové prvky zachovány. Moderně pojaté, komfortní ubytování uspokojí i nejnáročnější klientelu. Vila Republika je díky své poloze ideální destinací pro trávení letní i zimní lyžařské dovolené. Na dosah budete mít termální lázně, malebný lázeňský park i čistou přírodu CHKO Jeseníky.'
        />
      </Helmet>

      <Layout>
        <Header title='Pobytové Balíčky' />
        <Wrap>
          <Container>
            <div className='previo-reservation-form'>
              <iframe
                src='https://booking.previo.cz/?hotId=758539&showTabs=stay&theme=dark&'
                scrolling='no'
                frameborder='0'
                width='100%'
                height='2000'
                name='previo-booking-iframe'
                id='previo-booking-iframe'
                allowTransparency='true'
              ></iframe>
            </div>
          </Container>
        </Wrap>
      </Layout>
    </DataContainer>
  )
}

export const Wrap = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 150px;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  max-width: 1444px;
  width: 100%;
`

export default Reservation
