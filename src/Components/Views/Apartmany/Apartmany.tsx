import React from 'react'
import {
  Container,
  FlexRow,
  GridRow,
  ImgWrapper,
  StyledImg,
  Wrapper,
} from '../../../Styled/Theme.styles'
import { Desc, IconTitle } from '../../../Styled/Typography.styles'
import leftArrowImg from '../../../images/LeftArrow.svg'
import usersIcon from '../../../images/users.svg'
import cardIcon from '../../../images/card.svg'
import cameraIcon from '../../../images/Icon feather-camera.svg'
import Lightbox from 'react-spring-lightbox'
import {
  Button,
  ButtonWrapper,
  ButtonWrapperFoto,
} from '../../../Styled/Button.styles'
import { SlideContent } from '../../../Styled/Swiper.styles'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { buildImageUrl } from 'cloudinary-build-url'

const Apartmany: React.FC = () => {
  const [carouselIndex, setCarouseIndex] = React.useState(0)
  const [showGallery, setShowGallery] = React.useState(false)
  const [selectedGallery, setSelectedGallery] = React.useState(0)

  const imageConfig = {
    transformations: {
      format: 'png',
    },
  }

  // AP 1
  const ap1Image1 = buildImageUrl(
    'v1673797462/vilaRepublikaFoto/byt1/DSC07382-HDR_x8twfm.jpg',
    imageConfig,
  )

  const ap1Image2 = buildImageUrl(
    'v1673797459/vilaRepublikaFoto/byt1/DSC07388-HDR_hc02vu.jpg',
    {},
  )

  const ap1Image3 = buildImageUrl(
    'v1673797461/vilaRepublikaFoto/byt1/DSC07418-HDR_oxlcy5.jpg',
    {},
  )

  const ap1Image4 = buildImageUrl(
    'v1673797465/vilaRepublikaFoto/byt1/DSC07421-HDR_cqlm0x.jpg',
    {},
  )

  const ap1Image5 = buildImageUrl(
    'v1673797459/vilaRepublikaFoto/byt1/DSC07427-HDR_ij0maf.jpg',
    {},
  )

  const ap1Image6 = buildImageUrl(
    'v1673797458/vilaRepublikaFoto/byt1/DSC07433-HDR_cy9sjv.jpg',
    {},
  )

  // AP 2

  const ap2Image1 = '/images/apartmany/byt2/DSC09444-HDR_euewl0.jpg'

  // const ap2Image2 = '/images/apartmany/byt2/DSC09450-HDR_kgjnji.jpg'

  const ap2Image3 = '/images/apartmany/byt2/DSC09474-HDR_oysnn4.jpg'

  // const ap2Image4 = '/images/apartmany/byt2/DSC09514-HDR_ewlvn7.jpg'

  const ap2Image5 = '/images/apartmany/byt2/DSC09477-HDR_w4300b.jpg'

  // const ap2Image6 = '/images/apartmany/byt2/DSC09465-HDR_h7jpen.jpg'

  const ap2Image7 = '/images/apartmany/byt2/DSC09483-HDR_oh3wvl.jpg'

  // const ap2Image8 = '/images/apartmany/byt2/DSC09471-HDR_ixxlbw.jpg'

  // const ap2Image9 = '/images/apartmany/byt2/DSC09486-HDR_jrxsjc.jpg'

  // const ap2Image10 = '/images/apartmany/byt2/DSC09648_tbbuhy.jpg'

  // AP 3

  const ap3Image1 = buildImageUrl(
    'v1705755250/vilaRepublikaFoto/byt3/DSC08873-HDR_wjoscf.jpg',
    {},
  )

  const ap3Image2 = buildImageUrl(
    'v1705755235/vilaRepublikaFoto/byt3/DSC08806-HDR_ped1k7.jpg',
    {},
  )

  const ap3Image3 = buildImageUrl(
    'v1705755225/vilaRepublikaFoto/byt3/DSC08800-HDR_ek4sjr.jpg',
    {},
  )

  const ap3Image4 = buildImageUrl(
    'v1705755221/vilaRepublikaFoto/byt3/DSC08803-HDR_onxduc.jpg',
    {},
  )

  const ap3Image5 = buildImageUrl(
    'v1705755227/vilaRepublikaFoto/byt3/DSC08821-HDR_ktd3i3.jpg',
    {},
  )

  const ap3Image6 = buildImageUrl(
    'v1705755227/vilaRepublikaFoto/byt3/DSC08818-HDR_ohc0w7.jpg',
    {},
  )

  const ap3Image7 = buildImageUrl(
    'v1705755236/vilaRepublikaFoto/byt3/DSC08824-HDR_f2ph9x.jpg',
    {},
  )

  const ap3Image8 = buildImageUrl(
    'v1705755236/vilaRepublikaFoto/byt3/DSC08815-HDR_s2mr6a.jpg',
    {},
  )

  const ap3Image9 = buildImageUrl(
    'v1705755251/vilaRepublikaFoto/byt3/DSC08930-HDR_nqhos4.jpg',
    {},
  )

  const ap3Image10 = buildImageUrl(
    'v1705755250/vilaRepublikaFoto/byt3/DSC08867-HDR_mtgqmv.jpg',
    {},
  )

  const ap3Image11 = buildImageUrl(
    'v1705755238/vilaRepublikaFoto/byt3/DSC08876-HDR_jlke9w.jpg',
    {},
  )

  const ap3Image12 = buildImageUrl(
    'v1705755253/vilaRepublikaFoto/byt3/DSC08881-HDR_m6szij.jpg',
    {},
  )

  const ap3Image13 = buildImageUrl(
    'v1705755249/vilaRepublikaFoto/byt3/DSC08903-HDR_txxfzk.jpg',
    {},
  )

  // AP 4
  const ap4Image1 = buildImageUrl(
    'v1675802254/vilaRepublikaFoto/byt4/DSC08238-HDR_mzdbyr.jpg',
    {},
  )

  const ap4Image2 = buildImageUrl(
    'v1675802258/vilaRepublikaFoto/byt4/DSC08274-HDR_hmhsy0.jpg',
    {},
  )

  const ap4Image3 = buildImageUrl(
    'v1673797428/vilaRepublikaFoto/byt4/DSC07557-HDR_qp18zg.jpg',
    {},
  )

  const ap4Image4 = buildImageUrl(
    'v1673797431/vilaRepublikaFoto/byt4/DSC07527-HDR_qq1xqb.jpg',
    {},
  )

  const ap4Image5 = buildImageUrl(
    'v1675802257/vilaRepublikaFoto/byt4/DSC08289-HDR_e9kr2k.jpg',
    {},
  )

  const ap4Image6 = buildImageUrl(
    'v1675802258/vilaRepublikaFoto/byt4/DSC08259-HDR_asblp3.jpg',
    {},
  )

  // AP 5

  const ap5Image1 = buildImageUrl(
    'v1728982510/vilaRepublikaFoto/byt5/LL406469-HDR-min_ks7xwb.jpg',
    {},
  )

  const ap5Image2 = buildImageUrl(
    'v1728982516/vilaRepublikaFoto/byt5/LL406448-HDR-min_e8ukhy.jpg',
    {},
  )

  const ap5Image3 = buildImageUrl(
    'v1728982508/vilaRepublikaFoto/byt5/LL406427-HDR-min_vnkncg.jpg',
    {},
  )

  const ap5Image4 = buildImageUrl(
    'v1728205639/vilaRepublikaFoto/byt5/DSC00421-HDR-min_hisqo1.jpg',

    {},
  )

  const ap5Image5 = buildImageUrl(
    'v1675799776/vilaRepublikaFoto/byt5/DSC08354-HDR_liikg7.jpg',
    {},
  )

  const ap5Image6 = buildImageUrl(
    'v1675799779/vilaRepublikaFoto/byt5/DSC08405-HDR_xba91c.jpg',
    {},
  )

  // AP 6

  const ap6Image1 = buildImageUrl(
    'v1675801410/vilaRepublikaFoto/byt6/DSC08322-HDR_gd7djq.jpg',
    {},
  )

  const ap6Image2 = buildImageUrl(
    'v1675801411/vilaRepublikaFoto/byt6/DSC08292-HDR-2_epxgyj.jpg',
    {},
  )

  const ap6Image3 = buildImageUrl(
    'v1675801405/vilaRepublikaFoto/byt6/DSC08316-HDR_jgxs2h.jpg',
    {},
  )

  const ap6Image4 = buildImageUrl(
    'v1675801405/vilaRepublikaFoto/byt6/DSC08310-HDR_dccwul.jpg',
    {},
  )

  const ap6Image5 = buildImageUrl(
    'v1675801404/vilaRepublikaFoto/byt6/DSC08301-HDR_mfiyhx.jpg',
    {},
  )

  const ap6Image6 = buildImageUrl(
    'v1675801404/vilaRepublikaFoto/byt6/DSC08307-HDR_wuz4e8.jpg',
    {},
  )

  // AP 7

  const ap7Image1 = buildImageUrl(
    'v1675799506/vilaRepublikaFoto/byt7/DSC08421-HDR_dfz6rg.jpg',
    {},
  )

  const ap7Image2 = buildImageUrl(
    'v1675799512/vilaRepublikaFoto/byt7/DSC08460-HDR_cinhnp.jpg',
    {},
  )

  const ap7Image3 = buildImageUrl(
    'v1677920201/vilaRepublikaFoto/byt7/new/DSC09554-HDR_ggz5al.jpg',
    {},
  )

  const ap7Image4 = buildImageUrl(
    'v1677920193/vilaRepublikaFoto/byt7/new/DSC09578-HDR_rnpozp.jpg',
    {},
  )

  const ap7Image5 = buildImageUrl(
    'v1677920193/vilaRepublikaFoto/byt7/new/DSC09581-HDR_cn91gs.jpg',
    {},
  )

  const ap7Image6 = buildImageUrl(
    'v1677920198/vilaRepublikaFoto/byt7/new/DSC09575-HDR_vfhyfx.jpg',
    {},
  )

  const ap7Image6_1 = buildImageUrl(
    'v1677920191/vilaRepublikaFoto/byt7/new/DSC09584-HDR_qrrqim.jpg',
    {},
  )

  const ap7Image7 = buildImageUrl(
    'v1677920189/vilaRepublikaFoto/byt7/new/DSC09634-HDR_xp99kv.jpg',
    {},
  )

  const ap7Image8 = buildImageUrl(
    'v1677920192/vilaRepublikaFoto/byt7/new/DSC09596-HDR_xm60we.jpg',
    {},
  )

  const ap7Image9 = buildImageUrl(
    'v1677920192/vilaRepublikaFoto/byt7/new/DSC09587-HDR_afux7f.jpg',
    {},
  )

  const ap7Image10 = buildImageUrl(
    'v1677920191/vilaRepublikaFoto/byt7/new/DSC09625-HDR_rerqnr.jpg',
    {},
  )

  // AP 8
  const ap8Image1 = buildImageUrl(
    'v1732624209/vilaRepublikaFoto/zahradniDomek/LL408068-HDR_gcvuad.jpg',
    {},
  )

  const ap8Image2 = buildImageUrl(
    'v1728981009/vilaRepublikaFoto/zahradniDomek/LL406604-min_drw5dr.jpg',
    {},
  )

  const ap8Image3 = buildImageUrl(
    'v1732624207/vilaRepublikaFoto/zahradniDomek/LL408092-HDR_n9fcib.jpg',
    {},
  )

  const ap8Image4 = buildImageUrl(
    'v1732624205/vilaRepublikaFoto/zahradniDomek/LL408134-HDR_bidcdy.jpg',
    {},
  )

  const ap8Image5 = buildImageUrl(
    'v1732624210/vilaRepublikaFoto/zahradniDomek/LL408077-HDR_dndiui.jpg',
    {},
  )

  const ap8Image6 = buildImageUrl(
    'v1732624210/vilaRepublikaFoto/zahradniDomek/LL408080-HDR_aj5bar.jpg',
    {},
  )

  const ap8Image7 = buildImageUrl(
    'v1732624202/vilaRepublikaFoto/zahradniDomek/LL408101-HDR_rczxde.jpg',
    {},
  )

  const ap8Image8 = buildImageUrl(
    'v1732624207/vilaRepublikaFoto/zahradniDomek/LL408116-HDR_aytefo.jpg',
    {},
  )

  const ap8Image9 = buildImageUrl(
    'v1732624175/vilaRepublikaFoto/zahradniDomek/LL408119-HDR_l3dmyy.jpg',
    {},
  )

  //koupelna
  const ap8Image10 = buildImageUrl(
    'v1728981007/vilaRepublikaFoto/zahradniDomek/LL406598-min_dtzfse.jpg',
    {},
  )

  const ap8Image11 = buildImageUrl(
    'v1728981006/vilaRepublikaFoto/zahradniDomek/LL406593-min_uj18m0.jpg',

    {},
  )

  const apImages = [
    // ap 1
    [ap1Image1, ap1Image2, ap1Image3, ap1Image4, ap1Image5, ap1Image6],
    // ap 2
    [
      ap2Image1,
      // ap2Image2,
      ap2Image3,
      // ap2Image4,
      ap2Image5,
      // ap2Image6,
      ap2Image7,
      // ap2Image8,
      // ap2Image9,
      // ap2Image10,
    ],
    // ap 3
    [
      ap3Image1,
      ap3Image2,
      ap3Image3,
      ap3Image4,
      ap3Image5,
      ap3Image6,
      ap3Image7,
      ap3Image8,
      ap3Image9,
      ap3Image10,
      ap3Image11,
      ap3Image12,
      ap3Image13,
    ],

    // ap 4
    [ap4Image1, ap4Image2, ap4Image3, ap4Image4, ap4Image5, ap4Image6],
    // ap 5
    [ap5Image1, ap5Image2, ap5Image3, ap5Image4, ap5Image5, ap5Image6],
    // ap 6
    [ap6Image1, ap6Image2, ap6Image3, ap6Image4, ap6Image5, ap6Image6],
    // ap 7
    [
      ap7Image1,
      ap7Image2,
      ap7Image3,
      ap7Image4,
      ap7Image5,
      ap7Image6,
      ap7Image6_1,
      ap7Image7,
      ap7Image8,
      ap7Image9,
      ap7Image10,
    ],
    // ap 8
    [
      ap8Image1,
      ap8Image2,
      ap8Image3,
      ap8Image4,
      ap8Image5,
      ap8Image6,
      ap8Image7,
      ap8Image8,
      ap8Image9,
      ap8Image10,
      ap8Image11,
    ],
  ]

  const images = apImages[selectedGallery]

  const handleNext = () => {
    if (carouselIndex === images.length - 1) {
      setCarouseIndex(0)
    } else {
      setCarouseIndex(carouselIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (carouselIndex === 0) {
      setCarouseIndex(images.length - 1)
    } else {
      setCarouseIndex(carouselIndex - 1)
    }
  }

  const lightboxImages: any = images.map(image => {
    return { src: image }
  })

  return (
    <Wrapper
      mdPadding={`130px 0px 30px`}
      xlPadding={`130px 0px 30px`}
      padding={`130px 0px 30px`}
    >
      <Container>
        {/* AP 5 */}
        <GridRow sm={1} cols={2} gap={`32px`} between margin={'0px 0px 120px'}>
          <FlexRow itemCenter between gap={`32px`} className='orderReverse'>
            <div>
              <div>
                <ApNameText>Losinský</ApNameText>
                <ApPopisekText>s balkonem a výhledem na kostel</ApPopisekText>
              </div>
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                smGap={`80px`}
                mdDirection={`row`}
                itemCenter
                margin={`0px 0px 20px 0px`}
                smcenter={`center`}
              >
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={usersIcon} alt='img' />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>2 - 6 osob</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={cardIcon} alt='img' />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 1390 kč</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

              <Desc
                align={`left`}
                width={`509px`}
                smFontsize={`18px`}
                smLineHeight={`30px`}
                smalign={`center`}
              >
                Vzdušný apartmán, jehož dominantu tvoří dřevěné parkety a bílé
                dřevěné obložení stěn. Olivově zelené akcenty a designové
                osvětlení dodávají interiérům prvorepublikový půvab. Z balkonu
                si můžete užívat výhledy na hory a místní kostel.
                <br />
                <br />
                Probouzet vás budou první paprsky slunce díky východně
                orientované ložnici. A ve velkoryse pojaté obytné části
                s jídelnou a kuchyní se budete cítit skvěle. Luxus a historie
                lázeňství si v tomto apartmánu podávají ruce.
              </Desc>
              <ButtonWrapper>
                <Link to='/rezervace'>
                  <Button margin={`35px 0px 10px 0px`}>
                    Vytvořit rezervaci
                  </Button>
                </Link>{' '}
              </ButtonWrapper>
            </div>
          </FlexRow>
          <div>
            <SlideWrapper
              onClick={() => {
                setShowGallery(true)
                setSelectedGallery(4)
              }}
            >
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={ap5Image1} alt='img' />
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: 'auto' }}>
                  <ButtonWrapperFoto>
                    <FlexRow
                      gap={`12px`}
                      maxWidth={`350px`}
                      padding={`12px 12px`}
                      mdPadding={`12px 12px`}
                      smPadding={`12px 12px`}
                      itemCenter
                      center
                      bgColor={`#FFFFFF`}
                    >
                      <img src={cameraIcon} alt='' />

                      <FotogalerieText>Fotogalerie</FotogalerieText>
                    </FlexRow>
                  </ButtonWrapperFoto>
                </div>
              </SlideContent>
            </SlideWrapper>
          </div>
        </GridRow>

        {/* AP 1 */}
        {/* <GridRow sm={1} cols={2} gap={`5px`} between margin={'0px 0px 120px'}>
          <div>
            <SlideWrapper
              onClick={() => {
                setShowGallery(true)
                setSelectedGallery(0)
              }}
            >
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={ap1Image1} alt='img' />
                <ButtonWrapperFoto>
                  <FlexRow
                    gap={`12px`}
                    maxWidth={`350px`}
                    padding={`12px 12px`}
                    mdPadding={`12px 12px`}
                    smPadding={`12px 12px`}
                    itemCenter
                    center
                    bgColor={`#FFFFFF`}
                  >
                    <img src={cameraIcon} alt='' />
                    <FotogalerieText>Fotogalerie</FotogalerieText>
                  </FlexRow>
                </ButtonWrapperFoto>
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: 'auto' }}></div>
              </SlideContent>
            </SlideWrapper>
          </div>
          <FlexRow
            itemCenter
            between
            gap={`32px`}
            padding={`0px 0px 0px 100px`}
          >
            <div>
              <div>
                <ApNameText>Slunečný</ApNameText>
                <ApPopisekText>s terasou se vstupem na zahradu</ApPopisekText>
              </div>
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                smGap={`60px`}
                mdDirection={`row`}
                itemCenter
                margin={`0px 0px 20px 0px`}
                smcenter={`center`}
              >
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={usersIcon} alt='img' />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>6 osob</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={cardIcon} alt='img' />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 2900 Kč</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

              <Desc
                align={`left`}
                width={`509px`}
                smLineHeight={`30px`}
                smalign={`center`}
                smFontsize={`18px`}
              >
                Optimistické interiéry, ve kterých se zabydlelo slunce. Slunečný
                apartmán se dvěma ložnicemi je díky své jižní orientaci plný
                denního světla. Má vlastní terasu a samostatný vstup na zahradu.
                <br />
                <br />
                Na čerstvém vzduchu budete moct trávit času, kolik se vám jen
                zachce. Uklidňující atmosféru zde navozují přírodní materiály a
                neutrální barvy. Zrenovované parkety a dřevěná obložení zase
                umocňují elegantní styl. Nápadité designové osvětlení od
                italského výrobce se stará o unikátní světelnou pohodu.
              </Desc>

              <ButtonWrapper>
                <Link to='/rezervace'>
                  <Button margin={`35px 0px 10px 0px`}>
                    Vytvořit rezervaci
                  </Button>
                </Link>{' '}
              </ButtonWrapper>
            </div>
          </FlexRow>
        </GridRow> */}

        {/* AP 6 */}
        <GridRow sm={1} cols={2} gap={`5px`} between margin={'0px 0px 120px'}>
          <div>
            <SlideWrapper
              onClick={() => {
                setShowGallery(true)
                setSelectedGallery(5)
              }}
            >
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={ap6Image1} alt='img' />
                <ButtonWrapperFoto>
                  <FlexRow
                    gap={`12px`}
                    maxWidth={`350px`}
                    padding={`12px 12px`}
                    mdPadding={`12px 12px`}
                    smPadding={`12px 12px`}
                    itemCenter
                    center
                    bgColor={`#FFFFFF`}
                  >
                    <img src={cameraIcon} alt='' />
                    <FotogalerieText>Fotogalerie</FotogalerieText>
                  </FlexRow>
                </ButtonWrapperFoto>
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: 'auto' }}></div>
              </SlideContent>
            </SlideWrapper>
          </div>
          <FlexRow
            itemCenter
            between
            gap={`32px`}
            padding={`0px 0px 0px 100px`}
          >
            <div>
              <div>
                <ApNameText>Prvorepublikový</ApNameText>
                <ApPopisekText>s útulným podkrovím a vanou</ApPopisekText>
              </div>
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                smGap={`60px`}
                mdDirection={`row`}
                itemCenter
                margin={`0px 0px 20px 0px`}
                smcenter={`center`}
              >
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={usersIcon} alt='img' />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>2 - 6 osob</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={cardIcon} alt='img' />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 1690 Kč</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

              <Desc
                align={`left`}
                width={`509px`}
                smLineHeight={`30px`}
                smalign={`center`}
                smFontsize={`18px`}
              >
                Pro rozvětvenou rodinu i partu přátel. Prvorepublikový apartmán
                sestává ze dvou útulných ložnic, které se ukrývají v dřevěném
                podkroví. Vyspíte se do růžova – pokoje jsou velmi tiché a
                skýtají pohodlí. V obývací části jsme vše nachystali pro
                společné vaření, stolování a lenošení.
                <br />
                <br />
                Máte chuť na horkou koupel po celém dni na svahu? Ani to nebude
                problém. Tento slunečný apartmán vás okouzlí svou elegancí,
                keramickou dlažbou s prvorepublikovým dekorem a dřevěnými prvky,
                které připomínají horskou chalupu.
              </Desc>

              <ButtonWrapper>
                <Link to='/rezervace'>
                  <Button margin={`35px 0px 10px 0px`}>
                    Vytvořit rezervaci
                  </Button>
                </Link>{' '}
              </ButtonWrapper>
            </div>
          </FlexRow>
        </GridRow>

        {/* AP 2 */}
        <GridRow sm={1} cols={2} gap={`32px`} between margin={'0px 0px 120px'}>
          <FlexRow itemCenter between gap={`32px`} className='orderReverse'>
            <div>
              <div>
                <ApNameText>Lázeňský</ApNameText>
                <ApPopisekText>s přímým vstupem do wellness</ApPopisekText>
              </div>
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                smGap={`80px`}
                mdDirection={`row`}
                itemCenter
                margin={`0px 0px 20px 0px`}
                smcenter={`center`}
              >
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={usersIcon} alt='img' />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>2 - 6 osob</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={cardIcon} alt='img' />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 1390 kč</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

              <Desc
                align={`left`}
                width={`509px`}
                smFontsize={`18px`}
                smLineHeight={`30px`}
                smalign={`center`}
              >
                Oblékněte župan, nazujte pantofle a vydejte se do SPA. Tento
                klidný apartmán představuje ideální volbu pro milovníky relaxu.
                Do sauny a wellness nemusíte chodit přes chodbu, ale pohodlně
                přímo z bytu.
                <br />
                <br />
                Interiéry s poctou minimalismu, odkazy na severskou architekturu
                a zachovalými prvorepublikovými prvky skvěle ladí s okolní
                krajinou Jeseníků. Doporučujeme zamilovaným párům a všem, kdo si
                chtějí naplno užít dovolenou v lázeňském duchu.
              </Desc>
              <ButtonWrapper>
                <Link to='/rezervace'>
                  <Button margin={`35px 0px 10px 0px`}>
                    Vytvořit rezervaci
                  </Button>
                </Link>
              </ButtonWrapper>
            </div>
          </FlexRow>
          <div>
            <SlideWrapper
              onClick={() => {
                setShowGallery(true)
                setSelectedGallery(1)
              }}
            >
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={ap2Image1} alt='img' />
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: 'auto' }}>
                  <ButtonWrapperFoto>
                    <FlexRow
                      gap={`12px`}
                      maxWidth={`350px`}
                      padding={`12px 12px`}
                      mdPadding={`12px 12px`}
                      smPadding={`12px 12px`}
                      itemCenter
                      center
                      bgColor={`#FFFFFF`}
                    >
                      <img src={cameraIcon} alt='' />

                      <FotogalerieText>Fotogalerie</FotogalerieText>
                    </FlexRow>
                  </ButtonWrapperFoto>
                </div>
              </SlideContent>
            </SlideWrapper>
          </div>
        </GridRow>

        {/* AP 4 */}
        <GridRow sm={1} cols={2} gap={`5px`} between margin={'0px 0px 120px'}>
          <div>
            <SlideWrapper
              onClick={() => {
                setShowGallery(true)
                setSelectedGallery(3)
              }}
            >
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={ap4Image1} alt='img' />
                <ButtonWrapperFoto>
                  <FlexRow
                    gap={`12px`}
                    maxWidth={`350px`}
                    padding={`12px 12px`}
                    mdPadding={`12px 12px`}
                    smPadding={`12px 12px`}
                    itemCenter
                    center
                    bgColor={`#FFFFFF`}
                  >
                    <img src={cameraIcon} alt='' />
                    <FotogalerieText>Fotogalerie</FotogalerieText>
                  </FlexRow>
                </ButtonWrapperFoto>
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: 'auto' }}></div>
              </SlideContent>
            </SlideWrapper>
          </div>
          <FlexRow
            itemCenter
            between
            gap={`32px`}
            padding={`0px 0px 0px 100px`}
          >
            <div>
              <div>
                <ApNameText>Pradědův</ApNameText>
                <ApPopisekText>s terasou a krásným výhledem</ApPopisekText>
              </div>
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                smGap={`60px`}
                mdDirection={`row`}
                itemCenter
                margin={`0px 0px 20px 0px`}
                smcenter={`center`}
              >
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={usersIcon} alt='img' />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>2 - 4 osoby</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={cardIcon} alt='img' />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 1390 Kč</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

              <Desc
                align={`left`}
                width={`509px`}
                smLineHeight={`30px`}
                smalign={`center`}
                smFontsize={`18px`}
              >
                Rádi se kocháte výhledy na panorama hor? V Pradědově apartmánu
                budete mít Jeseníky jako na dlani. Z vlastní terasy můžete
                sledovat dalekohledem krásy zdejší krajiny a zasněžené vrcholky.
                <br />
                <br />
                Nádherný apartmán v prvorepublikovém stylu vás okouzlí dřevěným
                obložením, zrenovovanými parketami a jemným barevným laděním.
                Jistě vás potěší i nadstandardně velká obývací část pro chvíle
                pohody a nicnedělání.
              </Desc>

              <ButtonWrapper>
                <Link to='/rezervace'>
                  <Button margin={`35px 0px 10px 0px`}>
                    Vytvořit rezervaci
                  </Button>
                </Link>{' '}
              </ButtonWrapper>
            </div>
          </FlexRow>
        </GridRow>

        {/* AP 7 */}
        <GridRow sm={1} cols={2} gap={`32px`} between margin={'0px 0px 120px'}>
          <FlexRow itemCenter between gap={`32px`} className='orderReverse'>
            <div>
              <div>
                <ApNameText>Prezidentský</ApNameText>
                <ApPopisekText>s krásou původního krovu</ApPopisekText>
              </div>
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                smGap={`80px`}
                mdDirection={`row`}
                itemCenter
                margin={`0px 0px 20px 0px`}
                smcenter={`center`}
              >
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={usersIcon} alt='img' />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>2 - 9 osob</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={cardIcon} alt='img' />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 3490 kč</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

              <Desc
                align={`left`}
                width={`509px`}
                smFontsize={`18px`}
                smLineHeight={`30px`}
                smalign={`center`}
              >
                Klenot projektu Vila Republika. Nádherný apartmán
                s panoramatickou dispozicí poskytuje z každé místnosti překrásné
                výhledy. Má celkem tři ložnice, velký obývací prostor s kuchyní
                a jídelní částí. V klidu se zde může ubytovat až 12 osob a každý
                najde soukromí. Apartmán vás upoutá velice zajímavým a nevšedním
                designem.
                <br />
                <br />
                Vše tu voní dřevem. Nádherným prvkem je přiznané původní
                trámoví, stejně jako kruhová okna s průhledy do malebné krajiny.
                Jako by se tu čas zastavil. V tomto apartmánu s rodinou a
                přáteli zapomenete na starosti všedních dní.
              </Desc>
              <ButtonWrapper>
                <Link to='/rezervace'>
                  <Button margin={`35px 0px 10px 0px`}>
                    Vytvořit rezervaci
                  </Button>
                </Link>{' '}
              </ButtonWrapper>
            </div>
          </FlexRow>
          <div>
            <SlideWrapper
              onClick={() => {
                setShowGallery(true)
                setSelectedGallery(6)
              }}
            >
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={ap7Image1} alt='img' />
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: 'auto' }}>
                  <ButtonWrapperFoto>
                    <FlexRow
                      gap={`12px`}
                      maxWidth={`350px`}
                      padding={`12px 12px`}
                      mdPadding={`12px 12px`}
                      smPadding={`12px 12px`}
                      itemCenter
                      center
                      bgColor={`#FFFFFF`}
                    >
                      <img src={cameraIcon} alt='' />

                      <FotogalerieText>Fotogalerie</FotogalerieText>
                    </FlexRow>
                  </ButtonWrapperFoto>
                </div>
              </SlideContent>
            </SlideWrapper>
          </div>
        </GridRow>

        {/* AP 3 */}
        <GridRow sm={1} cols={2} gap={`32px`} between margin={'0px 0px 120px'}>
          <div>
            <SlideWrapper
              onClick={() => {
                setShowGallery(true)
                setSelectedGallery(2)
              }}
            >
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={ap3Image1} alt='img' />
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: 'auto' }}>
                  <ButtonWrapperFoto>
                    <FlexRow
                      gap={`12px`}
                      maxWidth={`350px`}
                      padding={`12px 12px`}
                      mdPadding={`12px 12px`}
                      smPadding={`12px 12px`}
                      itemCenter
                      center
                      bgColor={`#FFFFFF`}
                    >
                      <img src={cameraIcon} alt='' />

                      <FotogalerieText>Fotogalerie</FotogalerieText>
                    </FlexRow>
                  </ButtonWrapperFoto>
                </div>
              </SlideContent>
            </SlideWrapper>
          </div>
          <FlexRow
            itemCenter
            between
            gap={`32px`}
            padding={`0px 0px 0px 100px`}
          >
            <div>
              <div>
                <ApNameText>Jesenický</ApNameText>
                <ApPopisekText>s vlastní saunou a koupacím sudem</ApPopisekText>
              </div>
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                smGap={`80px`}
                mdDirection={`row`}
                itemCenter
                margin={`0px 0px 20px 0px`}
                smcenter={`center`}
              >
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={usersIcon} alt='img' />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>2 - 8 osob</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={cardIcon} alt='img' />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 2090 kč</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

              <Desc
                align={`left`}
                width={`509px`}
                smFontsize={`18px`}
                smLineHeight={`30px`}
                smalign={`center`}
              >
                Užijte si saunování na čerstvém vzduchu. Největším pokladem
                tohoto apartmánu je privátní venkovní wellness. Přístup budete
                mít na zahradu, kde se nachází srub s finskou saunou, vyhřátý
                koupací sud a ochlazovací sud s ledovou vodou. Aktivní dovolenou
                tak můžete propojit s ozdravnou relaxací. Pokud máte pobyt na
                dvě a více nocí, tak v rámci rezervace apartmánu máte k
                dispozici 2,5 hodiny ve wellness, kde si můžete saunu a koupací
                sud sami kdykoliv roztopit pomocí nachystaného dřeva.
                <br />
                <br />
                Jesenický apartmán harmonicky propojuje moderní luxus s
                historickým šarmem. Interiéru dominují prvorepublikové prvky,
                oblé tvary a secesní zelená. Mimořádný vizuální efekt tvoří
                krásné klenbové stropy. Pokud hledáte svůj kousek ráje,
                Jesenický apartmán splní vaše představy.
              </Desc>
              <ButtonWrapper>
                <Link to='/rezervace'>
                  <Button margin={`35px 0px 10px 0px`}>
                    Vytvořit rezervaci
                  </Button>
                </Link>
              </ButtonWrapper>
            </div>
          </FlexRow>
        </GridRow>

        {/* AP 7 */}
        <GridRow sm={1} cols={2} gap={`32px`} between margin={'0px 0px 120px'}>
          <FlexRow itemCenter between gap={`32px`} className='orderReverse'>
            <div>
              <div>
                <ApNameText>Zahradní</ApNameText>
                <ApPopisekText>s výhledem do zahrady</ApPopisekText>
              </div>
              <FlexRow
                gap={`15px`}
                lgGap={`12px`}
                smGap={`80px`}
                mdDirection={`row`}
                itemCenter
                margin={`0px 0px 20px 0px`}
                smcenter={`center`}
              >
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={usersIcon} alt='img' />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>2 - 5 osob</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
                <div>
                  <FlexRow
                    gap={`15px`}
                    lgGap={`12px`}
                    mdDirection={`column`}
                    itemCenter
                  >
                    <ImgWrapper smWidth={`45px`} xlWidth={`45px`}>
                      <StyledImg w={`45px`} src={cardIcon} alt='img' />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 2090 kč</SmallBoldText>
                    </div>
                  </FlexRow>
                </div>
              </FlexRow>

              <Desc
                align={`left`}
                width={`509px`}
                smFontsize={`18px`}
                smLineHeight={`30px`}
                smalign={`center`}
              >
                Nádherný apartmán s panoramatickou dispozicí poskytuje z každé
                místnosti překrásné výhledy. Má celkem dvě ložnice, velký
                obývací prostor s kuchyní a jídelní částí. V klidu se zde může
                ubytovat až 4 osoby a každý najde soukromí. Apartmán vás upoutá
                krásným výhledem.
              </Desc>
              <ButtonWrapper>
                <Link to='/rezervace'>
                  <Button margin={`35px 0px 10px 0px`}>
                    Vytvořit rezervaci
                  </Button>
                </Link>{' '}
              </ButtonWrapper>
            </div>
          </FlexRow>
          <div>
            <SlideWrapper
              onClick={() => {
                setShowGallery(true)
                setSelectedGallery(7)
              }}
            >
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={ap8Image1} alt='img' />
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: 'auto' }}>
                  <ButtonWrapperFoto>
                    <FlexRow
                      gap={`12px`}
                      maxWidth={`350px`}
                      padding={`12px 12px`}
                      mdPadding={`12px 12px`}
                      smPadding={`12px 12px`}
                      itemCenter
                      center
                      bgColor={`#FFFFFF`}
                    >
                      <img src={cameraIcon} alt='' />

                      <FotogalerieText>Fotogalerie</FotogalerieText>
                    </FlexRow>
                  </ButtonWrapperFoto>
                </div>
              </SlideContent>
            </SlideWrapper>
          </div>
        </GridRow>

        <Lightbox
          isOpen={showGallery}
          onPrev={handlePrevious}
          onNext={handleNext}
          images={lightboxImages}
          currentIndex={carouselIndex}
          renderHeader={() => (
            // @ts-ignore
            <div onClick={() => setShowGallery(false)} style={styleClose}>
              x
            </div>
          )}
          renderPrevButton={() => (
            // @ts-ignore
            <ArrowWrap onClick={handlePrevious} style={prevArrowStyle}>
              <img src={leftArrowImg}></img>
            </ArrowWrap>
          )}
          renderNextButton={() => (
            // @ts-ignore
            <ArrowWrap onClick={handleNext} style={nextArrowStyle}>
              <img
                style={{ transform: 'rotate(180deg)' }}
                src={leftArrowImg}
              ></img>
            </ArrowWrap>
          )}
          style={{ background: 'rgba(0,0,0,0.99)' }}
          onClose={() => setShowGallery(false)}
        />
      </Container>
    </Wrapper>
  )
}

const styleClose = {
  position: 'absolute',
  zIndex: 99,
  right: 20,
  top: 20,
  color: 'white',
  fontSize: 30,
  cursor: 'pointer',
}

const prevArrowStyle = {
  position: 'absolute',
  zIndex: 99,
  left: 0,
  top: '45%',
}

const nextArrowStyle = {
  position: 'absolute',
  zIndex: 99,
  right: 0,
  top: '45%',
}

export const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    opacity: 0.9;
  }
`

const ArrowWrap = styled.div`
  width: 54px;
  height: 54px;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 44px;
    height: 44px;
  }
`

const ApPopisekText = ({ children }: any) => (
  <IconTitle
    fontSize={`20px`}
    xlfontSize={`18px`}
    mdFontSize={`18px`}
    smFontSize={`18px`}
    linHeight={`28px`}
    mdLineheight={`26px`}
    smLineheight={`26px`}
    textAlign={`left`}
    mdtextAlign={`center`}
    smtextAlign={`center`}
    fontWeight={`400`}
    xlfontWeight={`400`}
    mdfontWeight={`400`}
    smFontWeight={`400`}
    color={`#262B3B`}
    mb={'25px'}
    mdMargibBottom={`2px`}
    smMargibBottom={`30px`}
  >
    {children}
  </IconTitle>
)

const ApNameText = ({ children }: any) => (
  <IconTitle
    fontSize={`38px`}
    xlfontSize={`34px`}
    mdFontSize={`30px`}
    smFontSize={`28px`}
    linHeight={`46px`}
    mdLineheight={`38px`}
    smLineheight={`36px`}
    fontWeight={`700`}
    xlfontWeight={`700`}
    mdfontWeight={`700`}
    smFontWeight={`700`}
    textAlign={`left`}
    mdtextAlign={`center`}
    smtextAlign={`center`}
    color={`#262B3B`}
    mb={'16px'}
    mdMargibBottom={`16px`}
    smMargibBottom={`2px`}
  >
    {children}
  </IconTitle>
)

const FotogalerieText = ({ children }: any) => (
  <IconTitle
    fontSize={`16px`}
    linHeight={`30px`}
    xlfontSize={`14px`}
    mdFontSize={`14px`}
    mdLineheight={``}
    textAlign={`left`}
    mdtextAlign={`center`}
    smtextAlign={`center`}
    smFontSize={`16px`}
    smLineheight={``}
    fontWeight={`600`}
    xlfontWeight={`400`}
    smFontWeight={`400`}
    mdfontWeight={`400`}
    color={`#262B3B`}
    mb={''}
    mdMargibBottom={``}
    smMargibBottom={``}
  >
    {children}
  </IconTitle>
)

const SmallBoldText = ({ children }: any) => (
  <IconTitle
    fontSize={`18px`}
    xlfontSize={`18px`}
    mdFontSize={`18px`}
    smFontSize={`18px`}
    linHeight={`26px`}
    mdLineheight={`20px`}
    smLineheight={`26px`}
    textAlign={`left`}
    mdtextAlign={`center`}
    smtextAlign={`center`}
    fontWeight={`600`}
    xlfontWeight={`700`}
    mdfontWeight={`700`}
    smFontWeight={`700`}
    color={`#262B3B`}
    mb={'2px'}
    mdMargibBottom={`2px`}
    smMargibBottom={`10px`}
  >
    {children}
  </IconTitle>
)

export default Apartmany
