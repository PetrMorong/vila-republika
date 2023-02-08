import React from 'react'
import {
  Container,
  FlexRow,
  GridRow,
  IconWrapper,
  ImgWrapper,
  StyledImg,
  Wrapper,
} from '../../../Styled/Theme.styles'
import {
  Desc,
  SectionTitle,
  VileSlideDesc,
  VileSlideTitle,
} from '../../../Styled/Typography.styles'
import { BsChevronRight } from 'react-icons/bs'
import { buildImageUrl } from 'cloudinary-build-url'

import { SlideContent, SlideWrapper } from '../../../Styled/Swiper.styles'

const SectionTwo: React.FC = () => {
  const img1 = buildImageUrl(
    'v1675799506/vilaRepublikaFoto/byt7/DSC08421-HDR_dfz6rg.jpg',
    {}
  )

  const img2 = buildImageUrl(
    'v1673863576/vilaRepublikaFoto/PastedGraphic-5_u0yq2i.png',
    {}
  )

  const slides = [
    {
      id: 1,
      img: img1,
      title: 'Designové apartmány',
      desc: 'Zcela unikátní vyznění a jiné barevné ladění. Každý z našich apartmánů je originál, navrhoval ho jiný architekt. Vždy je to ale minimalismus s poctou k prvorepublikové architektuře. Vyberte si styl, který vám sedne.',
    },
    {
      id: 2,
      img: img2,
      title: 'Privátní wellness (od 15.3.)',
      desc: 'Dokončujeme práce na wellness, otevřené bude od 15.3. Po aktivně stráveném dni na čerstvém vzduchu zasloužený relax. Rozmazlujte se v našem privátním wellness vonícím dřevem. Čeká zde na vás finská sauna, vířivka a soukromí. Svůj termín si můžete rezervovat online. Welness není v ceně pobytu',
    },
  ]

  return (
    <Wrapper
      bgColor={`#f0e8d9`}
      smPadding={`48px 0px 50px`}
      lgPadding={`60px 0px 70px`}
      xlPadding={`90px 0px 100px`}
      padding={`138px 0px 172px`}
    >
      <Container>
        <SectionTitle
          xlMb={`30px`}
          color={``}
          lgMb={``}
          mdMb={`22px`}
          smMb={``}
          mb={`51px`}
          smFontSize={``}
        >
          Vila Republika
        </SectionTitle>
        <Desc
          width={`908px`}
          margin={`0px auto 138px`}
          xlMargin={`0px auto 40px`}
          lgMargin={`0px auto 32px`}
          color={``}
          align={``}
          fontWeight={``}
          mb={``}
          xlFontsize={``}
          mdMargin={``}
          lgFontsize={``}
          mdFontsize={``}
          smMargin={``}
          smFontsize={`18px`}
          smLineHeight={`30px`}
          smalign={``}
        >
          Apartmánový dům Vila Republika leží pod svahy Hrubého Jeseníku v
          lázeňské obci Velké Losiny. Původní stavba z 30. let minulého století
          je citlivě zrekonstruována, krásné prvorepublikové prvky zachovány.
          Moderně pojaté, komfortní ubytování uspokojí i nejnáročnější
          klientelu. Vila Republika je díky své poloze ideální destinací pro
          trávení letní i zimní lyžařské dovolené. Na dosah budete mít termální
          lázně, malebný lázeňský park i čistou přírodu CHKO Jeseníky.
        </Desc>
      </Container>
      <Container>
        <GridRow md={1} cols={2}>
          {slides.map(({ id, img, title, desc }) => {
            return (
              <SlideWrapper key={id}>
                <ImgWrapper
                  style={{
                    minHeight: '500px',
                  }}
                >
                  <StyledImg
                    object={`cover`}
                    h={`100%`}
                    w={`100%`}
                    src={img}
                    alt="img"
                  />
                </ImgWrapper>
                <SlideContent>
                  <div style={{ marginTop: 'auto' }}>
                    <VileSlideTitle
                      color={``}
                      mb={``}
                      smMb={``}
                      fontSize={``}
                      smfontSize={``}
                      smLineHeight={``}
                    >
                      {title}
                    </VileSlideTitle>
                    <FlexRow gap={`16px`} between>
                      <VileSlideDesc
                        smFontSize={`16px`}
                        smLineHeight={`28px`}
                        width={`450px`}
                        color={`#F0E8D9`}
                        mb={``}
                      >
                        {desc}
                      </VileSlideDesc>
                      <IconWrapper size={`38px`} color={`white`}>
                        <BsChevronRight />
                      </IconWrapper>
                    </FlexRow>
                  </div>
                </SlideContent>
              </SlideWrapper>
            )
          })}
        </GridRow>
      </Container>
    </Wrapper>
  )
}

export default SectionTwo
