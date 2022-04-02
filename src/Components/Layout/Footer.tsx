import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import { Button } from "../../Styled/Button.styles";
import { FooterItem } from "../../Styled/Footer.styles";
import clientImg from "../../images/user.png";
import facebook from "../../images/facebook.png";
import insta from "../../images/instagram.png";

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
const Footer: FunctionComponent<any> = ({ navLinks }) => {
  return (
    <Wrapper bgColor={`#262b3b`} xlPadding={`50px 0px`} padding={`100px 0px`}>
      <Container>
        <GridRow
          sm={1}
          lg={2}
          cols={4}
          gap={`32px`}
          margin={`0px 0px 50px`}
          xlMargin={`0px 0px 32px`}
          mdMargin={`0px 0px 26px`}
        >
          <GridCol>
            <FooterTitle margin={`0px`}>
              Rezervujte si apartmán v Jeseníkách
            </FooterTitle>
          </GridCol>
          <GridCol lg={1} colSpan={2}>
            <FooterDesc>
              Apartmány nabízíme v různých velikostech. Pro jednotlivce, páry i
              rozvětvenou rodinu. Zarezervovat si můžete také celou vilu – na
              oslavu narozenin či dovolenou s přáteli. V okolí budete mít
              desítky kilometrů sjezdovek, cyklostezek a turistických tras,
              termální lázně na dosah. Ozvěte se!
            </FooterDesc>
          </GridCol>
          <GridCol>
            <Button>REZERVACE</Button>
          </GridCol>
        </GridRow>

        <hr />

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
            <FooterCategoryTitle smMb={`20px`} xlMb={`36px`} mb={`59px`}>
              Vila Republik
            </FooterCategoryTitle>
            <FlexRow gap={`10px`} column>
              {navLinks.map(({ id, text, path }) => {
                return (
                  <Link key={id} to={path}>
                    <FooterItem>{text}</FooterItem>
                  </Link>
                );
              })}
            </FlexRow>
          </GridCol>
          <GridCol>
            <FooterCategoryTitle smMb={`20px`} mb={`27px`}>
              KONTAKT
            </FooterCategoryTitle>

            <FlexRow gap={`16px`} itemCenter>
              <ImgWrapper smWidth={`32px`} xlWidth={`50px`}>
                <StyledImg w={`100%`} src={clientImg} alt="img" />
              </ImgWrapper>
              <FlexRow direction={`column`}>
                <Desc
                  mb={`12px`}
                  fontWeight={`700`}
                  color={`white`}
                  textAlign="left"
                >
                  Petr Morong
                </Desc>
                <FooterItem>
                  <p style={{ marginBottom: 8 }}>+420 123 456 789</p>
                  <p>info@yilarpublika.cz</p>
                </FooterItem>
              </FlexRow>
            </FlexRow>
          </GridCol>
          <GridCol>
            <FooterCategoryTitle smMb={`20px`} xlMb={`32px`} mb={`57px`}>
              Kde nas najdete
            </FooterCategoryTitle>

            <FooterItem>
              <p style={{ marginBottom: 8 }}>
                Osvobození 354,
                <br /> Velké Losiny, 788 15
              </p>
              <p>zpbrazit na mape.cz</p>
            </FooterItem>
          </GridCol>
          <GridCol>
            <FooterCategoryTitle smMb={`20px`} xlMb={`32px`} mb={`46px`}>
              sledujteNas
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
      </Container>
    </Wrapper>
  );
};

export default Footer;
