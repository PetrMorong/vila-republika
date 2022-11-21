import React from "react";
import {
  Container,
  FlexRow,
  GridRow,
  ImgWrapper,
  StyledImg,
  Wrapper,
} from "../../../Styled/Theme.styles";
import {
  Desc,
  IconTitle,
  SectionTitle,
} from "../../../Styled/Typography.styles";
import ap1Image from "../../../images/apartmany/ap1/DSC07382-HDR-min.jpg";
import ap4Image from "../../../images/apartmany/ap4/DSC07518-HDR-min.jpg";

import img from "../../../images/apartmany/ap1/DSC07445-HDR-min.jpg";
import usersIcon from "../../../images/users.svg";
import cardIcon from "../../../images/card.svg";
import cameraIcon from "../../../images/Icon feather-camera.svg";

import {
  Button,
  ButtonWrapper,
  ButtonWrapperFoto,
} from "../../../Styled/Button.styles";
import { SlideContent } from "../../../Styled/Swiper.styles";
import styled from "styled-components";

export const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    opacity: 0.9;
  }
`;

const Apartmany: React.FC = () => {
  return (
    <Wrapper
      mdPadding={`130px 0px 30px`}
      xlPadding={`130px 0px 30px`}
      padding={`130px 0px 30px`}
    >
      <Container>
        {/* AP 1 */}
        <GridRow sm={1} cols={2} gap={`5px`} between margin={"0px 0px 120px"}>
          <div>
            <SlideWrapper>
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={ap1Image} alt="img" />
                <ButtonWrapperFoto>
                  <FlexRow
                    gap={`12px`}
                    maxWidth={`350px`}
                    padding={`12px 12px`}
                    mdPadding={`12px 12px`}
                    smPadding={`12px 12px`}
                    itemCenter
                    center
                    bgColor={`#FFFFFF`}
                  >
                    <img src={cameraIcon} alt="" />
                    <FotogalerieText>Fotogalerie</FotogalerieText>
                  </FlexRow>
                </ButtonWrapperFoto>
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: "auto" }}></div>
              </SlideContent>
            </SlideWrapper>
          </div>
          <FlexRow
            itemCenter
            between
            gap={`32px`}
            padding={`0px 0px 0px 100px`}
          >
            <div>
              <div>
                <ApNameText>Slunečný</ApNameText>
                <ApPopisekText>s terasou se vstupem na zahradu</ApPopisekText>
              </div>
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                smGap={`60px`}
                mdDirection={`row`}
                itemCenter
                margin={`0px 0px 40px 0px`}
                smcenter={`center`}
              >
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={usersIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>6 osob</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={cardIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 2900 Kč</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

              <Desc
                align={`left`}
                width={`509px`}
                smLineHeight={`30px`}
                smalign={`center`}
                smFontsize={`18px`}
              >
                Optimistické interiéry, ve kterých se zabydlelo slunce. Slunečný
                apartmán se dvěma ložnicemi je díky své jižní orientaci plný
                denního světla. Má vlastní terasu a samostatný vstup na zahradu.
                <br />
                <br />
                Na čerstvém vzduchu budete moct trávit času, kolik se vám jen
                zachce. Uklidňující atmosféru zde navozují přírodní materiály a
                neutrální barvy. Zrenovované parkety a dřevěná obložení zase
                umocňují elegantní styl. Nápadité designové osvětlení od
                italského výrobce se stará o unikátní světelnou pohodu.
              </Desc>

              <ButtonWrapper>
                <Button margin={`35px 0px 10px 0px`}>Vytvořit rezervaci</Button>
              </ButtonWrapper>
            </div>
          </FlexRow>
        </GridRow>

        {/* AP 2 */}

        <GridRow sm={1} cols={2} gap={`32px`} between margin={"0px 0px 120px"}>
          <FlexRow itemCenter between gap={`32px`} className="orderReverse">
            <div>
              <div>
                <ApNameText>Lázeňský</ApNameText>
                <ApPopisekText>s přímým vstupem do wellness</ApPopisekText>
              </div>
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                smGap={`80px`}
                mdDirection={`row`}
                itemCenter
                margin={`0px 0px 40px 0px`}
                smcenter={`center`}
              >
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={usersIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>4 - 6 osob</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={cardIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 1900 kč</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

              <Desc
                align={`left`}
                width={`509px`}
                smFontsize={`18px`}
                smLineHeight={`30px`}
                smalign={`center`}
              >
                Optimistické interiéry, ve kterých se zabydlelo slunce. Slunečný
                apartmán se dvěma ložnicemi je díky své jižní orientaci plný
                denního světla. Má vlastní terasu a samostatný vstup na zahradu.
                <br />
                <br />
                Na čerstvém vzduchu budete moct trávit času, kolik se vám jen
                zachce. Uklidňující atmosféru zde navozují přírodní materiály a
                neutrální barvy. Zrenovované parkety a dřevěná obložení zase
                umocňují elegantní styl. Nápadité designové osvětlení od
                italského výrobce se stará o unikátní světelnou pohodu.
              </Desc>
              <ButtonWrapper>
                <Button margin={`35px 0px 10px 0px`}>Vytvořit rezervaci</Button>
              </ButtonWrapper>
            </div>
          </FlexRow>
          <div>
            <SlideWrapper>
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={img} alt="img" />
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: "auto" }}>
                  <ButtonWrapper>
                    <FlexRow
                      gap={`12px`}
                      maxWidth={`350px`}
                      padding={`12px 12px`}
                      mdPadding={`12px 12px`}
                      smPadding={`12px 12px`}
                      itemCenter
                      center
                      bgColor={`#FFFFFF`}
                    >
                      <img src={cameraIcon} alt="" />

                      <FotogalerieText>Fotogalerie</FotogalerieText>
                    </FlexRow>
                  </ButtonWrapper>
                </div>
              </SlideContent>
            </SlideWrapper>
          </div>
        </GridRow>

        {/* AP 4 */}
        <GridRow sm={1} cols={2} gap={`5px`} between margin={"0px 0px 120px"}>
          <div>
            <SlideWrapper>
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={ap4Image} alt="img" />
                <ButtonWrapperFoto>
                  <FlexRow
                    gap={`12px`}
                    maxWidth={`350px`}
                    padding={`12px 12px`}
                    mdPadding={`12px 12px`}
                    smPadding={`12px 12px`}
                    itemCenter
                    center
                    bgColor={`#FFFFFF`}
                  >
                    <img src={cameraIcon} alt="" />
                    <FotogalerieText>Fotogalerie</FotogalerieText>
                  </FlexRow>
                </ButtonWrapperFoto>
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: "auto" }}></div>
              </SlideContent>
            </SlideWrapper>
          </div>
          <FlexRow
            itemCenter
            between
            gap={`32px`}
            padding={`0px 0px 0px 100px`}
          >
            <div>
              <div>
                <ApNameText>Pradědův</ApNameText>
                <ApPopisekText>s terasou a krásným výhledem</ApPopisekText>
              </div>
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                smGap={`60px`}
                mdDirection={`row`}
                itemCenter
                margin={`0px 0px 40px 0px`}
                smcenter={`center`}
              >
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={usersIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>2 - 4 osoby</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={cardIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 1900 Kč</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

              <Desc
                align={`left`}
                width={`509px`}
                smLineHeight={`30px`}
                smalign={`center`}
                smFontsize={`18px`}
              >
                Optimistické interiéry, ve kterých se zabydlelo slunce. Slunečný
                apartmán se dvěma ložnicemi je díky své jižní orientaci plný
                denního světla. Má vlastní terasu a samostatný vstup na zahradu.
                <br />
                <br />
                Na čerstvém vzduchu budete moct trávit času, kolik se vám jen
                zachce. Uklidňující atmosféru zde navozují přírodní materiály a
                neutrální barvy. Zrenovované parkety a dřevěná obložení zase
                umocňují elegantní styl. Nápadité designové osvětlení od
                italského výrobce se stará o unikátní světelnou pohodu.
              </Desc>

              <ButtonWrapper>
                <Button margin={`35px 0px 10px 0px`}>Vytvořit rezervaci</Button>
              </ButtonWrapper>
            </div>
          </FlexRow>
        </GridRow>

        {/* AP 5 */}

        <GridRow sm={1} cols={2} gap={`32px`} between margin={"0px 0px 120px"}>
          <FlexRow itemCenter between gap={`32px`} className="orderReverse">
            <div>
              <div>
                <ApNameText>Losinský</ApNameText>
                <ApPopisekText>s balkonem a výhledem na kostel</ApPopisekText>
              </div>
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                smGap={`80px`}
                mdDirection={`row`}
                itemCenter
                margin={`0px 0px 40px 0px`}
                smcenter={`center`}
              >
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={usersIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>4 - 6 osob</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={cardIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 1900 kč</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

              <Desc
                align={`left`}
                width={`509px`}
                smFontsize={`18px`}
                smLineHeight={`30px`}
                smalign={`center`}
              >
                Optimistické interiéry, ve kterých se zabydlelo slunce. Slunečný
                apartmán se dvěma ložnicemi je díky své jižní orientaci plný
                denního světla. Má vlastní terasu a samostatný vstup na zahradu.
                <br />
                <br />
                Na čerstvém vzduchu budete moct trávit času, kolik se vám jen
                zachce. Uklidňující atmosféru zde navozují přírodní materiály a
                neutrální barvy. Zrenovované parkety a dřevěná obložení zase
                umocňují elegantní styl. Nápadité designové osvětlení od
                italského výrobce se stará o unikátní světelnou pohodu.
              </Desc>
              <ButtonWrapper>
                <Button margin={`35px 0px 10px 0px`}>Vytvořit rezervaci</Button>
              </ButtonWrapper>
            </div>
          </FlexRow>
          <div>
            <SlideWrapper>
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={img} alt="img" />
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: "auto" }}>
                  <ButtonWrapper>
                    <FlexRow
                      gap={`12px`}
                      maxWidth={`350px`}
                      padding={`12px 12px`}
                      mdPadding={`12px 12px`}
                      smPadding={`12px 12px`}
                      itemCenter
                      center
                      bgColor={`#FFFFFF`}
                    >
                      <img src={cameraIcon} alt="" />

                      <FotogalerieText>Fotogalerie</FotogalerieText>
                    </FlexRow>
                  </ButtonWrapper>
                </div>
              </SlideContent>
            </SlideWrapper>
          </div>
        </GridRow>

        {/* AP 6 */}
        <GridRow sm={1} cols={2} gap={`5px`} between margin={"0px 0px 120px"}>
          <div>
            <SlideWrapper>
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={ap1Image} alt="img" />
                <ButtonWrapperFoto>
                  <FlexRow
                    gap={`12px`}
                    maxWidth={`350px`}
                    padding={`12px 12px`}
                    mdPadding={`12px 12px`}
                    smPadding={`12px 12px`}
                    itemCenter
                    center
                    bgColor={`#FFFFFF`}
                  >
                    <img src={cameraIcon} alt="" />
                    <FotogalerieText>Fotogalerie</FotogalerieText>
                  </FlexRow>
                </ButtonWrapperFoto>
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: "auto" }}></div>
              </SlideContent>
            </SlideWrapper>
          </div>
          <FlexRow
            itemCenter
            between
            gap={`32px`}
            padding={`0px 0px 0px 100px`}
          >
            <div>
              <div>
                <ApNameText>Prvorepublikový</ApNameText>
                <ApPopisekText>s elegancí a vanou</ApPopisekText>
              </div>
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                smGap={`60px`}
                mdDirection={`row`}
                itemCenter
                margin={`0px 0px 40px 0px`}
                smcenter={`center`}
              >
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={usersIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>6 osob</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={cardIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 2900 Kč</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

              <Desc
                align={`left`}
                width={`509px`}
                smLineHeight={`30px`}
                smalign={`center`}
                smFontsize={`18px`}
              >
                Optimistické interiéry, ve kterých se zabydlelo slunce. Slunečný
                apartmán se dvěma ložnicemi je díky své jižní orientaci plný
                denního světla. Má vlastní terasu a samostatný vstup na zahradu.
                <br />
                <br />
                Na čerstvém vzduchu budete moct trávit času, kolik se vám jen
                zachce. Uklidňující atmosféru zde navozují přírodní materiály a
                neutrální barvy. Zrenovované parkety a dřevěná obložení zase
                umocňují elegantní styl. Nápadité designové osvětlení od
                italského výrobce se stará o unikátní světelnou pohodu.
              </Desc>

              <ButtonWrapper>
                <Button margin={`35px 0px 10px 0px`}>Vytvořit rezervaci</Button>
              </ButtonWrapper>
            </div>
          </FlexRow>
        </GridRow>

        {/* AP 7 */}

        <GridRow sm={1} cols={2} gap={`32px`} between margin={"0px 0px 120px"}>
          <FlexRow itemCenter between gap={`32px`} className="orderReverse">
            <div>
              <div>
                <ApNameText>Prezidentský</ApNameText>
                <ApPopisekText>s krásou původního krovu</ApPopisekText>
              </div>
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                smGap={`80px`}
                mdDirection={`row`}
                itemCenter
                margin={`0px 0px 40px 0px`}
                smcenter={`center`}
              >
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={usersIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>4 - 6 osob</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={cardIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 1900 kč</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

              <Desc
                align={`left`}
                width={`509px`}
                smFontsize={`18px`}
                smLineHeight={`30px`}
                smalign={`center`}
              >
                Optimistické interiéry, ve kterých se zabydlelo slunce. Slunečný
                apartmán se dvěma ložnicemi je díky své jižní orientaci plný
                denního světla. Má vlastní terasu a samostatný vstup na zahradu.
                <br />
                <br />
                Na čerstvém vzduchu budete moct trávit času, kolik se vám jen
                zachce. Uklidňující atmosféru zde navozují přírodní materiály a
                neutrální barvy. Zrenovované parkety a dřevěná obložení zase
                umocňují elegantní styl. Nápadité designové osvětlení od
                italského výrobce se stará o unikátní světelnou pohodu.
              </Desc>
              <ButtonWrapper>
                <Button margin={`35px 0px 10px 0px`}>Vytvořit rezervaci</Button>
              </ButtonWrapper>
            </div>
          </FlexRow>
          <div>
            <SlideWrapper>
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={img} alt="img" />
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: "auto" }}>
                  <ButtonWrapper>
                    <FlexRow
                      gap={`12px`}
                      maxWidth={`350px`}
                      padding={`12px 12px`}
                      mdPadding={`12px 12px`}
                      smPadding={`12px 12px`}
                      itemCenter
                      center
                      bgColor={`#FFFFFF`}
                    >
                      <img src={cameraIcon} alt="" />

                      <FotogalerieText>Fotogalerie</FotogalerieText>
                    </FlexRow>
                  </ButtonWrapper>
                </div>
              </SlideContent>
            </SlideWrapper>
          </div>
        </GridRow>
      </Container>
    </Wrapper>
  );
};

const ApPopisekText = ({ children }: any) => (
  <IconTitle
    fontSize={`20px`}
    xlfontSize={`18px`}
    mdFontSize={`18px`}
    smFontSize={`18px`}
    linHeight={`28px`}
    mdLineheight={`26px`}
    smLineheight={`26px`}
    textAlign={`left`}
    mdtextAlign={`center`}
    smtextAlign={`center`}
    fontWeight={`400`}
    xlfontWeight={`400`}
    mdfontWeight={`400`}
    smFontWeight={`400`}
    color={`#262B3B`}
    mb={"25px"}
    mdMargibBottom={`2px`}
    smMargibBottom={`30px`}
  >
    {children}
  </IconTitle>
);

const ApNameText = ({ children }: any) => (
  <IconTitle
    fontSize={`38px`}
    xlfontSize={`34px`}
    mdFontSize={`30px`}
    smFontSize={`28px`}
    linHeight={`46px`}
    mdLineheight={`38px`}
    smLineheight={`36px`}
    fontWeight={`700`}
    xlfontWeight={`700`}
    mdfontWeight={`700`}
    smFontWeight={`700`}
    textAlign={`left`}
    mdtextAlign={`center`}
    smtextAlign={`center`}
    color={`#262B3B`}
    mb={"16px"}
    mdMargibBottom={`16px`}
    smMargibBottom={`2px`}
  >
    {children}
  </IconTitle>
);

const FotogalerieText = ({ children }: any) => (
  <IconTitle
    fontSize={`16px`}
    linHeight={`30px`}
    xlfontSize={`14px`}
    mdFontSize={`14px`}
    mdLineheight={``}
    textAlign={`left`}
    mdtextAlign={`center`}
    smtextAlign={`center`}
    smFontSize={`16px`}
    smLineheight={``}
    fontWeight={`600`}
    xlfontWeight={`400`}
    smFontWeight={`400`}
    mdfontWeight={`400`}
    color={`#262B3B`}
    mb={""}
    mdMargibBottom={``}
    smMargibBottom={``}
  >
    {children}
  </IconTitle>
);

const SmallBoldText = ({ children }: any) => (
  <IconTitle
    fontSize={`18px`}
    xlfontSize={`18px`}
    mdFontSize={`18px`}
    smFontSize={`18px`}
    linHeight={`26px`}
    mdLineheight={`20px`}
    smLineheight={`26px`}
    textAlign={`left`}
    mdtextAlign={`center`}
    smtextAlign={`center`}
    fontWeight={`600`}
    xlfontWeight={`700`}
    mdfontWeight={`700`}
    smFontWeight={`700`}
    color={`#262B3B`}
    mb={"2px"}
    mdMargibBottom={`2px`}
    smMargibBottom={`10px`}
  >
    {children}
  </IconTitle>
);

export default Apartmany;
