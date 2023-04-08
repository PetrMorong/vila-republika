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

const imageConfig = {
  transformations: {
    resize: {
      type: 'scale',
      width: 393 * 2,
      height: 270 * 2,
      aspectRatio: '16:9',
    },
  },
}

const Fotogalerie: React.FC = () => {
  const data = [
    {
      picture: buildImageUrl(
        'v1680936968/vilaRepublikaFoto/wellness/DSC01755-HDR_jf1qnz.jpg',
        imageConfig
      ),
    },

    {
      picture: buildImageUrl(
        'v1680936961/vilaRepublikaFoto/wellness/DSC02016-HDR_onzspt.jpg',
        imageConfig
      ),
    },
    {
      picture: buildImageUrl(
        'v1680936960/vilaRepublikaFoto/wellness/DSC01740-HDR_nddukh.jpg',
        imageConfig
      ),
    },

    {
      picture: buildImageUrl(
        'v1680936976/vilaRepublikaFoto/wellness/DSC01861_jluirn.jpg',
        imageConfig
      ),
    },
    {
      picture: buildImageUrl(
        'v1680936973/vilaRepublikaFoto/wellness/DSC01791-HDR_xrkdf9.jpg',
        imageConfig
      ),
    },

    {
      picture: buildImageUrl(
        'v1680936963/vilaRepublikaFoto/wellness/DSC01821-HDR_wfg2sw.jpg',
        imageConfig
      ),
    },

    {
      picture: buildImageUrl(
        'v1680936961/vilaRepublikaFoto/wellness/DSC01809-HDR_ln8ljz.jpg',
        imageConfig
      ),
    },

    {
      picture: buildImageUrl(
        'v1680936972/vilaRepublikaFoto/wellness/DSC01866_b2dn34.jpg',
        imageConfig
      ),
    },
  ]

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
          Fotogalerie
        </SectionTitle>
        <GridRow sm={2} md={3} cols={4} between gap={`16px`}>
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

export default Fotogalerie
