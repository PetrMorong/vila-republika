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
const Exterier: React.FC = () => {
  const data = [
    {
      picture: buildImageUrl(
        'v1680936650/vilaRepublikaFoto/DSC02010-HDR_ztnz7h.jpg',
        imageConfig
      ),
    },
    {
      picture: buildImageUrl(
        'v1680936646/vilaRepublikaFoto/DSC01992-HDR_aknq1t.jpg',
        imageConfig
      ),
    },
    {
      picture: buildImageUrl(
        'v1684391707/vilaRepublikaFoto/IMG_20230513_175649_vnf02j.jpg',
        imageConfig
      ),
    },
    {
      picture: buildImageUrl(
        'v1687499420/vilaRepublikaFoto/353110191_5813387308763230_7526979099478048553_n_wvpbf6.jpg',
        imageConfig
      ),
    },
    {
      picture: buildImageUrl(
        'v1675799326/vilaRepublikaFoto/DSC08524-HDR_rx1gft.jpg',
        imageConfig
      ),
    },
    {
      picture: buildImageUrl(
        'v1675799329/vilaRepublikaFoto/DSC08530-HDR_bw0gqc.jpg',
        imageConfig
      ),
    },

    // sklep
    {
      picture: buildImageUrl(
        'v1680942535/vilaRepublikaFoto/SpolecenskaMistnost/DSC01924-HDR_zldqdu.jpg',
        imageConfig
      ),
    },
    {
      picture: buildImageUrl(
        'v1680942700/vilaRepublikaFoto/SpolecenskaMistnost/DSC01975-min_p2jh6q.jpg',
        imageConfig
      ),
    },
    {
      picture: buildImageUrl(
        'v1680942534/vilaRepublikaFoto/SpolecenskaMistnost/DSC01918-HDR_ltphob.jpg',
        imageConfig
      ),
    },

    {
      picture: buildImageUrl(
        'v1680942527/vilaRepublikaFoto/SpolecenskaMistnost/DSC01951-HDR_r9c6ro.jpg',
        imageConfig
      ),
    },
    {
      picture: buildImageUrl(
        'v1680942701/vilaRepublikaFoto/SpolecenskaMistnost/DSC01974-min_gpkq1v.jpg',
        imageConfig
      ),
    },

    {
      picture: buildImageUrl(
        'v1680942699/vilaRepublikaFoto/SpolecenskaMistnost/DSC01987-min_ljoda4.jpg',
        imageConfig
      ),
    },

    // {
    //   picture: buildImageUrl(
    //     'v1680942698/vilaRepublikaFoto/SpolecenskaMistnost/DSC01971-min_vqmzdq.jpg',
    //     imageConfig
    //   ),
    // },
    // {
    //   picture: buildImageUrl(
    //     'v1680942527/vilaRepublikaFoto/SpolecenskaMistnost/DSC01958_ocv9lw.jpg',
    //     imageConfig
    //   ),
    // },
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
