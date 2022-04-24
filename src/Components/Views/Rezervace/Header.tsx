import React from "react";
import { HeaderWrapper } from "../../../Styled/Header.styles";
import header from "../../../images/young-bg.png";
import { Container, FlexRow } from "../../../Styled/Theme.styles";
import { HeaderTitle } from "../../../Styled/Typography.styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper
      padding={`80px 0px 60px`}
      smPadding={`140px 0px 0px`}
      header={header}
      smHegiht={"690px"}
      height={"540px"}
      bgGradient
    >
      <Container margin={`auto`}>
        <FlexRow width={`100%`} height={`100%`} center>
          <HeaderTitle
            align={`center`}
            fontSize={`73px`}
            smfontSize={`42px`}
            smLineheight={`52px`}
            maxWidth={`100%`}
          >
            Rezervace
          </HeaderTitle>
        </FlexRow>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

