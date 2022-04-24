import React from "react";
import { HeaderWrapper } from "../../../Styled/Header.styles";
import header from "../../../images/giftcard/header-bg.png";
import headr1 from "../../../images/header-icon1.svg";
import headr2 from "../../../images/header-icon2.svg";
import headr3 from "../../../images/header-icon3.svg";
import headr4 from "../../../images/header-icon4.svg";

import {
  Container,
  FlexRow,
  GridRow,
  ImgWrapper,
  StyledImg,
} from "../../../Styled/Theme.styles";
import { HeaderTitle } from "../../../Styled/Typography.styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper padding={`80px 0px 60px`} smPadding={`140px 0px 0px`} header={header} smHegiht={"690px"} height={"540px"} bgGradient>
      <Container margin={`auto`}>
        <FlexRow width={`100%`} height={`100%`} center>
          <HeaderTitle align={`center`} fontSize={`73px`} smfontSize={`42px`} smLineheight={`52px`} maxWidth={`100%`}>
            Dárkové poukazy
          </HeaderTitle>
        </FlexRow>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

const headrIcons = [
  { id: 1, text: "Privátní Wellness ", icon: headr1 },
  { id: 2, text: "7 Apartmánů", icon: headr2 },
  { id: 3, text: "Ubytování v horách ", icon: headr3 },
  { id: 4, text: "Moderní Technologie", icon: headr4 },
];
