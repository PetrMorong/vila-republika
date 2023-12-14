import React from 'react'
import Layout from '../Components/Layout/Layout'
import DataContainer from '../Components/DataContainer'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { IconTitle } from '../Styled/Typography.styles'
import { buildImageUrl } from 'cloudinary-build-url'

const DarkovePoukazy: React.FC = () => {
  const voucher1 = buildImageUrl(
    'v1702543994/vilaRepublikaFoto/Screenshot_2023-12-14_at_9.47.38_jzwids.png',
    {},
  )

  const voucher2 = buildImageUrl(
    'v1702544431/vilaRepublikaFoto/Screenshot_2023-12-14_at_10.00.17_fmveub.png',
    {},
  )
  return (
    <DataContainer>
      <Helmet>
        <script
          type='text/javascript'
          src='https://booking.previo.cz/iframe/'
        ></script>
      </Helmet>

      <Layout>
        <Wrap>
          <WrapBg>
            <iframe
              src='https://booking.previo.cz/?hotId=758539&lang=cs&theme=black&showTabs=coupon'
              scrolling='no'
              frameBorder='0'
              width='100%'
              height='2000'
              name='previo-booking-iframe'
              id='previo-booking-iframe'
              allowTransparency={true}
            ></iframe>

            <div style={{ marginTop: 40 }} />

            <IconTitle
              color={`#000`}
              fontSize={`45px`}
              linHeight={`48px`}
              xlfontSize={`35px`}
              mdFontSize={`30px`}
              textAlign={`center`}
              smFontSize={`25px`}
              fontWeight={`600`}
              xlfontWeight={`600`}
              smFontWeight={`600`}
              mdfontWeight={`600`}
              mb={``}
              mdMargibBottom={``}
              mdLineheight={`58px`}
              smLineheight={`38px`}
              mdtextAlign={`center`}
              smtextAlign={`center`}
              smMargibBottom={``}
            >
              Vzor dárkového poukazu
            </IconTitle>

            <Row>
              <VoucherImage src={voucher1} />
              <div style={{ width: 40 }} />

              <VoucherImage src={voucher2} />
            </Row>
          </WrapBg>
        </Wrap>
      </Layout>
    </DataContainer>
  )
}

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 50px 0;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`

export const VoucherImage = styled.img`
  width: 650px;
  height: 250px;

  @media screen and (max-width: 1200px) {
    width: 90vw;
    height: calc(90vw / 2.5);
  }
`

export const Wrap = styled.div`
  padding-top: 115px;
  background: rgb(38, 43, 59);
`

export const WrapBg = styled.div`
  background: #f2f2f2;
`

export default DarkovePoukazy
