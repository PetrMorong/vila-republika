import React from "react";
import {
  Container,
  FlexRow,
  GridRow,
  ImgWrapper,
  SectionBorderLines,
  StyledImg,
  Wrapper,
  WrapperSectionBorderLines,
} from "../../../Styled/Theme.styles";
import { Desc, SectionTitle } from "../../../Styled/Typography.styles";
import img from "../../../images/_06A8153@2x.png";

const VelkeLosiny: React.FC = () => {
  return (
    <Wrapper
      smPadding={`80px 0px 60px`}
      mdPadding={`80px 0px 60px`}
      xlPadding={`100px 0px 120px`}
      padding={`106px 0px 138px`}
    >
      <Container>
        <SectionTitle
          xlMb={`60px`}
          mdMb={`40px`}
          mb={`100px`}
          color={``}
          lgMb={``}
          smMb={``}
          smFontSize={``}
        >
          Velké Losiny
        </SectionTitle>

        <GridRow sm={1} md={1} cols={2} gap={`32px`}>
          <ImgWrapper mdMargin={`0px 0px 60px`}>
            <StyledImg w={`100%`} src={img} alt="img" />
          </ImgWrapper>

          <FlexRow itemCenter center>
            <div>
              <WrapperSectionBorderLines>
                <SectionBorderLines />
              </WrapperSectionBorderLines>
              <Desc
                color={``}
                align={``}
                fontWeight={``}
                mb={``}
                margin={`auto`}
                width={`509px`}
                xlMargin={``}
                xlFontsize={``}
                lgMargin={``}
                mdMargin={``}
                lgFontsize={``}
                mdFontsize={`18px`}
                smMargin={``}
                smFontsize={`18px`}
                smLineHeight={`30px`}
                smalign={``}
              >
                Velké Losiny se řadí k nejstarším moravským lázním. Usazené pod
                majestátnými vrcholky hor jsou vstupní branou Hrubého Jeseníku.
                Příznivé klimatické podmínky a čerstvý horský vzduch prospějí
                vašemu tělu i duši, stejně jako léčivé minerální prameny nebo
                unikátní termální lázně, které nemají v České republice obdoby.
                Za návštěvu stojí rovněž pozdně renesanční zámek s prohlídkovými
                okruhy či velkolosinská ruční papírna.
              </Desc>
            </div>
          </FlexRow>
        </GridRow>
      </Container>
    </Wrapper>
  );
};

export default VelkeLosiny;
