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
// import pic1 from "../../../images/apartmany/1.png";
import pic2 from "../../../images/apartmany/2.png";
import pic3 from "../../../images/apartmany/3.png";
import pic4 from "../../../images/apartmany/4.png";
import pic5 from "../../../images/apartmany/5.png";
import pic6 from "../../../images/apartmany/6.png";
import pic7 from "../../../images/apartmany/7.png";
import pic8 from "../../../images/apartmany/8.png";
import { buildImageUrl } from "cloudinary-build-url";

const Apartmany: React.FC = () => {
  const data = [
    // byt 1
    {
      picture: buildImageUrl(
        "v1673797462/vilaRepublikaFoto/byt1/DSC07382-HDR_x8twfm.jpg",
        {}
      ),
    },
    {
      picture: buildImageUrl(
        "v1673797459/vilaRepublikaFoto/byt1/DSC07388-HDR_hc02vu.jpg",
        {}
      ),
    },
    {
      picture: buildImageUrl(
        "v1673797461/vilaRepublikaFoto/byt1/DSC07418-HDR_oxlcy5.jpg",
        {}
      ),
    },
    {
      picture: buildImageUrl(
        "v1673797458/vilaRepublikaFoto/byt1/DSC07433-HDR_cy9sjv.jpg",
        {}
      ),
    },

    // byt 4
    {
      picture: buildImageUrl(
        "v1673797426/vilaRepublikaFoto/byt4/DSC07545-HDR_g11alm.jpg",
        {}
      ),
    },
    {
      picture: buildImageUrl(
        "v1673797431/vilaRepublikaFoto/byt4/DSC07527-HDR_qq1xqb.jpg",
        {}
      ),
    },
    {
      picture: buildImageUrl(
        "v1673797431/vilaRepublikaFoto/byt4/DSC07518-HDR_yvydy6.jpg",
        {}
      ),
    },

    {
      picture: buildImageUrl(
        "v1673797427/vilaRepublikaFoto/byt4/DSC07539-HDR_qcpgxr.jpg",
        {}
      ),
    },
  ];

  // TODO add titles

  return (
    <Wrapper
      bgColor={`#F0E8D9`}
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
          Apartmány
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

export default Apartmany;
