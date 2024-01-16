import * as React from 'react'
import DataContainer from '../Components/DataContainer'
import Layout from '../Components/Layout/Layout'
import { HeaderWrapper } from '../Styled/Header.styles'
import { Container, FlexRow } from '../Styled/Theme.styles'
import { HeaderTitle } from '../Styled/Typography.styles'
import headerImage from '../images/young-bg.png'
import styled from 'styled-components'

const RecenzePage = () => {
  return (
    <DataContainer>
      <Layout>
        <HeaderWrapper
          padding={`160px 0px 60px`}
          smPadding={`40px 0px 0px`}
          header={headerImage}
          smHegiht={'450px'}
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
                Recenze
              </HeaderTitle>
            </FlexRow>
          </Container>
        </HeaderWrapper>

        <Wrap>
          <script
            async
            src='https://cdn.trustyou.com/v2/hotel/widget-ui/shared/iframeResizer/4.3.2/iframeResizer.min.js'
            // onload='iFrameResize()'
          ></script>
          <iframe
            src='https://api.trustyou.com/hotels/cae0a877-7792-4ef2-b2d8-8e1b919e273c/reviews.html?key=6d715e36-4335-4bd1-9d8a-c856cbc21cff&scale=5&pageSize=5'
            scrolling='no'
            width='100%'
            height={'100%'}
            style={{ border: 'none', height: 1700, overflow: 'scroll' }}
          ></iframe>
        </Wrap>
      </Layout>
    </DataContainer>
  )
}

const Wrap = styled.div`
  margin-top: 80px;
  height: 1300px;

  @media screen and (max-width: 640px) {
    margin-top: 30px;
    height: 1750px;
  }
`

export default RecenzePage
