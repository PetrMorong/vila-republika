import React from 'react'
import {
  Container,
  FlexRow,
  GridRow,
  ImgWrapper,
  StyledImg,
  Wrapper,
} from '../../../Styled/Theme.styles'
import { IconTitle, SectionTitle } from '../../../Styled/Typography.styles'
import { Button, ButtonWrapper } from '../../../Styled/Button.styles'
import dalsi1 from '../../../images/Union1.svg'
import union1 from '../../../images/Union2.svg'
import parkov1 from '../../../images/Union3.svg'
import chytra1 from '../../../images/Union4.svg'
import { buildImageUrl } from 'cloudinary-build-url'

const VybaveniWellness: React.FC = () => {
  const img = '/images/apartmany/wellness/DSC01791-HDR_xrkdf9.jpg'

  return (
    <Wrapper
      bgColor={`#F0E8D9`}
      mdPadding={`80px 0px 40px`}
      xlPadding={`100px 0px 40px`}
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
          Vybavení wellness
        </SectionTitle>

        <GridRow sm={1} lg={1} cols={2} gap={`32px`}>
          <ImgWrapper>
            <StyledImg w={`100%`} src={img} alt='img' />
          </ImgWrapper>

          <FlexRow itemCenter padding={`0px 0px 0px 50px`}>
            <div>
              <GridRow sm={1} lg={2} gap={`32px`} max='true' around cols={2}>
                {data.map(({ id, icon, text, description }) => {
                  return (
                    <FlexRow gap={`15px`} lgGap={`12px`} itemCenter key={id}>
                      {/* <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                        <StyledImg w={`45px`} src={icon} alt="img" />
                      </ImgWrapper> */}
                      <div>
                        <IconTitle
                          fontSize={`18px`}
                          linHeight={`26px`}
                          xlfontSize={`14px`}
                          mdFontSize={`14px`}
                          mdLineheight={`20px`}
                          textAlign={`left`}
                          smFontSize={`16px`}
                          smLineheight={`26px`}
                          fontWeight={`700`}
                          xlfontWeight={`700`}
                          smFontWeight={`700`}
                          mdfontWeight={`700`}
                          color={`#262B3B`}
                          mb={'2px'}
                          mdMargibBottom={`2px`}
                          mdtextAlign={``}
                          smtextAlign={``}
                          smMargibBottom={``}
                        >
                          {text}
                        </IconTitle>
                        <IconTitle
                          color={`#262B3B`}
                          fontSize={`16px`}
                          linHeight={`24px`}
                          xlfontSize={`14px`}
                          mdFontSize={`14px`}
                          mdLineheight={`20px`}
                          textAlign={`left`}
                          smFontSize={`16px`}
                          smLineheight={`26px`}
                          fontWeight={`400`}
                          xlfontWeight={`400`}
                          smFontWeight={`400`}
                          mdfontWeight={`400`}
                          mb={'0px'}
                          mdMargibBottom={`0px`}
                          mdtextAlign={``}
                          smtextAlign={``}
                          smMargibBottom={``}
                        >
                          {description}
                        </IconTitle>
                      </div>
                    </FlexRow>
                  )
                })}
              </GridRow>
              <ButtonWrapper>
                <a
                  href='https://vila-republika.reservio.com/booking/business/service?businessId=89b43bc7-3262-4446-89fc-eda62a80fa7c'
                  target='_blank'
                >
                  <Button margin={`50px 0px 0px 0px`}>
                    Vytvořit rezervaci
                  </Button>
                </a>
              </ButtonWrapper>
            </div>
          </FlexRow>
        </GridRow>
      </Container>
    </Wrapper>
  )
}

export default VybaveniWellness
const data = [
  {
    id: 1,
    text: 'Finská a bio sauna',
    description: `pro 5 osob`,
    icon: dalsi1,
  },
  {
    id: 2,
    text: 'Ochlazovací bazének',
    description: `s ledovou vodou`,
    icon: dalsi1,
  },
  {
    id: 3,
    text: 'Whirlpool vana',
    description: `pro tři osoby`,
    icon: chytra1,
  },
  {
    id: 4,
    text: 'Odpočinkový kout',
    description: `s výhledem do zeleně`,
    icon: parkov1,
  },

  {
    id: 5,
    text: 'Ochlazovací vědro',
    description: `s ledovou vodou`,
    icon: union1,
  },
  {
    id: 6,
    text: 'Šatní skříňky',
    description: `pro úschovu věcí`,
    icon: union1,
  },
]
