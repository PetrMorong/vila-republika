import React from "react";
import {
  Container,
  FlexRow,
  GridRow,
  ImgWrapper,
  IconContentWrap,
  StyledImg,
  Wrapper,
} from "../../../Styled/Theme.styles";
import { IconTitle, SectionTitle } from "../../../Styled/Typography.styles";

import dalsi1 from "../../../images/giftcard/1.svg";
import union1 from "../../../images/giftcard/2.svg";
import parkov1 from "../../../images/giftcard/3.svg";
import chytra1 from "../../../images/giftcard/4.svg";
import { Button } from "../../../Styled/Button.styles";

const ChooseValue: React.FC = () => {
  return (
    <Wrapper
      bgColor={`#f0e8d9`}
      padding={`142px 0px 127px`}
      xlPadding={`100px 0px 80px`}
      mdPadding={`60px 0px 50px`}
    >
      <Container maxWidth={`1700px`}>
        <SectionTitle
          xlMb={`40px`}
          color={``}
          lgMb={``}
          mdMb={``}
          smMb={``}
          mb={`94px`}
          smFontSize={`30px`}
        >
          Vyberte si hodnotu
        </SectionTitle>
        <GridRow sm={1} lg={2} gap={`16px`} between cols={4}>
          {data.map(({ id, icon, text, price, textColor }) => {
            return (
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                direction={`column`}
                bgColor={`#FFFFFF`}
                padding={`87px 2px 95px`}
                mdPadding={`60px 2px 60px`}
                smPadding={`24px 4px 34px`}
                itemCenter
                center
                key={id}
              >
                <FlexRow
                  gap={`15px`}
                  lgGap={`12px`}
                  direction={`column`}
                  smDirection={`row`}
                  itemCenter
                  center
                >
                  <ImgWrapper
                    smWidth={`74px`}
                    xlWidth={`110px`}
                    maxWidth={`122px`}
                    height={`auto`}
                    margin={`0px 0px 76px 0px`}
                    xlMargin={`0px 0px 36px 0px`}
                    mdMargin={`0px 0px 0px 0px`}
                    smMargin={`0px 0px 30px 0px`}
                  >
                    <StyledImg w={`100%`} src={icon} alt="img" />
                  </ImgWrapper>
                  <IconContentWrap>
                    <IconTitle
                      fontSize={`16px`}
                      xlfontSize={`14px`}
                      mdFontSize={`14px`}
                      mdLineheight={`20px`}
                      textAlign={`center`}
                      smFontSize={`16px`}
                      smLineheight={`26px`}
                      fontWeight={`400`}
                      xlfontWeight={`400`}
                      smFontWeight={`400`}
                      mdfontWeight={`400`}
                      color={`#262B3B`}
                      mb={"15px"}
                      mdMargibBottom={`3px`}
                    >
                      {text}
                    </IconTitle>

                    <IconTitle
                      fontSize={`40px`}
                      xlfontSize={`32px`}
                      textAlign={`center`}
                      mdFontSize={`32px`}
                      mdLineheight={`42px`}
                      smFontSize={`34px`}
                      smLineheight={`42px`}
                      fontWeight={`600`}
                      xlfontWeight={`600`}
                      smFontWeight={`600`}
                      mdfontWeight={`600`}
                      color={textColor}
                      mb={"50px"}
                      mdMargibBottom={`40px`}
                    >
                      {price}
                    </IconTitle>
                  </IconContentWrap>
                </FlexRow>
                <Button
                  style={{ minWidth: 156 }}
                  width={`176px`}
                  height={`61px`}
                >
                  Objednat
                </Button>
              </FlexRow>
            );
          })}
        </GridRow>
      </Container>
    </Wrapper>
  );
};

export default ChooseValue;

const data = [
  {
    id: 1,
    text: "Voucher v hodnotě",
    price: "1 000 Kč",
    textColor: "#7886A0",
    icon: dalsi1,
  },
  {
    id: 2,
    text: "Voucher v hodnotě",
    price: "2 000 Kč",
    textColor: "#5A657B",
    icon: union1,
  },
  {
    id: 3,
    text: "Voucher v hodnotě",
    price: "3 000 Kč",
    textColor: "#444C60",
    icon: parkov1,
  },
  {
    id: 4,
    text: "Voucher v hodnotě",
    price: "4 000 Kč",
    textColor: "#262B3B",
    icon: chytra1,
  },
];
