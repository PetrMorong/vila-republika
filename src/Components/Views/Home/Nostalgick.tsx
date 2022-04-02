import React from "react";
import { Button } from "../../../Styled/Button.styles";
import { NostalgickWrapper } from "../../../Styled/Nostalgick.styles";
import { Container, FlexRow } from "../../../Styled/Theme.styles";
import { Desc, SectionTitle } from "../../../Styled/Typography.styles";

const Nostalgick: React.FC = () => {
  return (
    <NostalgickWrapper padding={`80px 0px`}>
      <Container margin={`auto`}>
        <FlexRow maxWidth={`690px`} margin={`0px auto`} column>
          <SectionTitle mb={`40px`} color={`white`}>
            Nostalgické kouzl hrubého Jeseníku{" "}
          </SectionTitle>
          <Desc mb={`20px`} color={`white`}>
            Hrubý Jeseník je druhým největším pohořím České republiky. Na rozdíl
            od Krkonoš a Šumavy není ale tak turisticky navštěvovaný, což má své
            velké výhody. Úchvatný ráz krajiny ještě nestihla pozměnit ruka
            člověka a zdejší neposkvrněná příroda má v sobě léčivou sílu.
            Nadechněte se a objevujte čistou krásu jesenických hor. Záleží jen
            na vás, zda pěšky, na kole či na lyžích.
          </Desc>

          <Button
            margin={`auto`}
            width={`176px`}
            height={`61px`}
            brColor={`white`}
            bgColor={`transparent`}
          >
            VÍCE O OKOLÍ{" "}
          </Button>
        </FlexRow>
      </Container>
    </NostalgickWrapper>
  );
};

export default Nostalgick;
