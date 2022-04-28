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
  SectionTitle,
  VileSlideDesc,
  VileSlideTitle,
} from "../../../Styled/Typography.styles";

import swiper1 from "../../../images/k01.png";
import swiper2 from "../../../images/o01.png";

import { SlideContent, SlideWrapper } from "../../../Styled/Swiper.styles";

const VybaveniApartmanu: React.FC = () => {
  return (
    <Wrapper
      bgColor={`#f0e8d9`}
      smPadding={`48px 0px 50px`}
      lgPadding={`60px 0px 70px`}
      xlPadding={`90px 0px 100px`}
      padding={`90px 0px 127px`}
    >
      <Container>
        <SectionTitle
          xlMb={`30px`}
          mdMb={`22px`}
          mb={`51px`}
          color={``}
          lgMb={``}
          smMb={``}
          smFontSize={`30px`}
        >
          Vybavení apartmánů
        </SectionTitle>
      </Container>
      <Container>
        <GridRow md={1} cols={4} gap={`16px`}>
          {slides.map(({ id, img, title, desc }) => {
            return (
              <SlideWrapper>
                <ImgWrapper>
                  <StyledImg
                    object={`cover`}
                    h={`100%`}
                    w={`100%`}
                    src={img}
                    alt="img"
                  />
                </ImgWrapper>
                <SlideContent>
                  <div style={{ marginTop: "0px" }}>
                    <VileSlideTitle
                      fontSize={`27px`}
                      color={``}
                      mb={`1px`}
                      smMb={``}
                      smfontSize={`27px`}
                      smLineHeight={`34px`}
                    >
                      {title}
                    </VileSlideTitle>
                    <FlexRow gap={`16px`} between>
                      <VileSlideDesc smFontSize={`16px`} smLineHeight={`24px`} width={`450px`} color={`#F0E8D9`} mb={``}>
                        {desc}
                      </VileSlideDesc>
                    </FlexRow>
                  </div>
                </SlideContent>
              </SlideWrapper>
            );
          })}
        </GridRow>
      </Container>
    </Wrapper>
  );
};

export default VybaveniApartmanu;

const slides = [
  {
    id: 1,
    img: swiper1,
    title: "Kuchyň",
    desc: "sporák s troubou, mikrovlnka, varná konvice, kávovar, lednice, mrazák",
  },
  {
    id: 2,
    img: swiper2,
    title: "Zábava",
    desc: "TV, Netflix, Wifi",
  },
  {
    id: 3,
    img: swiper1,
    title: "Koupelna",
    desc: "fén, sprcha, wc",
  },
  {
    id: 4,
    img: swiper2,
    title: "Přistýlky",
    desc: "až pro dvě osoby",
  },
];
