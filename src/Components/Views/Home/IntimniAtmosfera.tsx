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

const IntimniAtmosfera: React.FC = () => {
  const img = 'images/apartmany/byt7/DSC08421-HDR_dfz6rg.jpg'

  return (
    <Wrapper
      mdPadding={`80px 0px 40px`}
      xlPadding={`100px 0px 0px`}
      padding={`176px 0px 0px`}
    >
      <Container>
        <SectionTitle
          xlMb={`60px`}
          mdMb={`40px`}
          mb={`100px`}
          color={``}
          lgMb={``}
          smMb={``}
          smFontSize={``}
        >
          Intimní atmosféra
          <br />
          prvorepublikové vily
        </SectionTitle>

        <GridRow sm={1} cols={2} gap={`32px`}>
          <ImgWrapper>
            <StyledImg w={`100%`} src={img} alt='img' />
          </ImgWrapper>

          <FlexRow>
            <Desc
              margin={`auto`}
              width={`509px`}
              mdFontsize={`18px`}
              smMargin={`26px`}
              smFontsize={`18px`}
              smLineHeight={`26px`}
            >
              Vila Republika na vás dýchne lázeňskou historií. Luxusní ubytování
              předčí všechna vaše očekávání. Moderní interiéry jednotlivých
              apartmánů mají společný jednotící prvek – prvorepublikové
              elementy. Ať už jsou to repasované dveře, původní parkety, dřevěná
              obložení nebo citlivě vybrané designové doplňky – vše ladí v jeden
              estetický celek. Důraz na kvalitní vybavení je zárukou nebeského
              pohodlí.
            </Desc>
          </FlexRow>
        </GridRow>
      </Container>
    </Wrapper>
  )
}

export default IntimniAtmosfera
