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

import dalsi1 from "../../../images/dalsi1.png";
import union1 from "../../../images/union1.png";
import parkov1 from "../../../images/parkov1.png";
import chytra1 from "../../../images/chytra1.png";

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
          color={``}
          lgMb={``}
          mdMb={``}
          smMb={``}
          mb={`94px`}
        >
          Dalsi vybaveni
        </SectionTitle>
        <GridRow lg={2} gap={`32px`} max="true" around cols={4}>
          {headrIcons.map(({ id, icon, text }) => {
            return (
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                mdDirection={`column`}
                itemCenter
                key={id}
              >
                <ImgWrapper smWidth={`22px`} xlWidth={`36px`}>
                  <StyledImg w={`100%`} src={icon} alt="img" />
                </ImgWrapper>
                <IconTitle color={`#262B3B`}>{text}</IconTitle>
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
  { id: 1, text: "LYŽÁRNA", icon: dalsi1 },
  { id: 2, text: "SPOLEČENSKÁ MÍSTNOST", icon: union1 },
  { id: 3, text: "PARKOVACÍ MÍSTO", icon: parkov1 },
  { id: 4, text: "CHYTRÁ DOMÁCNOST", icon: chytra1 },
];
