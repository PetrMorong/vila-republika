import React from "react";
import { HeaderWrapper } from "../../../Styled/Header.styles";
import header from "../../../images/header-bg.png";
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
import { HeaderTitle, IconTitle } from "../../../Styled/Typography.styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper padding={`80px 0px 60px`} smPadding={`80px 0px 60px`} header={header} bgColor>
      <Container margin={`auto`}>
        <FlexRow width={`100%`} height={`100%`}>
          <HeaderTitle
            fontSize={``}
            smfontSize={``}
            smLineheight={``}
            align={`left`}
            maxWidth={`932px`}
            smalign={`center`}
          >
            Wellness apartmány{" "}
            <HeaderTitle
              style={{ color: "#F0E8D9" }}
              fontSize={``}
              smfontSize={``}
              smLineheight={``}
              align={`left`}
              maxWidth={`932px`}
              smalign={`center`}
            >
              v podhůří Jeseníků
            </HeaderTitle>{" "}
          </HeaderTitle>
        </FlexRow>
      </Container>

      <Container>
        <GridRow sm={1} lg={"2"} gap={"16px"} between cols={"4"}>
          {headrIcons.map(({ id, icon, text }) => {
            return (
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                itemCenter
                
                key={id}
              >
                <ImgWrapper smWidth={`50px`} xlWidth={`36px`}>
                  <StyledImg w={`100%`} src={icon} alt="img" />
                </ImgWrapper>
                <IconTitle
                  color={`#FFFFFF`}
                  fontSize={`15px`}
                  linHeight={``}
                  xlfontSize={`15px`}
                  mdFontSize={`15px`}
                  smFontSize={`15px`}
                  textAlign={``}
                  fontWeight={`700`}
                  xlfontWeight={`700`}
                  mdfontWeight={`700`}
                  smFontWeight={`700`}
                  mb={``}
                  mdMargibBottom={``}
                  mdLineheight={``}
                  smLineheight={``}
                  mdtextAlign={`left`}
                  smtextAlign={`left`}
                  smMargibBottom={``}
                >
                  {text}
                </IconTitle>
              </FlexRow>
            );
          })}
        </GridRow>
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
