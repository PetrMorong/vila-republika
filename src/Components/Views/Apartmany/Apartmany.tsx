import React from "react";
import {
  Container,
  FlexRow,
  GridRow,
  ImgWrapper,
  StyledImg,
  Wrapper,
} from "../../../Styled/Theme.styles";
import { Desc, IconTitle } from "../../../Styled/Typography.styles";
import ap1Image from "../../../images/apartmany/ap1/DSC07382-HDR-min.jpg";
import ap4Image from "../../../images/apartmany/ap4/DSC07518-HDR-min.jpg";
import img from "../../../images/apartmany/ap1/DSC07445-HDR-min.jpg";
import leftArrowImg from "../../../images/LeftArrow.svg";
import usersIcon from "../../../images/users.svg";
import cardIcon from "../../../images/card.svg";
import cameraIcon from "../../../images/Icon feather-camera.svg";
import Lightbox from "react-spring-lightbox";
import {
  Button,
  ButtonWrapper,
  ButtonWrapperFoto,
} from "../../../Styled/Button.styles";
import { SlideContent } from "../../../Styled/Swiper.styles";
import styled from "styled-components";
import { Link } from "gatsby";
import { buildImageUrl } from "cloudinary-build-url";

export const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    opacity: 0.9;
  }
`;

const Apartmany: React.FC = () => {
  const [carouselIndex, setCarouseIndex] = React.useState(0);
  const [showGallery, setShowGallery] = React.useState(false);
  const [selectedGallery, setSelectedGallery] = React.useState(0);

  // AP 1
  const ap1Image1 = buildImageUrl(
    "v1673797462/vilaRepublikaFoto/byt1/DSC07382-HDR_x8twfm.jpg",
    {}
  );

  const ap1Image2 = buildImageUrl(
    "v1673797459/vilaRepublikaFoto/byt1/DSC07388-HDR_hc02vu.jpg",
    {}
  );

  const ap1Image3 = buildImageUrl(
    "v1673797461/vilaRepublikaFoto/byt1/DSC07418-HDR_oxlcy5.jpg",
    {}
  );

  const ap1Image4 = buildImageUrl(
    "v1673797465/vilaRepublikaFoto/byt1/DSC07421-HDR_cqlm0x.jpg",
    {}
  );

  const ap1Image5 = buildImageUrl(
    "v1673797459/vilaRepublikaFoto/byt1/DSC07427-HDR_ij0maf.jpg",
    {}
  );

  const ap1Image6 = buildImageUrl(
    "v1673797458/vilaRepublikaFoto/byt1/DSC07433-HDR_cy9sjv.jpg",
    {}
  );

  // AP 4
  const ap4Image1 = buildImageUrl(
    "v1673797426/vilaRepublikaFoto/byt4/DSC07545-HDR_g11alm.jpg",
    {}
  );

  const ap4Image2 = buildImageUrl(
    "v1673797431/vilaRepublikaFoto/byt4/DSC07518-HDR_yvydy6.jpg",
    {}
  );

  const ap4Image3 = buildImageUrl(
    "v1673797431/vilaRepublikaFoto/byt4/DSC07527-HDR_qq1xqb.jpg",
    {}
  );

  const ap4Image4 = buildImageUrl(
    "v1673797428/vilaRepublikaFoto/byt4/DSC07557-HDR_qp18zg.jpg",
    {}
  );

  const ap4Image5 = buildImageUrl(
    "v1673797427/vilaRepublikaFoto/byt4/DSC07530-HDR_fhmjqv.jpg",
    {}
  );

  const ap4Image6 = buildImageUrl(
    "v1673797427/vilaRepublikaFoto/byt4/DSC07539-HDR_qcpgxr.jpg",
    {}
  );

  // AP 7

  const ap7Image1 = buildImageUrl("v1645823019/vlAp7_utapq6.jpg", {});

  const ap7Image2 = buildImageUrl(
    "v1645822939/homeThreeImageOne_osn1s7.jpg",
    {}
  );

  const ap7Image3 = buildImageUrl(
    "v1673901976/vilaRepublikaFoto/byt7/04_qw3rnf.jpg",
    {}
  );

  const ap7Image4 = buildImageUrl(
    "v1673901976/vilaRepublikaFoto/byt7/05_lwmqcg.jpg",
    {}
  );

  const ap7Image5 = buildImageUrl(
    "v1673901976/vilaRepublikaFoto/byt7/02_rd91f5.jpg",
    {}
  );

  // APP 6

  const ap6Image1 = buildImageUrl(
    "v1673903298/vilaRepublikaFoto/byt6/pohled_kuchyne-min_ne47wb.png",
    {}
  );

  const ap6Image2 = buildImageUrl(
    "v1673903301/vilaRepublikaFoto/byt6/pohled_obyvaci_pokoj2-min_iyrkju.png",
    {}
  );

  const ap6Image3 = buildImageUrl(
    "v1673903849/vilaRepublikaFoto/byt6/loznce2_ferbgv.png",
    {}
  );

  const ap6Image4 = buildImageUrl(
    "v1673903854/vilaRepublikaFoto/byt6/loznice1_x3gik9.png",
    {}
  );

  const ap6Image5 = buildImageUrl(
    "v1673903850/vilaRepublikaFoto/byt6/loznice3_zjsqka.png",
    {}
  );

  const ap6Image6 = buildImageUrl(
    "v1673903289/vilaRepublikaFoto/byt6/6-min_ob9dlc.png",
    {}
  );

  const ap6Image7 = buildImageUrl(
    "v1673903293/vilaRepublikaFoto/byt6/1-min_sgoba8.png",
    {}
  );

  const apImages = [
    // ap 1
    [ap1Image1, ap1Image2, ap1Image3, ap1Image4, ap1Image5, ap1Image6],
    // ap 2
    [ap4Image, ap4Image, ap4Image],
    // ap 4
    [ap4Image1, ap4Image2, ap4Image3, ap4Image4, ap4Image5, ap4Image6],
    // ap 5
    [ap4Image, ap4Image, ap4Image],
    // ap 6
    [
      ap6Image1,
      ap6Image2,
      ap6Image3,
      ap6Image4,
      ap6Image5,
      ap6Image6,
      ap6Image7,
    ],
    // ap 7
    [ap7Image1, ap7Image2, ap7Image3, ap7Image4, ap7Image5],
  ];

  const images = apImages[selectedGallery];

  const handleNext = () => {
    if (carouselIndex === images.length - 1) {
      setCarouseIndex(0);
    } else {
      setCarouseIndex(carouselIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (carouselIndex === 0) {
      setCarouseIndex(images.length - 1);
    } else {
      setCarouseIndex(carouselIndex - 1);
    }
  };

  const lightboxImages: any = images.map((image) => {
    return { src: image };
  });

  return (
    <Wrapper
      mdPadding={`130px 0px 30px`}
      xlPadding={`130px 0px 30px`}
      padding={`130px 0px 30px`}
    >
      <Container>
        {/* AP 1 */}
        <GridRow sm={1} cols={2} gap={`5px`} between margin={"0px 0px 120px"}>
          <div>
            <SlideWrapper>
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={ap1Image1} alt="img" />
                <ButtonWrapperFoto
                  onClick={() => {
                    setShowGallery(true);
                    setSelectedGallery(0);
                  }}
                >
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
                    <img src={cameraIcon} alt="" />
                    <FotogalerieText>Fotogalerie</FotogalerieText>
                  </FlexRow>
                </ButtonWrapperFoto>
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: "auto" }}></div>
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
                      <StyledImg w={`45px`} src={usersIcon} alt="img" />
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
                      <StyledImg w={`45px`} src={cardIcon} alt="img" />
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
                <Link to="/rezervace">
                  <Button margin={`35px 0px 10px 0px`}>
                    Vytvořit rezervaci
                  </Button>
                </Link>{" "}
              </ButtonWrapper>
            </div>
          </FlexRow>
        </GridRow>

        {/* AP 2 */}
        <GridRow sm={1} cols={2} gap={`32px`} between margin={"0px 0px 120px"}>
          <FlexRow itemCenter between gap={`32px`} className="orderReverse">
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
                      <StyledImg w={`45px`} src={usersIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>4 - 6 osob</SmallBoldText>
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
                      <StyledImg w={`45px`} src={cardIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 1900 kč</SmallBoldText>
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
                <Link to="/rezervace">
                  <Button margin={`35px 0px 10px 0px`}>
                    Vytvořit rezervaci
                  </Button>
                </Link>
              </ButtonWrapper>
            </div>
          </FlexRow>
          <div>
            <SlideWrapper>
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={img} alt="img" />
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: "auto" }}>
                  <ButtonWrapperFoto
                    onClick={() => {
                      setShowGallery(true);
                      setSelectedGallery(1);
                    }}
                  >
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
                      <img src={cameraIcon} alt="" />

                      <FotogalerieText>Fotogalerie</FotogalerieText>
                    </FlexRow>
                  </ButtonWrapperFoto>
                </div>
              </SlideContent>
            </SlideWrapper>
          </div>
        </GridRow>

        {/* AP 4 */}
        <GridRow sm={1} cols={2} gap={`5px`} between margin={"0px 0px 120px"}>
          <div>
            <SlideWrapper>
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={ap4Image1} alt="img" />
                <ButtonWrapperFoto
                  onClick={() => {
                    setShowGallery(true);
                    setSelectedGallery(2);
                  }}
                >
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
                    <img src={cameraIcon} alt="" />
                    <FotogalerieText>Fotogalerie</FotogalerieText>
                  </FlexRow>
                </ButtonWrapperFoto>
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: "auto" }}></div>
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
                      <StyledImg w={`45px`} src={usersIcon} alt="img" />
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
                      <StyledImg w={`45px`} src={cardIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 1900 Kč</SmallBoldText>
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
                <Link to="/rezervace">
                  <Button margin={`35px 0px 10px 0px`}>
                    Vytvořit rezervaci
                  </Button>
                </Link>{" "}
              </ButtonWrapper>
            </div>
          </FlexRow>
        </GridRow>

        {/* AP 5 */}
        <GridRow sm={1} cols={2} gap={`32px`} between margin={"0px 0px 120px"}>
          <FlexRow itemCenter between gap={`32px`} className="orderReverse">
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
                      <StyledImg w={`45px`} src={usersIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>6 - 8 osob</SmallBoldText>
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
                      <StyledImg w={`45px`} src={cardIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 2500 kč</SmallBoldText>
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
                <Link to="/rezervace">
                  <Button margin={`35px 0px 10px 0px`}>
                    Vytvořit rezervaci
                  </Button>
                </Link>{" "}
              </ButtonWrapper>
            </div>
          </FlexRow>
          <div>
            <SlideWrapper>
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={img} alt="img" />
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: "auto" }}>
                  <ButtonWrapperFoto
                    onClick={() => {
                      setShowGallery(true);
                      setSelectedGallery(3);
                    }}
                  >
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
                      <img src={cameraIcon} alt="" />

                      <FotogalerieText>Fotogalerie</FotogalerieText>
                    </FlexRow>
                  </ButtonWrapperFoto>
                </div>
              </SlideContent>
            </SlideWrapper>
          </div>
        </GridRow>

        {/* AP 6 */}
        <GridRow sm={1} cols={2} gap={`5px`} between margin={"0px 0px 120px"}>
          <div>
            <SlideWrapper>
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={ap6Image1} alt="img" />
                <ButtonWrapperFoto
                  onClick={() => {
                    setShowGallery(true);
                    setSelectedGallery(4);
                  }}
                >
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
                    <img src={cameraIcon} alt="" />
                    <FotogalerieText>Fotogalerie</FotogalerieText>
                  </FlexRow>
                </ButtonWrapperFoto>
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: "auto" }}></div>
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
                <ApPopisekText>s elegancí a vanou</ApPopisekText>
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
                      <StyledImg w={`45px`} src={usersIcon} alt="img" />
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
                      <StyledImg w={`45px`} src={cardIcon} alt="img" />
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
                Klenot projektu Vila Republika. Nádherný apartmán
                s panoramatickou dispozicí poskytuje z každé místnosti překrásné
                výhledy. Má celkem tři ložnice, velký obývací prostor s kuchyní
                a jídelní částí. V klidu se zde může ubytovat až 10 osob a každý
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
                <Link to="/rezervace">
                  <Button margin={`35px 0px 10px 0px`}>
                    Vytvořit rezervaci
                  </Button>
                </Link>{" "}
              </ButtonWrapper>
            </div>
          </FlexRow>
        </GridRow>

        {/* AP 7 */}
        <GridRow sm={1} cols={2} gap={`32px`} between margin={"0px 0px 120px"}>
          <FlexRow itemCenter between gap={`32px`} className="orderReverse">
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
                      <StyledImg w={`45px`} src={usersIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>10 - 12 osob</SmallBoldText>
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
                      <StyledImg w={`45px`} src={cardIcon} alt="img" />
                    </ImgWrapper>
                    <div>
                      <SmallBoldText>od 3900 kč</SmallBoldText>
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
                a jídelní částí. V klidu se zde může ubytovat až 10 osob a každý
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
                <Link to="/rezervace">
                  <Button margin={`35px 0px 10px 0px`}>
                    Vytvořit rezervaci
                  </Button>
                </Link>{" "}
              </ButtonWrapper>
            </div>
          </FlexRow>
          <div>
            <SlideWrapper>
              <ImgWrapper>
                <StyledImg w={`100%`} h={`100%`} src={ap7Image1} alt="img" />
              </ImgWrapper>
              <SlideContent>
                <div style={{ marginTop: "auto" }}>
                  <ButtonWrapperFoto
                    onClick={() => {
                      setShowGallery(true);
                      setSelectedGallery(5);
                    }}
                  >
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
                      <img src={cameraIcon} alt="" />

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
          /* Add your own UI */
          renderHeader={() => (
            <div
              onClick={() => setShowGallery(false)}
              style={{
                position: "absolute",
                zIndex: 99,
                right: 20,
                top: 20,
                color: "white",
                fontSize: 30,
                cursor: "pointer",
              }}
            >
              x
            </div>
          )}
          // renderFooter={() => (<CustomFooter />)}
          renderPrevButton={() => (
            <ArrowWrap
              onClick={handlePrevious}
              style={{
                position: "absolute",
                zIndex: 99,
                left: 0,
                top: "45%",
              }}
            >
              <img src={leftArrowImg}></img>
            </ArrowWrap>
          )}
          renderNextButton={() => (
            <ArrowWrap
              onClick={handleNext}
              style={{
                position: "absolute",
                zIndex: 99,
                right: 0,
                top: "45%",
              }}
            >
              <img
                style={{ transform: "rotate(180deg)" }}
                src={leftArrowImg}
              ></img>
            </ArrowWrap>
          )}
          style={{ background: "rgba(0,0,0,0.99)" }}
          onClose={() => setShowGallery(false)}

          // renderImageOverlay={() => (<ImageOverlayComponent >)}
          // className="cool-class"

          /* Use single or double click to zoom */
          // singleClickToZoom
        />
      </Container>
    </Wrapper>
  );
};

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
`;

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
    mb={"25px"}
    mdMargibBottom={`2px`}
    smMargibBottom={`30px`}
  >
    {children}
  </IconTitle>
);

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
    mb={"16px"}
    mdMargibBottom={`16px`}
    smMargibBottom={`2px`}
  >
    {children}
  </IconTitle>
);

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
    mb={""}
    mdMargibBottom={``}
    smMargibBottom={``}
  >
    {children}
  </IconTitle>
);

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
    mb={"2px"}
    mdMargibBottom={`2px`}
    smMargibBottom={`10px`}
  >
    {children}
  </IconTitle>
);

export default Apartmany;
