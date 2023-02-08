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

const Exterier: React.FC = () => {
  const data = [
    {
      picture: buildImageUrl(
        'v1675799324/vilaRepublikaFoto/DSC08533-HDR_v7mlgu.jpg',
        {}
      ),
    },
    {
      picture: buildImageUrl(
        'v1675799326/vilaRepublikaFoto/DSC08542-HDR_aoyaqx.jpg',
        {}
      ),
    },
    {
      picture: buildImageUrl(
        'v1675799326/vilaRepublikaFoto/DSC08524-HDR_rx1gft.jpg',
        {}
      ),
    },

    {
      picture: buildImageUrl(
        'v1675799329/vilaRepublikaFoto/DSC08530-HDR_bw0gqc.jpg',
        {}
      ),
    },
  ]

  return (
    <Wrapper
      bgColor={`#FFFFFF`}
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
          Společné prostory
        </SectionTitle>
        <GridRow sm={2} md={3} cols={4} gap={`16px`}>
          {data.map((item, index) => {
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
          })}
        </GridRow>
      </Container>
    </Wrapper>
  )
}

export default Exterier
