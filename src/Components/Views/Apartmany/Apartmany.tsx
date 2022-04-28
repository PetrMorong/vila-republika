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
import img from "../../../images/h01 (1).png";
import usersIcon from "../../../images/users.svg";
import cardIcon from "../../../images/card.svg";
import cameraIcon from "../../../images/Icon feather-camera.svg";

import { Button, ButtonWrapper } from "../../../Styled/Button.styles";
import { SlideContent, SlideWrapper } from "../../../Styled/Swiper.styles";
const Apartmany: React.FC = () => {
  return (
    <Wrapper
      mdPadding={`130px 0px 30px`}
      xlPadding={`130px 0px 30px`}
      padding={`130px 0px 30px`}
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
          Apartmány
        </SectionTitle>

        <GridRow sm={1} cols={2} gap={`32px`} between margin={"0px 0px 120px"}>
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

                      <IconTitle
                        fontSize={`22px`}
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
                        Fotogalerie
                      </IconTitle>
                      <IconTitle
                        fontSize={`22px`}
                        linHeight={`30px`}
                        xlfontSize={`14px`}
                        mdFontSize={`14px`}
                        mdLineheight={``}
                        textAlign={`left`}
                        mdtextAlign={`center`}
                        smtextAlign={`center`}
                        smFontSize={`16px`}
                        smLineheight={``}
                        fontWeight={`400`}
                        xlfontWeight={`400`}
                        smFontWeight={`400`}
                        mdfontWeight={`400`}
                        color={`#262B3B`}
                        mb={""}
                        mdMargibBottom={``}
                        smMargibBottom={``}
                      >
                        15
                      </IconTitle>
                    </FlexRow>
                  </ButtonWrapper>
                </div>
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
                  Slunečný
                </IconTitle>
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
                  s terasou se vstupem na zahradu
                </IconTitle>
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
                        2-4 osoby
                      </IconTitle>
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
                        od 1500 Kč
                      </IconTitle>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

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
                mdFontsize={``}
                smMargin={``}
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
        </GridRow>

        <GridRow sm={1} cols={2} gap={`32px`} between margin={"0px 0px 120px"}>
          <FlexRow itemCenter between gap={`32px`} className="orderReverse">
            <div>
              <div>
                <IconTitle
                  fontSize={`38px`}
                  xlfontSize={`34px`}
                  mdFontSize={`30px`}
                  smFontSize={`28px`}
                  linHeight={`46px`}
                  mdLineheight={`20px`}
                  smLineheight={`26px`}
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
                  smMargibBottom={`10px`}
                >
                  Lázeňský
                </IconTitle>
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
                  s terasou se vstupem na zahradu
                </IconTitle>
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
                        2-4 osoby
                      </IconTitle>
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
                        od 1500 Kč
                      </IconTitle>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

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
                mdFontsize={``}
                smMargin={``}
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

                      <IconTitle
                        fontSize={`22px`}
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
                        Fotogalerie
                      </IconTitle>
                      <IconTitle
                        fontSize={`22px`}
                        linHeight={`30px`}
                        xlfontSize={`14px`}
                        mdFontSize={`14px`}
                        mdLineheight={``}
                        textAlign={`left`}
                        mdtextAlign={`center`}
                        smtextAlign={`center`}
                        smFontSize={`16px`}
                        smLineheight={``}
                        fontWeight={`400`}
                        xlfontWeight={`400`}
                        smFontWeight={`400`}
                        mdfontWeight={`400`}
                        color={`#262B3B`}
                        mb={""}
                        mdMargibBottom={``}
                        smMargibBottom={``}
                      >
                        15
                      </IconTitle>
                    </FlexRow>
                  </ButtonWrapper>
                </div>
              </SlideContent>
            </SlideWrapper>
          </div>
        </GridRow>

        <GridRow sm={1} cols={2} gap={`32px`} between margin={"0px 0px 120px"}>
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

                      <IconTitle
                        fontSize={`22px`}
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
                        Fotogalerie
                      </IconTitle>
                      <IconTitle
                        fontSize={`22px`}
                        linHeight={`30px`}
                        xlfontSize={`14px`}
                        mdFontSize={`14px`}
                        mdLineheight={``}
                        textAlign={`left`}
                        mdtextAlign={`center`}
                        smtextAlign={`center`}
                        smFontSize={`16px`}
                        smLineheight={``}
                        fontWeight={`400`}
                        xlfontWeight={`400`}
                        smFontWeight={`400`}
                        mdfontWeight={`400`}
                        color={`#262B3B`}
                        mb={""}
                        mdMargibBottom={``}
                        smMargibBottom={``}
                      >
                        15
                      </IconTitle>
                    </FlexRow>
                  </ButtonWrapper>
                </div>
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
                  Zelený
                </IconTitle>
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
                  s terasou se vstupem na zahradu
                </IconTitle>
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
                        2-4 osoby
                      </IconTitle>
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
                        od 1500 Kč
                      </IconTitle>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

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
                mdFontsize={``}
                smMargin={``}
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
        </GridRow>

        <GridRow sm={1} cols={2} gap={`32px`} between margin={"0px 0px 120px"}>
          <FlexRow itemCenter between gap={`32px`} className="orderReverse">
            <div>
              <div>
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
                  Pradědův
                </IconTitle>
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
                  s terasou se vstupem na zahradu
                </IconTitle>
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
                        2-4 osoby
                      </IconTitle>
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
                        od 1500 Kč
                      </IconTitle>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

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
                mdFontsize={``}
                smMargin={``}
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

                      <IconTitle
                        fontSize={`22px`}
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
                        Fotogalerie
                      </IconTitle>
                      <IconTitle
                        fontSize={`22px`}
                        linHeight={`30px`}
                        xlfontSize={`14px`}
                        mdFontSize={`14px`}
                        mdLineheight={``}
                        textAlign={`left`}
                        mdtextAlign={`center`}
                        smtextAlign={`center`}
                        smFontSize={`16px`}
                        smLineheight={``}
                        fontWeight={`400`}
                        xlfontWeight={`400`}
                        smFontWeight={`400`}
                        mdfontWeight={`400`}
                        color={`#262B3B`}
                        mb={""}
                        mdMargibBottom={``}
                        smMargibBottom={``}
                      >
                        15
                      </IconTitle>
                    </FlexRow>
                  </ButtonWrapper>
                </div>
              </SlideContent>
            </SlideWrapper>
          </div>
        </GridRow>

        <GridRow sm={1} cols={2} gap={`32px`} between margin={"0px 0px 120px"}>
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

                      <IconTitle
                        fontSize={`22px`}
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
                        Fotogalerie
                      </IconTitle>
                      <IconTitle
                        fontSize={`22px`}
                        linHeight={`30px`}
                        xlfontSize={`14px`}
                        mdFontSize={`14px`}
                        mdLineheight={``}
                        textAlign={`left`}
                        mdtextAlign={`center`}
                        smtextAlign={`center`}
                        smFontSize={`16px`}
                        smLineheight={``}
                        fontWeight={`400`}
                        xlfontWeight={`400`}
                        smFontWeight={`400`}
                        mdfontWeight={`400`}
                        color={`#262B3B`}
                        mb={""}
                        mdMargibBottom={``}
                        smMargibBottom={``}
                      >
                        15
                      </IconTitle>
                    </FlexRow>
                  </ButtonWrapper>
                </div>
              </SlideContent>
            </SlideWrapper>
          </div>
          <FlexRow
            itemCenter
            between
            gap={`32px`}
            padding={"0px 0px 0px 100px"}
          >
            <div>
              <div>
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
                  Bezejmenný
                </IconTitle>
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
                  s terasou se vstupem na zahradu
                </IconTitle>
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
                        2-4 osoby
                      </IconTitle>
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
                        od 1500 Kč
                      </IconTitle>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

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
                mdFontsize={``}
                smMargin={``}
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
        </GridRow>

        <GridRow sm={1} cols={2} gap={`32px`} between margin={"0px 0px 120px"}>
          <FlexRow itemCenter between gap={`32px`} className="orderReverse">
            <div>
              <div>
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
                  Prvorepublikový
                </IconTitle>
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
                  s terasou se vstupem na zahradu
                </IconTitle>
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
                        2-4 osoby
                      </IconTitle>
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
                        od 1500 Kč
                      </IconTitle>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

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
                mdFontsize={``}
                smMargin={``}
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

                      <IconTitle
                        fontSize={`22px`}
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
                        Fotogalerie
                      </IconTitle>
                      <IconTitle
                        fontSize={`22px`}
                        linHeight={`30px`}
                        xlfontSize={`14px`}
                        mdFontSize={`14px`}
                        mdLineheight={``}
                        textAlign={`left`}
                        mdtextAlign={`center`}
                        smtextAlign={`center`}
                        smFontSize={`16px`}
                        smLineheight={``}
                        fontWeight={`400`}
                        xlfontWeight={`400`}
                        smFontWeight={`400`}
                        mdfontWeight={`400`}
                        color={`#262B3B`}
                        mb={""}
                        mdMargibBottom={``}
                        smMargibBottom={``}
                      >
                        15
                      </IconTitle>
                    </FlexRow>
                  </ButtonWrapper>
                </div>
              </SlideContent>
            </SlideWrapper>
          </div>
        </GridRow>

        <GridRow sm={1} cols={2} gap={`32px`} between margin={"0px 0px 120px"}>
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

                      <IconTitle
                        fontSize={`22px`}
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
                        Fotogalerie
                      </IconTitle>
                      <IconTitle
                        fontSize={`22px`}
                        linHeight={`30px`}
                        xlfontSize={`14px`}
                        mdFontSize={`14px`}
                        mdLineheight={``}
                        textAlign={`left`}
                        mdtextAlign={`center`}
                        smtextAlign={`center`}
                        smFontSize={`16px`}
                        smLineheight={``}
                        fontWeight={`400`}
                        xlfontWeight={`400`}
                        smFontWeight={`400`}
                        mdfontWeight={`400`}
                        color={`#262B3B`}
                        mb={""}
                        mdMargibBottom={``}
                        smMargibBottom={``}
                      >
                        15
                      </IconTitle>
                    </FlexRow>
                  </ButtonWrapper>
                </div>
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
                  Prezidentský
                </IconTitle>
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
                  s terasou se vstupem na zahradu
                </IconTitle>
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
                        2-4 osoby
                      </IconTitle>
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
                        od 1500 Kč
                      </IconTitle>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

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
                mdFontsize={``}
                smMargin={``}
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
        </GridRow>
      </Container>
    </Wrapper>
  );
};

export default Apartmany;
