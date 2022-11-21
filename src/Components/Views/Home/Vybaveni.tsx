import React from "react";
import {
  Container,
  FlexRow,
  GridRow,
  ImgWrapper,
  StyledImg,
  Wrapper,
} from "../../../Styled/Theme.styles";
import { IconTitle, SectionTitle } from "../../../Styled/Typography.styles";

import dalsi1 from "../../../images/Union1.svg";
import union1 from "../../../images/Union2.svg";
import parkov1 from "../../../images/Union3.svg";
import chytra1 from "../../../images/Union4.svg";

const Dalsi: React.FC = () => {
  return (
    <Wrapper
      bgColor={`#f0e8d9`}
      padding={`142px 0px 127px`}
      xlPadding={`100px 0px 80px`}
      mdPadding={`60px 0px 50px`}
    >
      <Container>
        <SectionTitle
          xlMb={`40px`}
          mb={`94px`}
          color={``}
          lgMb={``}
          mdMb={``}
          smMb={``}
          smFontSize={``}
        >
          Další vybavení
        </SectionTitle>
        <GridRow sm={1} lg={2} gap={`32px`} max="true" around cols={4}>
          {headrIcons.map(({ id, icon, text }) => {
            return (
              <FlexRow gap={`15px`} lgGap={`12px`} itemCenter key={id}>
                <ImgWrapper smWidth={`50px`} xlWidth={`36px`}>
                  <StyledImg w={`100%`} src={icon} alt="img" />
                </ImgWrapper>
                <IconTitle
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
                  mdtextAlign={``}
                  smtextAlign={``}
                  smMargibBottom={``}
                  color={`#262B3B`}
                >
                  {text}
                </IconTitle>
              </FlexRow>
            );
          })}
        </GridRow>
      </Container>
    </Wrapper>
  );
};

export default Dalsi;

const headrIcons = [
  { id: 1, text: "Lyžárna", icon: dalsi1 },
  { id: 2, text: "Společenská místnost", icon: union1 },
  { id: 3, text: "Parkovací místo", icon: parkov1 },
  { id: 4, text: "Chytrá domácnost", icon: chytra1 },
];
