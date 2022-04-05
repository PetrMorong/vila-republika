import React from "react";
import {
  Container,
  FlexRow,
  GridRow,
  IconWrapper,
  ImgWrapper,
  GridCol,
  StyledImg,
  Wrapper,
} from "../../../Styled/Theme.styles";
import {
  Desc,
  SectionTitle,
  VileSlideDesc,
  VileSlideTitle,
} from "../../../Styled/Typography.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronRight } from "react-icons/bs";

import swiper1 from "../../../images/slide1.png";
import swiper2 from "../../../images/slide2.png";

import { SlideContent, SlideWrapper } from "../../../Styled/Swiper.styles";

const VilaRepublika: React.FC = () => {
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <Wrapper
      bgColor={`#f0e8d9`}
      smPadding={`48px 0px 50px`}
      lgPadding={`60px 0px 70px`}
      xlPadding={`90px 0px 100px`}
      padding={`138px 0px 172px`}
    >
      <Container>
        <SectionTitle
          xlMb={`30px`}
          color={``}
          lgMb={``}
          mdMb={`22px`}
          smMb={``}
          mb={`51px`}
        >
          Vila Republika
        </SectionTitle>
        <Desc
          width={`908px`}
          color={``}
          fontWeight={``}
          mb={``}
          margin={`0px auto 138px`}
          xlMargin={`0px auto 40px`}
          xlFontsize={``}
          lgMargin={`0px auto 32px`}
          mdMargin={``}
          lgFontsize={``}
          mdFontsize={``}
          smMargin={``}
          smFontsize={``}
        >
          Apartmánový dům Vila Republika leží pod svahy Hrubého Jeseníku v
          lázeňské obci Velké Losiny. Původní stavba z 30. let minulého století
          je citlivě zrekonstruována, krásné prvorepublikové prvky zachovány.
          Moderně pojaté, komfortní ubytování uspokojí i nejnáročnější
          klientelu. Vila Republika je díky své poloze ideální destinací pro
          trávení letní i zimní lyžařské dovolené. Na dosah budete mít termální
          lázně, malebný lázeňský park i čistou přírodu CHKO Jeseníky.
        </Desc>
      </Container>
      <Container>
        <GridRow md={1} cols={2}>
          {swipers.map(({ id, slides }) => {
            return (
              <GridCol key={id}>
                <Swiper
                  slidesPerView={1}
                  onSwiper={(swiper) => console.log(swiper)}
                  navigation
                  loop={true}
                  {...params}
                >
                  {slides.map(({ id, img, title, desc }) => {
                    return (
                      <SwiperSlide key={id}>
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
                            <div style={{ marginTop: "auto" }}>
                              <VileSlideTitle color={``} mb={``} smMb={``}>
                                {title}
                              </VileSlideTitle>
                              <FlexRow gap={`16px`} between>
                                <VileSlideDesc
                                  width={`450px`}
                                  color={``}
                                  mb={``}
                                >
                                  {desc}
                                </VileSlideDesc>
                                <IconWrapper size={`38px`} color={`white`}>
                                  <BsChevronRight />
                                </IconWrapper>
                              </FlexRow>
                            </div>
                          </SlideContent>
                        </SlideWrapper>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </GridCol>
            );
          })}
        </GridRow>
      </Container>
    </Wrapper>
  );
};

export default VilaRepublika;

const swipers = [
  {
    id: 1,
    slides: [
      {
        id: 1,
        img: swiper1,
        title: "Designové apartmány",
        desc: "Zcela unikátní vyznění a jiné barevné ladění. Každý z našich apartmánů je originál, navrhoval ho jiný architekt. Vždy je to ale minimalismus s poctou k prvorepublikové architektuře. Vyberte si styl, který vám sedne.",
      },
      {
        id: 2,
        img: swiper2,
        title: "Privátní wellness",
        desc: "Po aktivně stráveném dni na čerstvém vzduchu zasloužený relax. Rozmazlujte se v našem privátním wellness vonícím dřevem. Čeká zde na vás finská sauna, vířivka a soukromí. Svůj termín si můžete rezervovat online.",
      },
    ],
  },
  {
    id: 2,
    slides: [
      {
        id: 1,
        img: swiper1,
        title: "Designové apartmány",
        desc: "Zcela unikátní vyznění a jiné barevné ladění. Každý z našich apartmánů je originál, navrhoval ho jiný architekt. Vždy je to ale minimalismus s poctou k prvorepublikové architektuře. Vyberte si styl, který vám sedne.",
      },
      {
        id: 2,
        img: swiper2,
        title: "Privátní wellness",
        desc: "Po aktivně stráveném dni na čerstvém vzduchu zasloužený relax. Rozmazlujte se v našem privátním wellness vonícím dřevem. Čeká zde na vás finská sauna, vířivka a soukromí. Svůj termín si můžete rezervovat online.",
      },
    ],
  },
];
