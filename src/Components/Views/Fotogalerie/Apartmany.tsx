import React from 'react'
import {
  Container,
  FlexRow,
  GridRow,
  ImgWrapper,
  StyledImg,
  Wrapper,
} from '../../../Styled/Theme.styles'
import { SectionTitle } from '../../../Styled/Typography.styles'
import { SlideWrapper } from '../../../Styled/Swiper.styles'
import { buildImageUrl } from 'cloudinary-build-url'
import styled from 'styled-components'

const Apartmany: React.FC = () => {
  const data1 = [
    // byt 1
    {
      picture: buildImageUrl(
        'v1673797462/vilaRepublikaFoto/byt1/DSC07382-HDR_x8twfm.jpg',
        {}
      ),
    },
    {
      picture: buildImageUrl(
        'v1673797459/vilaRepublikaFoto/byt1/DSC07388-HDR_hc02vu.jpg',
        {}
      ),
    },
    {
      picture: buildImageUrl(
        'v1673797461/vilaRepublikaFoto/byt1/DSC07418-HDR_oxlcy5.jpg',
        {}
      ),
    },
    {
      picture: buildImageUrl(
        'v1673797458/vilaRepublikaFoto/byt1/DSC07433-HDR_cy9sjv.jpg',
        {}
      ),
    },
  ]

  const data4 = [
    {
      picture: buildImageUrl(
        'v1675802254/vilaRepublikaFoto/byt4/DSC08238-HDR_mzdbyr.jpg',
        {}
      ),
    },

    {
      picture: buildImageUrl(
        'v1675802258/vilaRepublikaFoto/byt4/DSC08274-HDR_hmhsy0.jpg',
        {}
      ),
    },

    {
      picture: buildImageUrl(
        'v1673797431/vilaRepublikaFoto/byt4/DSC07527-HDR_qq1xqb.jpg',
        {}
      ),
    },

    {
      picture: buildImageUrl(
        'v1675802258/vilaRepublikaFoto/byt4/DSC08259-HDR_asblp3.jpg',
        {}
      ),
    },
  ]

  const data5 = [
    {
      picture: buildImageUrl(
        'v1675799782/vilaRepublikaFoto/byt5/DSC08342-HDR_eqajrc.jpg',
        {}
      ),
    },

    {
      picture: buildImageUrl(
        'v1675799774/vilaRepublikaFoto/byt5/DSC08390-HDR_fkz4zz.jpg',
        {}
      ),
    },

    {
      picture: buildImageUrl(
        'v1675799776/vilaRepublikaFoto/byt5/DSC08363-HDR_yqdcwr.jpg',
        {}
      ),
    },

    {
      picture: buildImageUrl(
        'v1675799779/vilaRepublikaFoto/byt5/DSC08405-HDR_xba91c.jpg',
        {}
      ),
    },
  ]

  const data6 = [
    {
      picture: buildImageUrl(
        'v1675801410/vilaRepublikaFoto/byt6/DSC08322-HDR_gd7djq.jpg',
        {}
      ),
    },

    {
      picture: buildImageUrl(
        'v1675801405/vilaRepublikaFoto/byt6/DSC08316-HDR_jgxs2h.jpg',
        {}
      ),
    },

    {
      picture: buildImageUrl(
        'v1675801405/vilaRepublikaFoto/byt6/DSC08310-HDR_dccwul.jpg',
        {}
      ),
    },

    {
      picture: buildImageUrl(
        'v1675801404/vilaRepublikaFoto/byt6/DSC08301-HDR_mfiyhx.jpg',
        {}
      ),
    },
  ]

  const data7 = [
    {
      picture: buildImageUrl(
        'v1675799506/vilaRepublikaFoto/byt7/DSC08421-HDR_dfz6rg.jpg',
        {}
      ),
    },

    {
      picture: buildImageUrl(
        'v1675799512/vilaRepublikaFoto/byt7/DSC08460-HDR_cinhnp.jpg',
        {}
      ),
    },

    {
      picture: buildImageUrl(
        'v1675799514/vilaRepublikaFoto/byt7/DSC08436-HDR_axsnpn.jpg',
        {}
      ),
    },

    {
      picture: buildImageUrl(
        'v1675799505/vilaRepublikaFoto/byt7/DSC08469-HDR_elf6fr.jpg',
        {}
      ),
    },
  ]

  const renderRow = (images: typeof data1) =>
    images.map((item, index) => {
      return (
        <FlexRow
          gap={`15px`}
          lgGap={`12px`}
          direction={`column`}
          bgColor={``}
          padding={``}
          mdPadding={``}
          smPadding={``}
          itemCenter
          center
          key={index}
        >
          <SlideWrapper>
            <ImgWrapper>
              <StyledImg
                object={`cover`}
                h={`100%`}
                w={`100%`}
                src={item.picture}
                alt="img"
              />
            </ImgWrapper>
          </SlideWrapper>
        </FlexRow>
      )
    })

  return (
    <Wrapper
      bgColor={`#F0E8D9`}
      padding={`112px 0px 135px`}
      xlPadding={`100px 0px 80px`}
      mdPadding={`60px 0px 50px`}
    >
      <Container maxWidth={`1700px`}>
        <SectionTitle
          xlMb={`65px`}
          color={``}
          lgMb={``}
          mdMb={``}
          smMb={``}
          mb={`65px`}
          smFontSize={`30px`}
        >
          Apartmány
        </SectionTitle>

        <TitleAps>Slunečný</TitleAps>

        <GridRow sm={2} md={3} cols={4} gap={`16px`}>
          {renderRow(data1)}
        </GridRow>

        <TitleAps>Pradědův</TitleAps>
        <GridRow sm={2} md={3} cols={4} gap={`16px`}>
          {renderRow(data4)}
        </GridRow>

        <TitleAps>Losinský</TitleAps>
        <GridRow sm={2} md={3} cols={4} gap={`16px`}>
          {renderRow(data5)}
        </GridRow>

        <TitleAps>Prvorepublikový</TitleAps>
        <GridRow sm={2} md={3} cols={4} gap={`16px`}>
          {renderRow(data6)}
        </GridRow>

        <TitleAps>Prezidentský</TitleAps>
        <GridRow sm={2} md={3} cols={4} gap={`16px`}>
          {renderRow(data7)}
        </GridRow>
      </Container>
    </Wrapper>
  )
}

export default Apartmany

export const TitleAps = styled.h2`
  font-size: 23px;
  line-height: 25px;
  font-family: roc-grotesk-wide;
  margin-bottom: 10px;
  color: #262b3b;
  margin-top: 30px;
`
