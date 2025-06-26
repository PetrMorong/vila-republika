import React from 'react'
import {
  Container,
  FlexRow,
  GridRow,
  ImgWrapper,
  StyledImg,
  Wrapper,
} from '../../../Styled/Theme.styles'
import { Desc, SectionTitle } from '../../../Styled/Typography.styles'
import { buildImageUrl } from 'cloudinary-build-url'

const HistorieVelkych: React.FC = () => {
  const img = 'images/apartmany/spolProstory/zamek.jpg'

  return (
    <Wrapper
      mdPadding={`80px 0px 40px`}
      xlPadding={`100px 0px 50px`}
      padding={`176px 0px 60px`}
    >
      <Container>
        <SectionTitle xlMb={`60px`} mdMb={`40px`} mb={`100px`}>
          Staletá lázeňská historie <br /> Velkých Losin
        </SectionTitle>

        <GridRow sm={1} cols={2} gap={`32px`}>
          <FlexRow>
            <Desc
              margin={`auto`}
              width={`509px`}
              mdFontsize={`18px`}
              smMargin={`26px`}
              smFontsize={`18px`}
              smLineHeight={`26px`}
            >
              Velké Losiny se řadí k nejstarším moravským lázním. Usazené pod
              majestátnými vrcholky hor jsou vstupní branou Hrubého Jeseníku.
              Příznivé klimatické podmínky a čerstvý horský vzduch prospějí
              vašemu tělu i duši, stejně jako léčivé minerální prameny nebo
              unikátní termální lázně, které nemají v České republice obdoby. Za
              návštěvu stojí rovněž pozdně renesanční zámek s prohlídkovými
              okruhy či velkolosinská ruční papírna.
            </Desc>
          </FlexRow>

          <ImgWrapper>
            <StyledImg w={`100%`} src={img} alt='img' />
          </ImgWrapper>
        </GridRow>
      </Container>
    </Wrapper>
  )
}

export default HistorieVelkych
