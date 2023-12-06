import React from 'react'
import { Button } from '../../../Styled/Button.styles'
import { NostalgickWrapper } from '../../../Styled/Nostalgick.styles'
import { FlexRow } from '../../../Styled/Theme.styles'
import { Desc, SectionTitle } from '../../../Styled/Typography.styles'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { buildImageUrl } from 'cloudinary-build-url'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  height: 100%;
`

const Nostalgick: React.FC = () => {
  const bg = buildImageUrl('v1673867133/vilaRepublikaFoto/nostalgick-bg_psvvlh.png', {})
  return (
    <NostalgickWrapper padding={`0px 0px`} height={``} bg={bg}>
      <Container>
        <FlexRow maxWidth={`690px`} margin={`0px auto`} column>
          <SectionTitle color={`white`} mb={`40px`}>
            Nostalgické kouzlo hrubého Jeseníku{' '}
          </SectionTitle>
          <Desc
            color={'white'}
            mb={'20px'}
            mdFontsize={`18px`}
            smMargin={`26px`}
            smFontsize={`18px`}
            smLineHeight={`26px`}
          >
            Hrubý Jeseník je druhým největším pohořím České republiky. Na rozdíl
            od Krkonoš a Šumavy není ale tak turisticky navštěvovaný, což má své
            velké výhody. Úchvatný ráz krajiny ještě nestihla pozměnit ruka
            člověka a zdejší neposkvrněná příroda má v sobě léčivou sílu.
            Nadechněte se a objevujte čistou krásu jesenických hor. Záleží jen
            na vás, zda pěšky, na kole či na lyžích.
          </Desc>
          <div style={{ marginBottom: 30 }} />
          {/* <Link to="/okoli" style={{ margin: 'auto' }}>
            <Button
              style={{ width: '176px' }}
              margin={`auto`}
              width={`176px`}
              height={`61px`}
              brColor={`white`}
              bgColor={`transparent`}
            >
              VÍCE O OKOLÍ{' '}
            </Button>
          </Link> */}
        </FlexRow>
      </Container>
    </NostalgickWrapper>
  )
}

export default Nostalgick
