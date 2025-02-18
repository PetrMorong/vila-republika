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
import Lightbox from 'react-spring-lightbox'
import leftArrowImg from '../../../images/LeftArrow.svg'
import styled from 'styled-components'

const imageConfig = {
  transformations: {
    resize: {
      type: 'scale',
      width: 393 * 3,
      height: 270 * 3,
      aspectRatio: '16:9',
    },
  },
}

const Wellness: React.FC = () => {
  const [showGallery, setShowGallery] = React.useState(false)
  const [carouselIndex, setCarouseIndex] = React.useState(0)

  const data = [
    {
      picture: '/images/apartmany/wellness/DSC01755-HDR_jf1qnz.jpg',
    },

    {
      picture: '/images/apartmany/wellness/DSC02016-HDR_onzspt.jpg',
    },

    {
      picture: '/images/apartmany/wellness/DSC01740-HDR_nddukh.jpg',
    },

    {
      picture: '/images/apartmany/wellness/DSC01861_jluirn.jpg',
    },

    {
      picture: '/images/apartmany/wellness/DSC01791-HDR_xrkdf9.jpg',
    },

    {
      picture: '/images/apartmany/wellness/DSC01821-HDR_wfg2sw.jpg',
    },

    {
      picture: '/images/apartmany/wellness/DSC01809-HDR_ln8ljz.jpg',
    },

    {
      picture: '/images/apartmany/wellness/DSC01866_b2dn34.jpg',
    },
  ]

  const images = [...data]

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
          Privátní Wellness
        </SectionTitle>
        <GridRow sm={1} md={3} cols={4} between gap={`16px`}>
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
                <SlideWrapper onClick={() => setShowGallery(true)}>
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
          })}
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

export default Wellness
