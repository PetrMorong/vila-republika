import React from 'react'
import { HeaderWrapper } from '../../../Styled/Header.styles'
import header from '../../../images/fotogal-bg.png'
import { Container, FlexRow } from '../../../Styled/Theme.styles'
import { HeaderTitle } from '../../../Styled/Typography.styles'

import { buildImageUrl } from 'cloudinary-build-url'

const Header: React.FC = () => {
  const headerImg = buildImageUrl(
    'v1673799668/vilaRepublikaFoto/fotogal-bg_h8liwn.png',
    {}
  )

  return (
    <HeaderWrapper
      padding={`160px 0px 60px`}
      smPadding={`40px 0px 0px`}
      header={headerImg}
      smHegiht={'500px'}
      height={'540px'}
      bgGradient
    >
      <Container margin={`auto`}>
        <FlexRow width={`100%`} height={`100%`} center>
          <HeaderTitle
            align={`center`}
            fontSize={`73px`}
            smfontSize={`42px`}
            smLineheight={`52px`}
            maxWidth={`100%`}
          >
            Fotogalerie
          </HeaderTitle>
        </FlexRow>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
