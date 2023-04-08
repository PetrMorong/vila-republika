import React from 'react'
import { HeaderWrapper } from '../../../Styled/Header.styles'
import { Container, FlexRow } from '../../../Styled/Theme.styles'
import { HeaderTitle } from '../../../Styled/Typography.styles'
import { buildImageUrl } from 'cloudinary-build-url'

const Header: React.FC = () => {
  const img = buildImageUrl(
    'v1680936968/vilaRepublikaFoto/wellness/DSC01755-HDR_jf1qnz.jpg',
    {}
  )

  return (
    <HeaderWrapper
      padding={`180px 0px 80px`}
      smPadding={`140px 0px 0px`}
      header={img}
      smHegiht={'390px'}
      height={'540px'}
      bgGradient
      style={{ backgroundPosition: '0px -355px' }}
    >
      <Container margin={`auto`}>
        <FlexRow width={`100%`} height={`100%`} center>
          <HeaderTitle
            align={`center`}
            fontSize={`73px`}
            smfontSize={`42px`}
            smLineheight={`52px`}
            maxWidth={`100%`}
            smalign={``}
          >
            Privátní Wellnes
          </HeaderTitle>
        </FlexRow>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
