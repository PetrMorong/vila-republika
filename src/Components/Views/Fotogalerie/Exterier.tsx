import React from "react";
import {
  Container,
  FlexRow,
  GridRow,
  ImgWrapper,
  StyledImg,
  Wrapper,
} from "../../../Styled/Theme.styles";
import { SectionTitle } from "../../../Styled/Typography.styles";
import { SlideWrapper } from "../../../Styled/Swiper.styles";
import { buildImageUrl } from "cloudinary-build-url";

const Exterier: React.FC = () => {
  const data = [
    {
      picture: buildImageUrl("v1645822964/vilaRepublika/img2_j6mpok.png", {}),
    },
    {
      picture: buildImageUrl(
        "v1645822941/vilaRepublika/mp01-min_pilgkw.jpg",
        {}
      ),
    },
    {
      picture: buildImageUrl(
        "v1645822943/vilaRepublika/mp02-min_yspitq.jpg",
        {}
      ),
    },
    {
      picture: buildImageUrl("v1645822964/vilaRepublika/img2_j6mpok.png", {}),
    },
    {
      picture: buildImageUrl(
        "v1645822938/vilaRepublika/1.3.3-min_j5ku93.jpg",
        {}
      ),
    },
    {
      picture: buildImageUrl(
        "v1645822938/vilaRepublika/1.1-min_yaebmu.jpg",
        {}
      ),
    },
    {
      picture: buildImageUrl("v1673798915/vilaRepublika/1.4.4_lbjby6.jpg", {}),
    },
    {
      picture: buildImageUrl("v1673798908/vilaRepublika/1.2_eyvh8t.jpg", {}),
    },
  ];

  return (
    <Wrapper
      bgColor={`#FFFFFF`}
      padding={`112px 0px 135px`}
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
          Společné prostory
        </SectionTitle>
        <GridRow sm={2} md={3} cols={4} gap={`16px`}>
          {data.map((item, index) => {
            return (
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                direction={`column`}
                bgColor={``}
                padding={``}
                mdPadding={``}
                smPadding={``}
                itemCenter
                center
                key={index}
              >
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
              </FlexRow>
            );
          })}
        </GridRow>
      </Container>
    </Wrapper>
  );
};

export default Exterier;
