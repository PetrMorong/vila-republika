import styled from "styled-components";
interface HeaderTitleTypes {
  align: string;
  maxWidth: string;
  fontSize: string;
  smfontSize: string;
  smLineheight: string;
}
interface IconTitleTypes {
  color: string;
  fontSize: string;
  xlfontSize: string;
  mdFontSize:string;
  smFontSize: string;
  textAlign: string;
  fontWeight: string;
  xlfontWeight: string;
  mdfontWeight: string;
  smFontWeight: string;
  mb: string;
  mdMargibBottom:string;
  mdLineheight: string;
  smLineheight: string;

}
interface DescTypes {
  color: string;
  fontWeight: string;
  mb: string;
  margin: string;
  width: string;
  xlMargin: string;
  xlFontsize: string;
  lgMargin: string;
  mdMargin: string;
  lgFontsize: string;
  mdFontsize: string;
  smMargin: string;
  smFontsize: string;
  smLineHeight: string;
}
interface SectionTitleTypes {
  xlMb: string;
  color: string;
  lgMb: string;
  mdMb: string;
  smMb: string;
  mb: string;
  smFontSize: string;
}
interface VileSlideTitleTypes {
  color: string;
  mb: string;
  smMb: string;
}
interface VileSlideDescTypes {
  color: string;
  mb: string;
  width: string;
}
interface FooterTitleType {
  color: string;
  textAlign:string;
  mdtextAlign:string;
  mdFontsize:string;
  mdLineHeight:string;
}
interface FooterDescType {
  color: string;
  mdAlign: string;
  mdFontSize:string;
  mdLineHeight:string;
}
interface FooterCategoryTitleType {
  color: string;
  mb: string;
  xlMb: string;
  lgMb: string;
  smMb: string;
  mdMb: string;
}

export const HeaderTitle = styled.h1`
  font-size: ${(props: HeaderTitleTypes) =>
    props.fontSize ? props.fontSize : "73px"};
  color: #ffffff;
  max-width: ${(props: HeaderTitleTypes) =>
    props.maxWidth ? props.maxWidth : "100%"};
  text-align: ${(props: HeaderTitleTypes) =>
    props.align ? props.align : "left"};

  font-family: roc-grotesk-wide, sans-serif;
  font-weight: 500;

  @media screen and (max-width: 1400px) {
    font-size: 58px;
    line-height: 66px;
    max-width: 680px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 50px;
    line-height: 58px;
  }
  @media screen and (max-width: 768px) {
    font-size: 38px;
    line-height: 46px;
  }
  @media screen and (max-width: 640px) {
    font-size: ${(props: HeaderTitleTypes) =>
      props.smfontSize ? props.smfontSize : "30px"};
    line-height: ${(props: HeaderTitleTypes) =>
      props.smLineheight ? props.smLineheight : "38px"};
  }
`;

export const SectionTitle = styled.h3`
  font-size: 60px;
  line-height: 68px;
  text-align: center;
  font-family: roc-grotesk-wide;
  color: ${(props: SectionTitleTypes) =>
    props.color ? props.color : "#262b3b"};
  margin-bottom: ${(props: SectionTitleTypes) => (props.mb ? props.mb : "0px")};
  font-weight: 600;
  @media screen and (max-width: 1400px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: ${(props: SectionTitleTypes) => props.xlMb && props.xlMb};
  }
  @media screen and (max-width: 1024px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: ${(props: SectionTitleTypes) => props.lgMb && props.lgMb};
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: ${(props: SectionTitleTypes) => props.mdMb && props.mdMb};
  }
  @media screen and (max-width: 640px) {
    margin-bottom: ${(props: SectionTitleTypes) => props.smMb && props.smMb};
    font-size: ${(props: SectionTitleTypes) =>
      props.smFontSize ? props.smFontSize : "26px"};
    line-height: 34px;
  }
`;

export const Desc = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: ${(props: DescTypes) => (props.color ? props.color : "#262b3b")};
  font-weight: ${(props: DescTypes) => props.fontWeight && props.fontWeight};

  text-align: center;
  margin-bottom: ${(props: DescTypes) => (props.mb ? props.mb : "0px")};
  margin: ${(props: DescTypes) => props.margin && props.margin};
  max-width: ${(props: DescTypes) => (props.width ? props.width : "none")};
  font-weight: 400;

  @media screen and (max-width: 1400px) {
    margin: ${(props: DescTypes) => props.xlMargin && props.xlMargin};
    font-size: ${(props: DescTypes) =>
      props.xlFontsize ? props.xlFontsize : "16px"};
    line-height: 24px;
  }
  @media screen and (max-width: 1024px) {
    margin: ${(props: DescTypes) => props.lgMargin && props.lgMargin};
    font-size: ${(props: DescTypes) =>
      props.lgFontsize ? props.lgFontsize : "16px"};
  }
  @media screen and (max-width: 768px) {
    margin: ${(props: DescTypes) => props.mdMargin && props.mdMargin};
    font-size: ${(props: DescTypes) =>
      props.mdFontsize ? props.mdFontsize : "14px"};
    line-height: 22px;
  }
  @media screen and (max-width: 640px) {
    margin: ${(props: DescTypes) => props.smMargin && props.smMargin};
    font-size: ${(props: DescTypes) =>
      props.smFontsize ? props.smFontsize : "12px"};
    line-height: ;
    line-height: ${(props: DescTypes) =>
      props.smLineHeight ? props.smLineHeight : "20px"};
  }
`;

export const IconTitle = styled.p`
  font-size: ${(props: IconTitleTypes) =>
    props.fontSize ? props.fontSize : "14px"};
  text-align: ${(props: IconTitleTypes) =>
    props.textAlign ? props.textAlign : "left"};
  line-height: 23px;
  font-family: roc-grotesk-wide;
  font-weight: ${(props: IconTitleTypes) =>
    props.fontWeight ? props.fontWeight : "600"};
  color: ${(props: IconTitleTypes) => (props.color ? props.color : "white")};
  margin-bottom: ${(props: IconTitleTypes) => (props.mb ? props.mb : "0px")};
  @media screen and (max-width: 1400px) {
    font-size: ${(props: IconTitleTypes) =>
      props.xlfontSize ? props.xlfontSize : "14px"};
    font-weight: ${(props: IconTitleTypes) =>
      props.xlfontWeight ? props.xlfontWeight : "600"};
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    font-size: ${(props: IconTitleTypes) =>
      props.mdFontSize ? props.mdFontSize : "14px"};
    line-height: ${(props: IconTitleTypes) =>
      props.mdLineheight ? props.mdLineheight : "20px"};

    font-weight: ${(props: IconTitleTypes) =>
      props.mdfontWeight ? props.mdfontWeight : "400"};
      margin-bottom: ${(props: IconTitleTypes) => (props.mdMargibBottom ? props.mdMargibBottom : "0px")};
      
    }
  @media screen and (max-width: 640px) {
    font-size: ${(props: IconTitleTypes) =>
      props.smFontSize ? props.smFontSize : "12px"};
    line-height: ${(props: IconTitleTypes) =>
      props.smLineheight ? props.smLineheight : "12px"};
    font-weight: ${(props: IconTitleTypes) =>
      props.smFontWeight ? props.smFontWeight : "400"};
  }
`;

export const FooterTitle = styled.h3`
  color: ${(props: FooterTitleType) => (props.color ? props.color : "white")};
  text-align: ${(props: FooterTitleType) => (props.textAlign ? props.textAlign : "left")};
  font-size: 34px;
  line-height: 42px;
  font-weight: 600;
  margin-bottom: 32px;
  font-family: roc-grotesk-wide;

  @media screen and (max-width: 1400px) {
    margin-bottom: 16px;
    font-size: 28px;
    line-height: 36px;
  }
  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
    font-size:${(props: FooterTitleType) => (props.mdFontsize ? props.mdFontsize : "")};
    line-height: ${(props: FooterTitleType) => (props.mdLineHeight ? props.mdLineHeight : "")};
    text-align: ${(props: FooterTitleType) =>
      props.mdtextAlign ? props.mdtextAlign : "left"};
  }
  @media screen and (max-width: 640px) {
  }
`;

export const FooterDesc = styled.p`
  margin-left: 80px;
  font-size: 17px;
  line-height: 26px;
  color: ${(props: FooterDescType) => (props.color ? props.color : "white")};
  text-align: left;
  @media screen and (max-width: 1400px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    font-size:  ${(props: FooterDescType) => (props.mdFontSize ? props.mdFontSize : "18px")};
    line-height:  ${(props: FooterDescType) => (props.mdLineHeight ? props.mdLineHeight : "30px")};
    text-align: ${(props: FooterDescType) =>
      props.mdAlign ? props.mdAlign : "left"};
  }
  @media screen and (max-width: 640px) {
    font-size:  ${(props: FooterDescType) => (props.mdFontSize ? props.mdFontSize : "18px")};
    line-height:  ${(props: FooterDescType) => (props.mdLineHeight ? props.mdLineHeight : "30px")};

    text-align: ${(props: FooterDescType) =>
      props.mdAlign ? props.mdAlign : "left"};
  }
`;
export const FooterCategoryTitle = styled.h3`
  font-size: 18px;
  line-height: 26px;
  color: ${(props: FooterCategoryTitleType) =>
    props.color ? props.color : "white"};
  font-weight: 600;
  font-family: roc-grotesk-wide;
  margin-bottom: ${(props: FooterCategoryTitleType) =>
    props.mb ? props.mb : "16px"};
  @media screen and (max-width: 1400px) {
    margin-bottom: ${(props: FooterCategoryTitleType) =>
      props.xlMb && props.xlMb};
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: ${(props: FooterCategoryTitleType) =>
      props.lgMb && props.lgMb};
  }
  @media screen and (max-width: 768px) {
    margin-bottom: ${(props: FooterCategoryTitleType) =>
      props.mdMb && props.mdMb};
  }
  @media screen and (max-width: 640px) {
    margin-bottom: ${(props: FooterCategoryTitleType) =>
      props.smMb && props.smMb};
  }
`;
export const VileSlideTitle = styled.h4`
  font-size: 33px;
  line-height: 41px;
  font-family: roc-grotesk-wide;
  color: ${(props: VileSlideTitleTypes) =>
    props.color ? props.color : "white"};

  font-weight: 600;
  margin-bottom: ${(props: VileSlideTitleTypes) =>
    props.mb ? props.mb : "16px"};
  @media screen and (max-width: 1024px) {
    font-size: 24px;
    line-height: 32px;
  }
  @media screen and (max-width: 640px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: ${(props: VileSlideTitleTypes) =>
      props.smMb ? props.smMb : "8px"};
  }
`;
export const VileSlideDesc = styled.p`
  color: ${(props: VileSlideDescTypes) =>
    props.color ? props.color : "white"};

  margin-bottom: ${(props: VileSlideDescTypes) =>
    props.mb ? props.mb : "0px"};
  max-width: ${(props: VileSlideDescTypes) =>
    props.width ? props.width : "none"};
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }
  @media screen and (max-width: 640px) {
    font-size: 10px;
    line-height: 18px;
  }
`;
