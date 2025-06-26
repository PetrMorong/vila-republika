import React from 'react'
import {
  Container,
  FlexRow,
  GridRow,
  ImgWrapper,
  SectionBorderLines,
  StyledImg,
  Wrapper,
  WrapperSectionBorderLines,
} from '../../../Styled/Theme.styles'
import {
  Desc,
  IconTitle,
  SectionTitle,
} from '../../../Styled/Typography.styles'
import { Button, ButtonWrapper } from '../../../Styled/Button.styles'
import { buildImageUrl } from 'cloudinary-build-url'
import styled from 'styled-components'

const ProVerejnost: React.FC = () => {
  const img = '/images/apartmany/wellness/DSC02016-HDR_onzspt.jpg'

  return (
    <Wrapper
      mdPadding={`130px 0px 148px`}
      xlPadding={`130px 0px 148px`}
      padding={`130px 0px 148px`}
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
          Cena
        </SectionTitle>

        <GridRow sm={1} lg={1} cols={2} gap={`32px`} between>
          <FlexRow itemCenter className='orderReverse'>
            <div>
              <div
                style={{
                  marginBottom: '50px',
                }}
              >
                <RowWrap>
                  <div>
                    <IconTitle
                      fontSize={`28px`}
                      xlfontSize={`20px`}
                      mdFontSize={`20px`}
                      mdLineheight={`20px`}
                      textAlign={`left`}
                      smFontSize={`20px`}
                      smLineheight={`26px`}
                      fontWeight={`700`}
                      xlfontWeight={`700`}
                      smFontWeight={`700`}
                      mdfontWeight={`700`}
                      color={`#262B3B`}
                      mb={'0px'}
                      mdMargibBottom={`0px`}
                      mdtextAlign={`center`}
                      smtextAlign={`center`}
                      smMargibBottom={``}
                    >
                      od 1590 Kč na 90min
                    </IconTitle>
                  </div>
                </RowWrap>
              </div>
              <Desc
                color={``}
                fontWeight={``}
                mb={``}
                margin={``}
                align={`left`}
                width={`509px`}
                xlMargin={``}
                xlFontsize={``}
                lgMargin={``}
                mdMargin={``}
                lgFontsize={``}
                mdFontsize={`18px`}
                smMargin={``}
                smFontsize={`18px`}
                smLineHeight={`30px`}
              >
                V době, kdy naše privátní wellness nebudou využívat ubytovaní
                hosté, je přístupné i pro veřejnost.
                <br />
                <br />
                Svůj termín si můžete zarezervovat na našich webových stránkách,
                a to každý den včetně víkendů.
              </Desc>
              <div>
                <ButtonWrapper>
                  <a
                    href='https://vila-republika.reservio.com/booking/business/service?businessId=89b43bc7-3262-4446-89fc-eda62a80fa7c'
                    target='_blank'
                  >
                    <Button margin={`50px 0px 0px 0px`}>
                      Vytvořit rezervaci
                    </Button>
                  </a>
                </ButtonWrapper>
              </div>
            </div>
          </FlexRow>

          <ImgWrapper>
            <StyledImg w={`100%`} src={img} alt='img' />
          </ImgWrapper>
        </GridRow>
      </Container>
    </Wrapper>
  )
}

export const RowWrap = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 640px) {
  }
`

export default ProVerejnost
