import React from "react";
import { HeaderWrapper } from "../../../Styled/Header.styles";
import header from "../../../images/SAUNA 2 (1).png";
import { Container, FlexRow } from "../../../Styled/Theme.styles";
import { Desc, HeaderTitle } from "../../../Styled/Typography.styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper
      padding={`160px 0px 60px`}
      smPadding={`140px 0px 40px`}
      header={header}
      smHegiht={"390px"}
      height={"375px"}
      bgGradient
    >
      <Container margin={`auto`}>
        <FlexRow width={`100%`} height={`100%`} center>
          <div>
            {" "}
            <HeaderTitle
              align={`center`}
              fontSize={`73px`}
              smfontSize={`42px`}
              smLineheight={`52px`}
              maxWidth={`100%`}
              smalign={``}
            >
              Apartmány
            </HeaderTitle>
            <Desc
              color={`#FFFFFF`}
              fontWeight={``}
              mb={``}
              margin={`20px auto 0px`}
              align={`center`}
              width={`908px`}
              xlMargin={``}
              xlFontsize={``}
              lgMargin={``}
              mdMargin={``}
              lgFontsize={``}
              mdFontsize={``}
              smMargin={``}
              smFontsize={`18px`}
              smLineHeight={`30px`}
              smalign={``}
            >
              Pohodlí jsme podřídili všechno. V našich apartmánech si skutečně
              odpočinete a načerpáte síly. Bude se vám zde krásně spát… Na
              vybavení a materiálech jsme nešetřili. Těšte se kvalitní matrace,
              pohodlné sedačky, designové doplňky i nábytek na míru. Vyberte si
              ten svůj, srdci vlastní apartmán, a užívejte si dovolenou snů v
              prvorepublikovém stylu.
            </Desc>
          </div>
        </FlexRow>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
