import React from "react";
import {
  Container,
  FlexRow,
  GridRow,
  ImgWrapper,
  StyledImg,
  Wrapper,
} from "../../../Styled/Theme.styles";
import { IconTitle } from "../../../Styled/Typography.styles";
import img from "../../../images/F1.png";

import { SlideContent, SlideWrapper } from "../../../Styled/Swiper.styles";
const ProPrijemne: React.FC = () => {
  return (
    <Wrapper
      mdPadding={`0px 0px 0px`}
      xlPadding={`0px 0px 0px`}
      padding={`0px 0px 0px`}
    >
      <div className="pro_bg">
        <div className="pro_bg_overlay">
          <FlexRow
            direction="column"
            gap={`12px`}
            padding={`12px 0px`}
            itemCenter
            center
            maxWidth={`860px`}
            margin="auto"
          >
            <IconTitle
              color={`#FFFFFF`}
              fontSize={`60px`}
              linHeight={`68px`}
              xlfontSize={`50px`}
              mdFontSize={`40px`}
              textAlign={`center`}
              smFontSize={`30px`}
              fontWeight={`600`}
              xlfontWeight={`600`}
              smFontWeight={`600`}
              mdfontWeight={`600`}
              mb={``}
              mdMargibBottom={``}
              mdLineheight={`58px`}
              smLineheight={`38px`}
              mdtextAlign={``}
              smtextAlign={``}
              smMargibBottom={``}
            >
              Pro příjemně strávené společné chvíle
            </IconTitle>
            <IconTitle
              color={`#FFFFFF`}
              fontSize={`18px`}
              linHeight={`26px`}
              xlfontSize={`18px`}
              mdFontSize={`18px`}
              textAlign={`center`}
              smFontSize={`18px`}
              fontWeight={`600`}
              xlfontWeight={`400`}
              smFontWeight={`400`}
              mdfontWeight={`400`}
              mb={``}
              mdMargibBottom={``}
              mdLineheight={`26px`}
              smLineheight={`26px`}
              mdtextAlign={``}
              smtextAlign={``}
              smMargibBottom={``}
            >
              V přízemí Vily Republiky jsme pro vás vybudovali společenskou
              místnost s 20 místy k sezení. Každé ráno vám zde budeme podávat
              skvělé snídaně. Vydat se sem ale můžete i kdykoliv během dne. A
              třeba si z naší vinotéky zakoupit pečlivě vybraná vína plná slunce
              a harmonických chutí. Připraveny zde pro vás máme nejrůznější
              společenské hry, playstation i širokoúhlou TV pro sledování filmů
              anebo hudebních koncertů. Díky odhlučnění se můžete bavit až do
              pozdních nočních hodin.
            </IconTitle>
          </FlexRow>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProPrijemne;
