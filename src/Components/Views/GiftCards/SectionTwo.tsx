import React from "react";
import {
  Container,
  Wrapper,
  WrapperSectionBorderLines,
  SectionBorderLines,
} from "../../../Styled/Theme.styles";
import { Desc } from "../../../Styled/Typography.styles";
const SectionTwo: React.FC = () => {
  return (
    <Wrapper
      mdPadding={`80px 0px 40px`}
      xlPadding={`100px 0px 50px`}
      padding={`133px 0px 122px`}
    >
      <Container>
        <WrapperSectionBorderLines>
          <SectionBorderLines />
        </WrapperSectionBorderLines>
        <Desc
          color={``}
          fontWeight={``}
          mb={``}
          margin={`auto`}
          width={`876px`}
          xlMargin={``}
          xlFontsize={``}
          lgMargin={``}
          mdMargin={``}
          lgFontsize={``}
          mdFontsize={``}
          smMargin={``}
          smFontsize={`18px`}
          smLineHeight={`30px`}
        >
          Hledáte dokonalý dárek pro sebe či své blízké? Už se nemůžete dočkat,
          až se zase budete moci zrelaxovat v našem hotelu a wellness centru?
          Nebo přemýšlíte, kam vyrazíte na dovolenou? Případně nás jen chcete
          podpořit?
          <br />
          <br />
          Připravili jsme pro vás vouchery v hodnotách 2000 Kč, 3000 Kč, 5000 Kč
          a 10 000 Kč s platností 12 měsíců. Vouchery můžete využít na jakékoliv
          služby hotelu Maximus Resort. Případně si je budete moci vyměnit za
          kterýkoliv námi nabízený pobytový balíček. Nemusíte tedy nyní nic
          řešit, detaily vašeho pobytu včetně termínu si naplánujete až to pro
          Vás bude aktuální.
        </Desc>
      </Container>
    </Wrapper>
  );
};

export default SectionTwo;
