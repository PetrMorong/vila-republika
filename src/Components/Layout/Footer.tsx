import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { Button } from '../../Styled/Button.styles'
import { FooterItem } from '../../Styled/Footer.styles'
import clientImg from '../../images/user.png'
import facebook from '../../images/facebook.svg'
import insta from '../../images/instagram.svg'
import footerlogo from '../../images/footerLogo.svg'
import {
  Container,
  GridCol,
  Wrapper,
  GridRow,
  FlexRow,
  ImgWrapper,
  StyledImg,
} from '../../Styled/Theme.styles'
import {
  Desc,
  FooterCategoryTitle,
  FooterDesc,
  FooterTitle,
} from '../../Styled/Typography.styles'
import styled from 'styled-components'
import { buildImageUrl } from 'cloudinary-build-url'

const imageConfig = {
  transformations: {
    resize: {
      type: 'scale',
      width: 250,
      height: 150,
      aspectRatio: '16:9',
    },
  },
}

const Footer: FunctionComponent<any> = ({ navLinks }) => {
  return (
    <Wrapper bgColor={`#262b3b`} xlPadding={`50px 0px`} padding={`100px 0px`}>
      <Container>
        <GridRow
          cols={4}
          lg={2}
          md={1}
          sm={1}
          gap={`32px`}
          margin={`0px 0px 50px`}
          xlMargin={`0px 0px 32px`}
          mdMargin={`0px 0px 26px`}
        >
          <GridCol mdJustifyContent={`center`}>
            <FooterTitle
              color={``}
              mdFontsize={`30px`}
              mdLineHeight={`40px`}
              textAlign={`left`}
              mdtextAlign={`center`}
            >
              <FooterTitle
                mdFontsize={`30px`}
                mdLineHeight={`40px`}
                textAlign={`left`}
                mdtextAlign={`center`}
                color={`#F0E8D9`}
                style={{ marginBottom: 0 }}
              >
                Rezervujte
              </FooterTitle>
              si apartmán <br />v Jeseníkách
            </FooterTitle>
          </GridCol>
          <GridCol
            lg={1}
            colSpan={2}
            direction={`row`}
            mdJustifyContent={`center`}
          >
            <FooterDesc>
              Apartmány nabízíme v různých velikostech. Pro jednotlivce, páry i
              rozvětvenou rodinu. Zarezervovat si můžete také celou vilu – na
              oslavu narozenin či dovolenou s přáteli. V okolí budete mít
              desítky kilometrů sjezdovek, cyklostezek a turistických tras,
              termální lázně na dosah. Ozvěte se!
            </FooterDesc>
          </GridCol>
          <GridCol
            mdJustifyContent={`center`}
            justifyContent={`center`}
            alingItems={`center`}
            alignSelf={`center`}
          >
            <Link to='/rezervace'>
              <Button style={{ minWidth: 176 }} width={`176px`} height={`61px`}>
                REZERVACE
              </Button>
            </Link>
          </GridCol>
        </GridRow>

        <BannerWrap>
          <BannerImg
            src={'/images/footer/DSC08357-min_lmko87 (2).jpg'}
          ></BannerImg>
          <BannerText>
            Vyzkoušejte naše nově otevřené apartmány v Rapotíně! <br />
            <p
              style={{
                fontSize: '26px',
                fontFamily: 'roc-grotesk-wide',
                fontWeight: 600,
              }}
            >
              Nyní za zvýhodněné{' '}
              <span
                style={{
                  fontSize: '26px',
                  fontFamily: 'roc-grotesk-wide',
                  fontWeight: 600,
                  color: '#BF5757',
                }}
              >
                zaváděcí ceny
              </span>
            </p>
          </BannerText>

          <Link to='https://www.resortcervenydvur.cz' target='_blank'>
            <Button
              brColor={`#000000`}
              textColor={`#000000`}
              bgColor={`transparent`}
              style={{ minWidth: 176 }}
              width={`176px`}
              height={`61px`}
            >
              Více o ubytování
            </Button>
          </Link>
        </BannerWrap>

        <Separator />

        <GridRow
          sm={1}
          md={2}
          cols={4}
          gap={`32px`}
          margin={`50px 0px 0px`}
          xlMargin={`32px 0px 0px`}
          mdMargin={`26px 0px 0px`}
        >
          <GridCol>
            <FooterCategoryTitle smMb={`20px`} xlMb={`36px`} mb={`59px`}>
              Vila Republika
            </FooterCategoryTitle>
            <FlexRow
              gap={`10px`}
              style={{
                flexDirection: 'column',
              }}
              column={'column'}
            >
              {navLinks.map((item, index) => {
                return (
                  <Link key={index} to={item.path}>
                    <FooterItem as='li'>{item.text}</FooterItem>
                  </Link>
                )
              })}
            </FlexRow>
          </GridCol>
          <GridCol>
            <FooterCategoryTitle smMb={`20px`} mb={`27px`}>
              Kontakt
            </FooterCategoryTitle>

            <FlexRow gap={`16px`} itemCenter>
              {/* <ImgWrapper smWidth={`70px`} xlWidth={`50px`}>
                <StyledImg w={`100%`} src={clientImg} alt="img" />
              </ImgWrapper> */}
              <FlexRow direction={`column`}>
                <Desc
                  align='left'
                  mb={`12px`}
                  fontWeight={`700`}
                  color={`white`}
                  smFontsize={`18px`}
                  style={{ marginTop: 30 }}
                >
                  Helena Morongová
                </Desc>
                <FooterItem>
                  <p style={{ marginBottom: 8 }}>+420 725 304 817</p>
                  <p style={{ textDecoration: 'underline', marginBottom: 30 }}>
                    info@vila-republika.cz
                  </p>

                  <p style={{ marginBottom: 8 }}>Mori Reality s.r.o.</p>

                  <p>Ič: 14426021 </p>
                </FooterItem>
              </FlexRow>
            </FlexRow>
          </GridCol>
          <GridCol>
            <FooterCategoryTitle smMb={`20px`} xlMb={`32px`} mb={`57px`}>
              Kde nás najdete
            </FooterCategoryTitle>

            <FooterItem>
              <p style={{ marginBottom: 8 }}>
                Osvobození 354,
                <br /> Velké Losiny, 788 15
              </p>
              <HoverWrap
                href='https://goo.gl/maps/EhQvkAzabw2sFAm18'
                target='_blank'
                style={{ textDecoration: 'underline', color: 'white' }}
              >
                Zobrazit na mapě
              </HoverWrap>
            </FooterItem>
          </GridCol>
          <GridCol>
            <FooterCategoryTitle
              smMb={`20px`}
              xlMb={`32px`}
              mb={`46px`}
              color={``}
              lgMb={``}
              mdMb={``}
            >
              Sledujte nás
            </FooterCategoryTitle>
            <GridRow
              sm={2}
              md={1}
              cols={1}
              gap={`12px`}
              margin={`0px 0px 0px`}
              xlMargin={`0px 0px 0px`}
              mdMargin={`0px 0px 30px`}
            >
              <HoverWrap
                href='https://www.facebook.com/VilaRepublika'
                target='_blank'
              >
                <FlexRow margin={`0px 0px 10px`} gap={`16px`} itemCenter>
                  <ImgWrapper smWidth={`40px`} xlWidth={`36px`}>
                    <StyledImg w={`100%`} src={facebook} alt='img' />
                  </ImgWrapper>
                  <FooterItem>
                    <p>
                      Vila republika <br /> na Facebooku
                    </p>
                  </FooterItem>
                </FlexRow>
              </HoverWrap>
              <HoverWrap
                href='https://www.instagram.com/vila_republika/'
                target='_blank'
              >
                <FlexRow gap={`16px`} itemCenter>
                  <ImgWrapper smWidth={`40px`} xlWidth={`36px`}>
                    <StyledImg w={`100%`} src={insta} alt='img' />
                  </ImgWrapper>
                  <FooterItem>
                    <p>
                      Vila republika <br /> na Instagramu
                    </p>
                  </FooterItem>
                </FlexRow>
              </HoverWrap>
            </GridRow>
          </GridCol>
        </GridRow>
        <FlexRow
          itemCenter
          style={{
            justifyContent: 'center',
          }}
        >
          <img src={footerlogo} alt='' />
        </FlexRow>
      </Container>
    </Wrapper>
  )
}

export const BannerWrap = styled.div`
  background: #f0e8d9;
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    justify-content: center;
    padding-right: 0px;
    padding-bottom: 30px;
    margin-top: 50px;
  }
`

export const BannerImg = styled.img`
  height: 150px;
  width: 250px;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
    height: 200px;
  }
`

export const BannerText = styled.p`
  color: #000;
  font-size: 23px;
  font-family: roc-grotesk-wide;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    font-size: 23px;
    margin-right: 0px;
    margin: 15px;
    text-align: center;
  }
`

export const Separator = styled.p`
  background: #3b4f5e;
  height: 2px;
  width: 100%;
  margin-top: 70px;
  margin-bottom: 70px;
`

export const HoverWrap = styled.a`
  cursor: pointer;
  trasition: 200ms;

  &:hover {
    opacity: 0.7;
  }
`

export default Footer
