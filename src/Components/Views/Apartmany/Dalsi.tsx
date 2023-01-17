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

import icon1 from "../../../images/0001.svg";
import icon2 from "../../../images/0002.svg";
import icon3 from "../../../images/0003.svg";
import icon4 from "../../../images/0004.svg";
import icon5 from "../../../images/0005.svg";

const Dalsi: React.FC = () => {
  return (
    <Wrapper
      bgColor={`#f0e8d9`}
      padding={`60px 0px 140px`}
      xlPadding={`100px 0px 100px`}
      mdPadding={`100px 0px 100px`}
    >
      <Container>
        <GridRow sm={1} lg={2} gap={`32px`} max="true" around cols={5}>
          {data.map(({ id, icon, text, description }) => {
            return (
              <div key={id}>
                <ImgWrapper smWidth={`50px`} xlWidth={`50px`} maxWidth={`50px`}>
                  <StyledImg w={`100%`} h={`100%`} src={icon} alt="img" />
                </ImgWrapper>
                <IconTitle
                  fontSize={``}
                  linHeight={``}
                  xlfontSize={``}
                  mdFontSize={``}
                  mdLineheight={``}
                  textAlign={``}
                  smFontSize={`18px`}
                  smLineheight={``}
                  fontWeight={`700`}
                  xlfontWeight={`700`}
                  smFontWeight={`700`}
                  mdfontWeight={`700`}
                  mb={"5px"}
                  mdMargibBottom={`5px`}
                  smMargibBottom={`8px`}
                  color={`#262B3B`}
                >
                  {text}
                </IconTitle>
                <IconTitle
                  fontSize={``}
                  linHeight={``}
                  xlfontSize={``}
                  mdFontSize={``}
                  mdLineheight={``}
                  textAlign={``}
                  smFontSize={``}
                  smLineheight={``}
                  fontWeight={`400`}
                  xlfontWeight={``}
                  smFontWeight={``}
                  mdfontWeight={``}
                  mb={""}
                  mdMargibBottom={``}
                  smMargibBottom={`28px`}
                  color={`#262B3B`}
                >
                  {description}
                </IconTitle>
              </div>
            );
          })}
        </GridRow>
      </Container>
    </Wrapper>
  );
};

export default Dalsi;

const data = [
  { id: 1, text: "Pračka", description: "ve společné prádelně", icon: icon1 },
  {
    id: 2,
    text: "Privátní Wellness",
    description: "sauna pro 4, vířivka pro 3 osoby",
    icon: icon2,
  },
  {
    id: 3,
    text: "Lyžárna a kolárna",
    description: "na vaše sportovní vybavení",
    icon: icon3,
  },
  {
    id: 4,
    text: "Posezení ve sklepě",
    description: "s vinotékou a zábavou",
    icon: icon4,
  },
  {
    id: 5,
    text: "Elektrokola",
    description: "2 kola k zapůjčení",
    icon: icon5,
  },
];
