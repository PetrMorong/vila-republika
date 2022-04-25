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
import pic1 from "../../../images/exterior/1.png";
import pic2 from "../../../images/exterior/2.png";
import pic3 from "../../../images/exterior/3.png";
import pic4 from "../../../images/exterior/1.png";
import pic5 from "../../../images/exterior/2.png";
import pic6 from "../../../images/exterior/3.png";
import pic7 from "../../../images/exterior/1.png";
import pic8 from "../../../images/exterior/2.png";

const Exterier: React.FC = () => {
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
          Exteriér
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

const data = [
  {
    picture: pic1,
  },
  {
    picture: pic2,
  },
  {
    picture: pic3,
  },
  {
    picture: pic4,
  },
  {
    picture: pic5,
  },
  {
    picture: pic6,
  },
  {
    picture: pic7,
  },
  {
    picture: pic8,
  },
];
