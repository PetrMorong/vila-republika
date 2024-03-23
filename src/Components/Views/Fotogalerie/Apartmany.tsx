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
import Lightbox from 'react-spring-lightbox'
import leftArrowImg from '../../../images/LeftArrow.svg'
import { stringOrNumber } from '@cloudinary/url-gen/types/types'

const imageConfig = {
  transformations: {
    format: 'png',
    resize: {
      type: 'scale',
      width: 393 * 3,
      height: 270 * 3,
      aspectRatio: '16:9',
    },
  },
}

const Apartmany: React.FC = () => {
  const [showGallery, setShowGallery] = React.useState(false)
  const [carouselIndex, setCarouseIndex] = React.useState(0)

  const data1 = [
    // byt 1
    {
      picture: buildImageUrl(
        'v1673797462/vilaRepublikaFoto/byt1/DSC07382-HDR_x8twfm.jpg',
        imageConfig,
      ),
    },
    {
      picture: buildImageUrl(
        'v1673797459/vilaRepublikaFoto/byt1/DSC07388-HDR_hc02vu.jpg',
        imageConfig,
      ),
    },
    {
      picture: buildImageUrl(
        'v1673797461/vilaRepublikaFoto/byt1/DSC07418-HDR_oxlcy5.jpg',
        imageConfig,
      ),
    },
    {
      picture: buildImageUrl(
        'v1673797458/vilaRepublikaFoto/byt1/DSC07433-HDR_cy9sjv.jpg',
        imageConfig,
      ),
    },
  ]

  const data2 = [
    {
      picture: buildImageUrl(
        'v1677920414/vilaRepublikaFoto/byt 2/DSC09444-HDR_euewl0.jpg',
        imageConfig,
      ),
    },
    {
      picture: buildImageUrl(
        'v1677920409/vilaRepublikaFoto/byt 2/DSC09477-HDR_w4300b.jpg',
        imageConfig,
      ),
    },
    {
      picture: buildImageUrl(
        'v1677920541/vilaRepublikaFoto/byt 2/DSC09474-HDR_oysnn4.jpg',
        imageConfig,
      ),
    },
    {
      picture: buildImageUrl(
        'v1677920408/vilaRepublikaFoto/byt 2/DSC09483-HDR_oh3wvl.jpg',
        imageConfig,
      ),
    },
  ]

  const data3 = [
    {
      picture: buildImageUrl(
        'v1705755235/vilaRepublikaFoto/byt3/DSC08806-HDR_ped1k7.jpg',
        imageConfig,
      ),
    },
    {
      picture: buildImageUrl(
        'v1705755225/vilaRepublikaFoto/byt3/DSC08800-HDR_ek4sjr.jpg',
        imageConfig,
      ),
    },
    {
      picture: buildImageUrl(
        'v1705755250/vilaRepublikaFoto/byt3/DSC08867-HDR_mtgqmv.jpg',
        imageConfig,
      ),
    },
    {
      picture: buildImageUrl(
        'v1705755250/vilaRepublikaFoto/byt3/DSC08873-HDR_wjoscf.jpg',
        imageConfig,
      ),
    },
  ]

  const data4 = [
    {
      picture: buildImageUrl(
        'v1675802254/vilaRepublikaFoto/byt4/DSC08238-HDR_mzdbyr.jpg',
        imageConfig,
      ),
    },

    {
      picture: buildImageUrl(
        'v1675802258/vilaRepublikaFoto/byt4/DSC08274-HDR_hmhsy0.jpg',
        imageConfig,
      ),
    },

    {
      picture: buildImageUrl(
        'v1673797431/vilaRepublikaFoto/byt4/DSC07527-HDR_qq1xqb.jpg',
        imageConfig,
      ),
    },

    {
      picture: buildImageUrl(
        'v1675802258/vilaRepublikaFoto/byt4/DSC08259-HDR_asblp3.jpg',
        imageConfig,
      ),
    },
  ]

  const data5 = [
    {
      picture: buildImageUrl(
        'v1675799782/vilaRepublikaFoto/byt5/DSC08342-HDR_eqajrc.jpg',
        imageConfig,
      ),
    },

    {
      picture: buildImageUrl(
        'v1675799774/vilaRepublikaFoto/byt5/DSC08390-HDR_fkz4zz.jpg',
        imageConfig,
      ),
    },

    {
      picture: buildImageUrl(
        'v1675799776/vilaRepublikaFoto/byt5/DSC08363-HDR_yqdcwr.jpg',
        imageConfig,
      ),
    },

    {
      picture: buildImageUrl(
        'v1675799779/vilaRepublikaFoto/byt5/DSC08405-HDR_xba91c.jpg',
        imageConfig,
      ),
    },
  ]

  const data6 = [
    {
      picture: buildImageUrl(
        'v1675801410/vilaRepublikaFoto/byt6/DSC08322-HDR_gd7djq.jpg',
        imageConfig,
      ),
    },

    {
      picture: buildImageUrl(
        'v1675801405/vilaRepublikaFoto/byt6/DSC08316-HDR_jgxs2h.jpg',
        imageConfig,
      ),
    },

    {
      picture: buildImageUrl(
        'v1675801405/vilaRepublikaFoto/byt6/DSC08310-HDR_dccwul.jpg',
        imageConfig,
      ),
    },

    {
      picture: buildImageUrl(
        'v1675801404/vilaRepublikaFoto/byt6/DSC08301-HDR_mfiyhx.jpg',
        imageConfig,
      ),
    },
  ]

  const data7 = [
    {
      picture: buildImageUrl(
        'v1677920196/vilaRepublikaFoto/byt7/new/DSC09560-HDR_m7zz5r.jpg',
        imageConfig,
      ),
    },

    {
      picture: buildImageUrl(
        'v1677920190/vilaRepublikaFoto/byt7/new/DSC09611-HDR_uytxsa.jpg',
        imageConfig,
      ),
    },

    {
      picture: buildImageUrl(
        'v1677920193/vilaRepublikaFoto/byt7/new/DSC09569-HDR_gpopzr.jpg',
        imageConfig,
      ),
    },

    {
      picture: buildImageUrl(
        'v1677920201/vilaRepublikaFoto/byt7/new/DSC09554-HDR_ggz5al.jpg',
        imageConfig,
      ),
    },
  ]

  const images = [
    ...data1,
    ...data2,
    ...data3,
    ...data4,
    ...data5,
    ...data6,
    ...data7,
  ]

  const lightboxImages: any = images.map(image => {
    return { src: image.picture }
  })

  const handleNext = () => {
    if (carouselIndex === images.length - 1) {
      setCarouseIndex(0)
    } else {
      setCarouseIndex(carouselIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (carouselIndex === 0) {
      setCarouseIndex(images.length - 1)
    } else {
      setCarouseIndex(carouselIndex - 1)
    }
  }

  const renderRow = (images: typeof data1, rowIndex: number) =>
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
          <SlideWrapper
            onClick={() => {
              setShowGallery(true)
              setCarouseIndex(rowIndex * 4 + index)
            }}
          >
            <ImgWrapper>
              <StyledImg
                object={`cover`}
                h={`100%`}
                w={`100%`}
                src={item.picture}
                alt='img'
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

        {/* <TitleAps>Slunečný</TitleAps>
        <GridRow sm={1} md={3} cols={4} gap={`16px`}>
          {renderRow(data1, 0)}
        </GridRow> */}

        <TitleAps>Lázeňský</TitleAps>
        <GridRow sm={1} md={3} cols={4} gap={`16px`}>
          {renderRow(data2, 1)}
        </GridRow>

        <TitleAps>Jesenický</TitleAps>
        <GridRow sm={1} md={3} cols={4} gap={`16px`}>
          {renderRow(data3, 2)}
        </GridRow>

        <TitleAps>Pradědův</TitleAps>
        <GridRow sm={1} md={3} cols={4} gap={`16px`}>
          {renderRow(data4, 3)}
        </GridRow>

        <TitleAps>Losinský</TitleAps>
        <GridRow sm={1} md={3} cols={4} gap={`16px`}>
          {renderRow(data5, 4)}
        </GridRow>

        <TitleAps>Prvorepublikový</TitleAps>
        <GridRow sm={1} md={3} cols={4} gap={`16px`}>
          {renderRow(data6, 5)}
        </GridRow>

        <TitleAps>Prezidentský</TitleAps>
        <GridRow sm={1} md={3} cols={4} gap={`16px`}>
          {renderRow(data7, 6)}
        </GridRow>
      </Container>

      <Lightbox
        isOpen={showGallery}
        onPrev={handlePrevious}
        onNext={handleNext}
        images={lightboxImages}
        currentIndex={carouselIndex}
        renderHeader={() => (
          // @ts-ignore
          <div onClick={() => setShowGallery(false)} style={styleClose}>
            x
          </div>
        )}
        renderPrevButton={() => (
          // @ts-ignore
          <ArrowWrap onClick={handlePrevious} style={prevArrowStyle}>
            <img src={leftArrowImg}></img>
          </ArrowWrap>
        )}
        renderNextButton={() => (
          // @ts-ignore
          <ArrowWrap onClick={handleNext} style={nextArrowStyle}>
            <img
              style={{ transform: 'rotate(180deg)' }}
              src={leftArrowImg}
            ></img>
          </ArrowWrap>
        )}
        style={{ background: 'rgba(0,0,0,0.99)' }}
        onClose={() => setShowGallery(false)}
      />
    </Wrapper>
  )
}

export default Apartmany

const styleClose = {
  position: 'absolute',
  zIndex: 99,
  right: 20,
  top: 20,
  color: 'white',
  fontSize: 30,
  cursor: 'pointer',
}

const prevArrowStyle = {
  position: 'absolute',
  zIndex: 99,
  left: 0,
  top: '45%',
}

const nextArrowStyle = {
  position: 'absolute',
  zIndex: 99,
  right: 0,
  top: '45%',
}
const ArrowWrap = styled.div`
  width: 54px;
  height: 54px;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 44px;
    height: 44px;
  }
`

export const TitleAps = styled.h2`
  font-size: 23px;
  line-height: 25px;
  font-family: roc-grotesk-wide;
  margin-bottom: 10px;
  color: #262b3b;
  margin-top: 30px;
`
