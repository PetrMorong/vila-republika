import React from "react";
import {
  Container,
  FlexRow,
  GridRow,
  ImgWrapper,
  StyledImg,
  Wrapper,
} from "../../../Styled/Theme.styles";
import { Desc, SectionTitle } from "../../../Styled/Typography.styles";
import img from "../../../images/unigarden.png";
const HistorieVelkych: React.FC = () => {
  return (
    <Wrapper
      mdPadding={`80px 0px 40px`}
      xlPadding={`100px 0px 50px`}
      padding={`176px 0px 60px`}
    >
      <Container>
        <SectionTitle
          xlMb={`60px`}
          color={``}
          lgMb={``}
          mdMb={`40px`}
          smMb={``}
          mb={`100px`}
        >
          Staletá lázeňská historie <br /> Velkých Losin
        </SectionTitle>

        <GridRow sm={1} cols={2} gap={`32px`}>
          <FlexRow>
            <Desc
              color={``}
              fontWeight={``}
              mb={``}
              margin={`auto`}
              width={`509px`}
              xlMargin={``}
              xlFontsize={``}
              lgMargin={``}
              mdMargin={``}
              lgFontsize={``}
              mdFontsize={``}
              smMargin={``}
              smFontsize={``}
            >
              Velké Losiny se řadí k nejstarším moravským lázním. Usazené pod
              majestátnými vrcholky hor jsou vstupní branou Hrubého Jeseníku.
              Příznivé klimatické podmínky a čerstvý horský vzduch prospějí
              vašemu tělu i duši, stejně jako léčivé minerální prameny nebo
              unikátní termální lázně, které nemají v České republice obdoby. Za
              návštěvu stojí rovněž pozdně renesanční zámek s prohlídkovými
              okruhy či velkolosinská ruční papírna.
            </Desc>
          </FlexRow>

          <ImgWrapper>
            <StyledImg w={`100%`} src={img} alt="img" />
          </ImgWrapper>
        </GridRow>
      </Container>
    </Wrapper>
  );
};

export default HistorieVelkych;
