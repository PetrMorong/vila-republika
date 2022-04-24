import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import { Button } from "../../Styled/Button.styles";
import { FooterItem } from "../../Styled/Footer.styles";
import clientImg from "../../images/user.png";
import facebook from "../../images/facebook.svg";
import insta from "../../images/instagram.svg";
import footerlogo from "../../images/footerLogo.svg";
import {
  Container,
  GridCol,
  Wrapper,
  GridRow,
  FlexRow,
  ImgWrapper,
  StyledImg,
} from "../../Styled/Theme.styles";
import {
  Desc,
  FooterCategoryTitle,
  FooterDesc,
  FooterTitle,
} from "../../Styled/Typography.styles";
import styled from "styled-components";

const Footer: FunctionComponent<any> = ({ navLinks }) => {
  return (
    <Wrapper bgColor={`#262b3b`} xlPadding={`50px 0px`} padding={`100px 0px`}>
      <Container>
        <GridRow
          cols={4}
          lg={2}
          md={1}
          sm={1}
          gap={`32px`}
          margin={`0px 0px 50px`}
          xlMargin={`0px 0px 32px`}
          mdMargin={`0px 0px 26px`}
        >
          <GridCol mdJustifyContent={`center`}>
            <FooterTitle
              color={``}
              mdFontsize={`30px`}
              mdLineHeight={`40px`}
              textAlign={`left`}
              mdtextAlign={`center`}
            >
              <FooterTitle
                mdFontsize={`30px`}
                mdLineHeight={`40px`}
                textAlign={`left`}
                mdtextAlign={`center`}
                color={`#F0E8D9`}
                style={{ marginBottom: 0 }}
              >
                Rezervujte
              </FooterTitle>
              si apartmán <br />v Jeseníkách
            </FooterTitle>
          </GridCol>
          <GridCol
            lg={1}
            colSpan={2}
            direction={`row`}
            mdJustifyContent={`center`}
          >
            <FooterDesc
              color={``}
              mdFontSize={`18px`}
              mdLineHeight={`30px`}
              mdAlign={`center`}
            >
              Apartmány nabízíme v různých velikostech. Pro jednotlivce, páry i
              rozvětvenou rodinu. Zarezervovat si můžete také celou vilu – na
              oslavu narozenin či dovolenou s přáteli. V okolí budete mít
              desítky kilometrů sjezdovek, cyklostezek a turistických tras,
              termální lázně na dosah. Ozvěte se!
            </FooterDesc>
          </GridCol>
          <GridCol mdJustifyContent={`center`}>
            <Button style={{ minWidth: 176 }} width={`176px`} height={`61px`}>
              REZERVACE
            </Button>
          </GridCol>
        </GridRow>

        <Separator />

        <GridRow
          sm={1}
          md={2}
          cols={4}
          gap={`32px`}
          margin={`50px 0px 0px`}
          xlMargin={`32px 0px 0px`}
          mdMargin={`26px 0px 0px`}
        >
          <GridCol>
            <FooterCategoryTitle
              smMb={`20px`}
              xlMb={`36px`}
              mb={`59px`}
              color={``}
              lgMb={``}
              mdMb={``}
            >
              Vila Republika
            </FooterCategoryTitle>
            <FlexRow gap={`10px`} column>
              {navLinks.map((item, index) => {
                return (
                  <Link key={index} to={item.path}>
                    <FooterItem as="li">{item.text}</FooterItem>
                  </Link>
                );
              })}
            </FlexRow>
          </GridCol>
          <GridCol>
            <FooterCategoryTitle
              smMb={`20px`}
              mb={`27px`}
              xlMb={``}
              color={``}
              lgMb={``}
              mdMb={``}
            >
              Kontakt
            </FooterCategoryTitle>

            <FlexRow gap={`16px`} itemCenter>
              <ImgWrapper smWidth={`32px`} xlWidth={`50px`}>
                <StyledImg w={`100%`} src={clientImg} alt="img" />
              </ImgWrapper>
              <FlexRow direction={`column`}>
                <Desc
                  style={{ textAlign: "left", fontWeight: 600 }}
                  mb={`12px`}
                  fontWeight={`700`}
                  color={`white`}
                  margin={``}
                  width={``}
                  xlMargin={``}
                  xlFontsize={``}
                  lgMargin={``}
                  mdMargin={``}
                  lgFontsize={``}
                  mdFontsize={``}
                  smMargin={``}
                  smFontsize={``}
                >
                  Helena Morongová
                </Desc>
                <FooterItem>
                  <p style={{ marginBottom: 8 }}>+420 123 456 789</p>
                  <p style={{ textDecoration: "underline" }}>
                    info@vila-republika.cz
                  </p>
                </FooterItem>
              </FlexRow>
            </FlexRow>
          </GridCol>
          <GridCol>
            <FooterCategoryTitle
              smMb={`20px`}
              xlMb={`32px`}
              mb={`57px`}
              color={``}
              lgMb={``}
              mdMb={``}
            >
              Kde nás najdete
            </FooterCategoryTitle>

            <FooterItem>
              <p style={{ marginBottom: 8 }}>
                Osvobození 354,
                <br /> Velké Losiny, 788 15
              </p>
              <p style={{ textDecoration: "underline" }}>zobrazit na mape</p>
            </FooterItem>
          </GridCol>
          <GridCol>
            <FooterCategoryTitle
              smMb={`20px`}
              xlMb={`32px`}
              mb={`46px`}
              color={``}
              lgMb={``}
              mdMb={``}
            >
              Sledujte nás
            </FooterCategoryTitle>
            <FlexRow margin={`0px 0px 10px`} gap={`16px`} itemCenter>
              <ImgWrapper smWidth={`22px`} xlWidth={`36px`}>
                <StyledImg w={`100%`} src={facebook} alt="img" />
              </ImgWrapper>
              <FooterItem>
                <p>
                  Vila republika <br /> na Facebooku
                </p>
              </FooterItem>
            </FlexRow>
            <FlexRow gap={`16px`} itemCenter>
              <ImgWrapper smWidth={`22px`} xlWidth={`36px`}>
                <StyledImg w={`100%`} src={insta} alt="img" />
              </ImgWrapper>
              <FooterItem>
                <p>
                  Vila republika <br /> na Instagramu
                </p>
              </FooterItem>
            </FlexRow>
          </GridCol>
        </GridRow>
        <FlexRow
          itemCenter
          style={{
            justifyContent: "center",
          }}
        >
          <img src={footerlogo} alt="" />
        </FlexRow>
      </Container>
    </Wrapper>
  );
};

export const Separator = styled.p`
  background: #3b4f5e;
  height: 2px;
  width: 100%;
  margin-top: 70px;
  margin-bottom: 70px;
`;

export default Footer;
