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
import { SlideWrapper } from "../../../Styled/Swiper.styles";
import pic1 from "../../../images/vyl.png";
import cycle from "../../../images/cycle.svg";
import man from "../../../images/man.svg";
import car from "../../../images/car.svg";
import { Button } from "../../../Styled/Button.styles";

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
              sm={2}
              md={3}
              cols={4}
              gap={`16px`}
              key={index}
              style={{
                backgroundColor: "#FFFFFF",
                marginBottom: "30px",
              }}
            >
              <GridCol>
                <SlideWrapper>
                  <ImgWrapper>
                    <StyledImg
                      object={`cover`}
                      h={`100%`}
                      w={`100%`}
                      src={item.picture}
                      alt="img"
                    />
                  </ImgWrapper>
                </SlideWrapper>
              </GridCol>
              <GridCol colSpan={2}>
                <FlexRow
                  gap={`15px`}
                  center
                  itemCenter
                  height={`100%`}
                  padding={`0px 50px`}
                >
                  <div>
                    <IconTitle
                      fontSize={`30px`}
                      xlfontSize={`14px`}
                      mdFontSize={`14px`}
                      mdLineheight={`20px`}
                      textAlign={`left`}
                      smFontSize={`16px`}
                      smLineheight={`26px`}
                      fontWeight={`700`}
                      xlfontWeight={`400`}
                      smFontWeight={`400`}
                      mdfontWeight={`400`}
                      color={`#262B3B`}
                      mb={"15px"}
                      mdMargibBottom={`3px`}
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
                      fontWeight={`300`}
                      xlfontWeight={`300`}
                      smFontWeight={`300`}
                      mdfontWeight={`300`}
                      color={`#262B3B`}
                      mb={"15px"}
                      mdMargibBottom={`3px`}
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
                    >
                      Zobrazit více
                    </IconTitle>
                  </div>
                </FlexRow>
              </GridCol>
              <GridCol>
                <FlexRow gap={`15px`} center itemCenter height={`100%`}>
                  <div>
                    <IconTitle
                      fontSize={`20px`}
                      xlfontSize={`14px`}
                      mdFontSize={`14px`}
                      mdLineheight={`20px`}
                      textAlign={`center`}
                      smFontSize={`16px`}
                      smLineheight={`26px`}
                      fontWeight={`700`}
                      xlfontWeight={`400`}
                      smFontWeight={`400`}
                      mdfontWeight={`400`}
                      color={`#262B3B`}
                      mb={"15px"}
                      mdMargibBottom={`3px`}
                    >
                      Vzdálenost
                    </IconTitle>
                    <IconTitle
                      fontSize={`40px`}
                      xlfontSize={`14px`}
                      mdFontSize={`14px`}
                      mdLineheight={`20px`}
                      textAlign={`center`}
                      smFontSize={`16px`}
                      smLineheight={`26px`}
                      fontWeight={`700`}
                      xlfontWeight={`400`}
                      smFontWeight={`400`}
                      mdfontWeight={`400`}
                      color={`#262B3B`}
                      mb={"65px"}
                      mdMargibBottom={`30px`}
                    >
                      8 km
                    </IconTitle>
                    <FlexRow
                      gap={`15px`}
                      lgGap={`12px`}
                      direction={`row`}
                      smDirection={`row`}
                      itemCenter
                      center
                    >
                      <StyledImg w={`50px`} src={cycle} alt="img" />
                      <StyledImg w={`50px`} src={man} alt="img" />
                      <StyledImg w={`50px`} src={car} alt="img" />
                    </FlexRow>
                  </div>
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
          <Button bgColor={`#F0E8D9`} brColor={`#262B3B`} textColor={`#262B3B`}>Zobrazit další výlety</Button>
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
