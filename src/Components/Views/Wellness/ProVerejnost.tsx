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
import img from '../../../images/DJI_.png'
import { Button, ButtonWrapper } from '../../../Styled/Button.styles'
const ProVerejnost: React.FC = () => {
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
          Pro veřejnost
        </SectionTitle>

        <GridRow sm={1} lg={1} cols={2} gap={`32px`} between>
          <FlexRow itemCenter className="orderReverse">
            <div>
              <div
                style={{
                  marginBottom: '50px',
                }}
              >
                <FlexRow gap={`72px`} lgGap={`40px`} center>
                  <div>
                    <IconTitle
                      fontSize={`18px`}
                      xlfontSize={`14px`}
                      mdFontSize={`14px`}
                      mdLineheight={`20px`}
                      textAlign={`left`}
                      smFontSize={`16px`}
                      smLineheight={`26px`}
                      fontWeight={`600`}
                      xlfontWeight={`600`}
                      smFontWeight={`600`}
                      mdfontWeight={`600`}
                      color={`#262B3B`}
                      mb={'12px'}
                      mdMargibBottom={`12px`}
                      mdtextAlign={`center`}
                      smtextAlign={`center`}
                      smMargibBottom={``}
                    >
                      OTEVÍRACÍ DOBA
                    </IconTitle>
                    <IconTitle
                      fontSize={`30px`}
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
                      Bude otevřeno 31.3.
                    </IconTitle>
                  </div>
                  <div>
                    <IconTitle
                      fontSize={`18px`}
                      xlfontSize={`18px`}
                      mdFontSize={`18px`}
                      mdLineheight={`20px`}
                      textAlign={`left`}
                      smFontSize={`18px`}
                      smLineheight={`26px`}
                      fontWeight={`600`}
                      xlfontWeight={`600`}
                      smFontWeight={`600`}
                      mdfontWeight={`600`}
                      color={`#262B3B`}
                      mb={'12px'}
                      mdMargibBottom={`12px`}
                      mdtextAlign={`center`}
                      smtextAlign={`center`}
                      smMargibBottom={``}
                    >
                      CENA
                    </IconTitle>
                    <IconTitle
                      fontSize={`20px`}
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
                      990 Kč za hodinu
                    </IconTitle>
                  </div>
                </FlexRow>
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
                Svůj termín si můžete zarezervovat na bašich webových stránkách,
                a to každý den včetně víkendů v době od X do Y hodin.
              </Desc>
              <div>
                <ButtonWrapper>
                  <a
                    href="https://vila-republika.reservio.com/booking/business/service?businessId=89b43bc7-3262-4446-89fc-eda62a80fa7c"
                    target="_blank"
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
            <StyledImg w={`100%`} src={img} alt="img" />
          </ImgWrapper>
        </GridRow>
      </Container>
    </Wrapper>
  )
}

export default ProVerejnost
