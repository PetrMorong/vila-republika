import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import trustyouLogo from '../../../images/trustyou-logo.png'

const Reviews = () => (
  <Container>
    <Wrap>
      <Col>
        <TextRecenze>
          Děkujeme za úžasný vikendový pobyt, krásné pokoje, čistotu, skvělé
          wellness. Budeme rádi vzpomínat a určitě si pobyt někdy zopakujeme.
        </TextRecenze>
        <NameText>Radka Dvořáková</NameText>
      </Col>

      <Box>
        <BoxText>Hodnocení našich hostů</BoxText>
        <iframe
          src='https://api.trustyou.com/hotels/cae0a877-7792-4ef2-b2d8-8e1b919e273c/trust_score.html?key=6d715e36-4335-4bd1-9d8a-c856cbc21cff&size=m&scale=100&lang=cs&custom_style={"primaryColor":"0xbf5757"}'
          scrolling='no'
          height='56'
          width='205'
          style={{ border: 'none', fontFamily: 'roc-grotesk-wide' }}
        ></iframe>
        <Row>
          <ImageLogo src={trustyouLogo} />
          <Link to='/recenze' style={{ color: 'black' }}>
            <RecenzeButton>Zobrazit další recenze</RecenzeButton>
          </Link>
        </Row>
      </Box>
    </Wrap>
  </Container>
)

const Wrap = styled.div`
  width: 1444px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1400px) {
    width: 100%;
    flex-direction: column;
    height: 250px;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: center;
`

const TextRecenze = styled.div`
  font-size: 16px;
  font-family: roc-grotesk-wide;
  width: 500px;
  margin-right: 80px;
  line-height: 27px;

  @media screen and (max-width: 1400px) {
    width: 100%;
  }
`
const NameText = styled.div`
  font-size: 16px;
  font-family: roc-grotesk-wide;
  font-weight: 600;
  margin-top: 8px;
`

const Col = styled.div`
  margin-right: 80px;

  @media screen and (max-width: 1400px) {
    display: none;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 27px;
  justify-content: space-between;
  padding-right: 15px;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-top: 20px;
  }
`

const RecenzeButton = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: roc-grotesk-wide;
  text-decoration: underline;
  cursor: pointer;

  @media screen and (max-width: 1400px) {
    font-size: 15px;
  }
`

const BoxText = styled.div`
  font-size: 25px;
  font-weight: 500;
  font-family: roc-grotesk-wide;
  margin-bottom: 20px;

  @media screen and (max-width: 1400px) {
    font-size: 18px;
  }
`

const ImageLogo = styled.img`
  width: 120px;
`

const Box = styled.div`
    width: 500px;
    height: 218px;
    background: #F0E8D9;
    padding 30px 50px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1400px) {
        width: 100%;
        background: white;

      }
`

export default Reviews
