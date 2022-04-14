import styled from "styled-components";
interface HeaderTitle {
  mb: string;
  m: string;
}
interface IconTitleTypes {
  color: string;
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
}
interface SectionTitleTypes {
  xlMb: string;
  color: string;
  lgMb: string;
  mdMb: string;
  smMb: string;
  mb: string;
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
}
interface FooterDescType {
  color: string;
  mdAlign: string;
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
  font-size: 73px;
  color: white;
  max-width: 934px;

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
    font-size: 30px;
    line-height: 38px;
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
    font-size: 26px;
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
    line-height: 20px;
  }
`;

export const IconTitle = styled.p`
  font-size: 15px;
  line-height: 23px;
  font-family: roc-grotesk-wide;
  font-weight: 600px;
  font-size: 12px;
  color: ${(props: IconTitleTypes) => (props.color ? props.color : "white")};

  @media screen and (max-width: 1400px) {
    font-weight: 600;
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;

    font-weight: 400;
  }
  @media screen and (max-width: 640px) {
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
  }
`;

export const FooterTitle = styled.h3`
  color: ${(props: FooterTitleType) => (props.color ? props.color : "white")};
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
    font-size: 22px;
    line-height: 30px;
  }
  @media screen and (max-width: 640px) {
  }
`;

export const FooterDesc = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: ${(props: FooterDescType) => (props.color ? props.color : "white")};
  text-align: left;
  @media screen and (max-width: 1400px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
    text-align: ${(props: FooterDescType) =>
      props.mdAlign ? props.mdAlign : "left"};
  }
  @media screen and (max-width: 640px) {
    font-size: 12px;
    line-height: 20px;

    text-align: ${(props: FooterDescType) =>
      props.mdAlign ? props.mdAlign : "left"};
  }
`;
export const FooterCategoryTitle = styled.h3`
  font-size: 16px;
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
