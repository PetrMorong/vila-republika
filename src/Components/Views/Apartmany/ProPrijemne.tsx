import React from 'react'
import { FlexRow, Wrapper } from '../../../Styled/Theme.styles'
import { IconTitle } from '../../../Styled/Typography.styles'
import { buildImageUrl } from 'cloudinary-build-url'
import styled from 'styled-components'
import { url } from 'inspector'

export const Bg = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 500px;
  object-fit: cover;
  position: relative;
`

const ProPrijemne: React.FC = () => {
  const img1 = buildImageUrl(
    'v1680942535/vilaRepublikaFoto/SpolecenskaMistnost/DSC01924-HDR_zldqdu.jpg',
    {},
  )
  return (
    <Wrapper
      mdPadding={`0px 0px 0px`}
      xlPadding={`0px 0px 0px`}
      padding={`0px 0px 0px`}
    >
      <Bg style={{ backgroundImage: `url(${img1})` }}>
        <div className='pro_bg_overlay'>
          <FlexRow
            direction='column'
            gap={`12px`}
            padding={`12px 0px`}
            itemCenter
            center
            maxWidth={`860px`}
            margin='auto'
          >
            <IconTitle
              color={`#FFFFFF`}
              fontSize={`45px`}
              linHeight={`48px`}
              xlfontSize={`35px`}
              mdFontSize={`30px`}
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
              fontSize={`16px`}
              linHeight={`27px`}
              xlfontSize={`16px`}
              mdFontSize={`16px`}
              textAlign={`center`}
              smFontSize={`16px`}
              fontWeight={`400`}
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
              místnost s 20 místy k sezení. Vydat se sem můžete kdykoliv během
              dne. A třeba si z naší vinotéky zakoupit pečlivě vybraná vína plná
              slunce a harmonických chutí. Připraveny zde pro vás máme
              nejrůznější společenské hry, širokoúhlou TV pro sledování filmů
              anebo sportovních zápasů. Díky odhlučnění se můžete bavit až do
              pozdních nočních hodin.
            </IconTitle>
          </FlexRow>
        </div>
      </Bg>
    </Wrapper>
  )
}

export default ProPrijemne
