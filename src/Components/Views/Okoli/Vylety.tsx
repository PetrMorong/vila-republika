import React from "react";
import {
  Container,
  FlexRow,
  GridCol,
  GridRow,
  ImgWrapper,
  StyledImg,
  Wrapper,
} from "../../../Styled/Theme.styles";
import { IconTitle, SectionTitle } from "../../../Styled/Typography.styles";
import { SlideContent, SlideWrapper } from "../../../Styled/Swiper.styles";
import pic1 from "../../../images/vyl.png";
import cycle from "../../../images/cycle.svg";
import man from "../../../images/man.svg";
import car from "../../../images/car.svg";

import cameraIcon from "../../../images/Icon feather-camera.svg";

import { Button, ButtonWrapper } from "../../../Styled/Button.styles";

const Vylety: React.FC = () => {
  return (
    <Wrapper
      bgColor={`#F0E8D9`}
      padding={`112px 0px 120px`}
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
          Výlety
        </SectionTitle>

        {data.map((item, index) => {
          return (
            <GridRow
              sm={1}
              md={1}
              cols={4}
              gap={`16px`}
              key={index}
              style={{
                backgroundColor: "#FFFFFF",
                marginBottom: "30px",
              }}
            >
              <GridCol>
                <div>
                  <SlideWrapper>
                    <ImgWrapper>
                      <StyledImg w={`100%`} h={`100%`} src={pic1} alt="img" />
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
              </GridCol>
              <GridCol sm={1} md={1} colSpan={2} className="orderReverse">
                <FlexRow
                  gap={`15px`}
                  center
                  itemCenter
                  height={`100%`}
                  padding={`20px 50px`}
                  mdPadding={`20px`}
                  smPadding={`20px`}
                >
                  <div>
                    <IconTitle
                      fontSize={`30px`}
                      xlfontSize={`28px`}
                      mdFontSize={`28px`}
                      mdLineheight={`36px`}
                      textAlign={`left`}
                      smFontSize={`28px`}
                      smLineheight={`36px`}
                      fontWeight={`700`}
                      xlfontWeight={`700`}
                      smFontWeight={`700`}
                      mdfontWeight={`700`}
                      color={`#262B3B`}
                      mb={"15px"}
                      mdMargibBottom={`3px`}
                      linHeight={``}
                      mdtextAlign={`center`}
                      smtextAlign={`center`}
                      smMargibBottom={`15px`}
                    >
                      Název výletu
                    </IconTitle>
                    <IconTitle
                      fontSize={`18px`}
                      xlfontSize={`14px`}
                      mdFontSize={`14px`}
                      mdLineheight={`20px`}
                      textAlign={`left`}
                      smFontSize={`16px`}
                      smLineheight={`26px`}
                      fontWeight={`400`}
                      xlfontWeight={`400`}
                      smFontWeight={`400`}
                      mdfontWeight={`400`}
                      color={`#262B3B`}
                      mb={"15px"}
                      mdMargibBottom={`3px`}
                      linHeight={``}
                      mdtextAlign={`center`}
                      smtextAlign={`center`}
                      smMargibBottom={`15px`}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </IconTitle>
                    <IconTitle
                      fontSize={`20px`}
                      xlfontSize={`14px`}
                      mdFontSize={`14px`}
                      mdLineheight={`20px`}
                      textAlign={`left`}
                      smFontSize={`16px`}
                      smLineheight={`26px`}
                      fontWeight={`500`}
                      xlfontWeight={`400`}
                      smFontWeight={`400`}
                      mdfontWeight={`400`}
                      color={`#262B3B`}
                      mb={"15px"}
                      mdMargibBottom={`3px`}
                      linHeight={``}
                      mdtextAlign={`center`}
                      smtextAlign={`center`}
                      smMargibBottom={``}
                      style={{
                        textDecoration: "underline",
                      }}
                    >
                      Zobrazit více
                    </IconTitle>
                  </div>
                </FlexRow>
              </GridCol>
              <GridCol>
                <FlexRow
                  gap={`15px`}
                  direction={`column`}
                  mdDirection={`row`}
                  center
                  itemCenter
                  height={`100%`}
                  className="icon-cylce"
                >
                  <FlexRow
                    gap={`1px`}
                    direction={`column`}
                    center
                    itemCenter
                    mdPadding={`20px 0px 0px 15px `}
                    smPadding={`20px 0px 0px 15px`}
                  >
                    <IconTitle
                      fontSize={`20px`}
                      xlfontSize={`14px`}
                      mdFontSize={`14px`}
                      mdLineheight={`20px`}
                      textAlign={`center`}
                      smFontSize={`16px`}
                      smLineheight={`26px`}
                      fontWeight={`700`}
                      xlfontWeight={`700`}
                      smFontWeight={`700`}
                      mdfontWeight={`700`}
                      color={`#262B3B`}
                      mb={"15px"}
                      mdMargibBottom={`3px`}
                      linHeight={``}
                      mdtextAlign={``}
                      smtextAlign={``}
                      smMargibBottom={``}
                    >
                      Vzdálenost
                    </IconTitle>
                    <IconTitle
                      fontSize={`40px`}
                      xlfontSize={`30px`}
                      mdFontSize={`30px`}
                      mdLineheight={`38px`}
                      textAlign={`center`}
                      smFontSize={`30px`}
                      smLineheight={`38px`}
                      fontWeight={`700`}
                      xlfontWeight={`700`}
                      smFontWeight={`700`}
                      mdfontWeight={`700`}
                      color={`#262B3B`}
                      mb={"65px"}
                      mdMargibBottom={`30px`}
                      linHeight={``}
                      mdtextAlign={``}
                      smtextAlign={``}
                      smMargibBottom={``}
                    >
                      8 km
                    </IconTitle>
                  </FlexRow>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    direction={`row`}
                    smDirection={`row`}
                    itemCenter
                    center
                    mdPadding={`20px 15px 0px 0px `}
                    smPadding={`20px 15px 0px 0px`}
                  >
                    <StyledImg w={`50px`} src={cycle} alt="img" />
                    <StyledImg w={`50px`} src={man} alt="img" />
                    <StyledImg w={`50px`} src={car} alt="img" />
                  </FlexRow>
                </FlexRow>
              </GridCol>
            </GridRow>
          );
        })}
        <FlexRow
          gap={`15px`}
          center
          itemCenter
          height={`100%`}
          padding={`60px 10px 0px`}
        >
          <Button bgColor={`#F0E8D9`} brColor={`#262B3B`} textColor={`#262B3B`}>
            Zobrazit další výlety
          </Button>
        </FlexRow>
      </Container>
    </Wrapper>
  );
};

export default Vylety;

const data = [
  {
    title: "Název výletu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "Zobrazit více",
    distance: "8 km",
    picture: pic1,
  },
  {
    title: "Název výletu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "Zobrazit více",
    distance: "8 km",
    picture: pic1,
  },
  {
    title: "Název výletu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "Zobrazit více",
    distance: "8 km",
    picture: pic1,
  },
  {
    title: "Název výletu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "Zobrazit více",
    distance: "8 km",
    picture: pic1,
  },
  {
    title: "Název výletu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "Zobrazit více",
    distance: "8 km",
    picture: pic1,
  },
  {
    title: "Název výletu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "Zobrazit více",
    distance: "8 km",
    picture: pic1,
  },
  {
    title: "Název výletu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "Zobrazit více",
    distance: "8 km",
    picture: pic1,
  },
  {
    title: "Název výletu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "Zobrazit více",
    distance: "8 km",
    picture: pic1,
  },
];
