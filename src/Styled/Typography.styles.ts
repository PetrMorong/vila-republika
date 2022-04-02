import styled from "styled-components";

interface styleProps {
  mb?: string;
  m?: string;
  xlMb?: string;
  lgMb?: string;
  mdMb?: string;
  smMb?: string;
  fontWeight?: string;
  margin?: string;
  width?: string;
  xlMargin?: string;
  xlFontsize?: string;
  lgMargin?: string;
  lgFontsize?: string;
  mdMargin?: string;
  mdFontsize?: string;
  smMargin?: string;
  smFontsize?: string;
  mdAlign?: string;
  textAlign?: string;
}

export const HeaderTitle = styled.h1<styleProps>`
  font-size: 73px;
  margin-bottom: ${(props) => (props.mb ? props.mb : "0px")};
  margin: ${(props) => (props.m ? props.m : "0px")};
  color: white;
  max-width: 934px;
  @media screen and (max-width: 1536px) {
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

export const SectionTitle = styled.h3<styleProps>`
  font-size: 60px;
  line-height: 68px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : "#262b3b")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "0px")};
  font-weight: bold;
  @media screen and (max-width: 1536px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: ${(props) => props.xlMb && props.xlMb};
  }
  @media screen and (max-width: 1024px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: ${(props) => props.lgMb && props.lgMb};
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: ${(props) => props.mdMb && props.mdMb};
  }
  @media screen and (max-width: 640px) {
    margin-bottom: ${(props) => props.smMb && props.smMb};
    font-size: 26px;
    line-height: 34px;
  }
`;

export const Desc = styled.p<styleProps>`
  font-size: 18px;
  line-height: 26px;
  color: ${(props) => (props.color ? props.color : "#262b3b")};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};
  text-align: ${(props) => props.textAlign || "center"};

  margin-bottom: ${(props) => (props.mb ? props.mb : "0px")};
  margin: ${(props) => props.margin && props.margin};
  max-width: ${(props) => (props.width ? props.width : "none")};
  @media screen and (max-width: 1536px) {
    margin: ${(props) => props.xlMargin && props.xlMargin};
    font-size: ${(props) => (props.xlFontsize ? props.xlFontsize : "16px")};
    line-height: 24px;
  }
  @media screen and (max-width: 1024px) {
    margin: ${(props) => props.lgMargin && props.lgMargin};
    font-size: ${(props) => (props.lgFontsize ? props.lgFontsize : "16px")};
  }
  @media screen and (max-width: 768px) {
    margin: ${(props) => props.mdMargin && props.mdMargin};
    font-size: ${(props) => (props.mdFontsize ? props.mdFontsize : "14px")};
    line-height: 22px;
  }
  @media screen and (max-width: 640px) {
    margin: ${(props) => props.smMargin && props.smMargin};
    font-size: ${(props) => (props.smFontsize ? props.smFontsize : "12px")};
    line-height: 20px;
  }
`;

export const IconTitle = styled.p<styleProps>`
  font-size: 15px;
  line-height: 23px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "white")};

  @media screen and (max-width: 1536px) {
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

export const FooterTitle = styled.h3<styleProps>`
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: 34px;
  line-height: 42px;
  font-weight: bold;
  margin-bottom: 32px;

  @media screen and (max-width: 1536px) {
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

export const FooterDesc = styled.p<styleProps>`
  font-size: 18px;
  line-height: 26px;
  color: ${(props) => (props.color ? props.color : "white")};
  text-align: left;
  @media screen and (max-width: 1536px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
    text-align: ${(props) => (props.mdAlign ? props.mdAlign : "left")};
  }
  @media screen and (max-width: 640px) {
    font-size: 12px;
    line-height: 20px;

    text-align: ${(props) => (props.mdAlign ? props.mdAlign : "left")};
  }
`;
export const FooterCategoryTitle = styled.h3<styleProps>`
  font-size: 18px;
  line-height: 26px;
  color: ${(props) => (props.color ? props.color : "white")};
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: ${(props) => (props.mb ? props.mb : "16px")};
  @media screen and (max-width: 1536px) {
    margin-bottom: ${(props) => props.xlMb && props.xlMb};
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: ${(props) => props.lgMb && props.lgMb};
  }
  @media screen and (max-width: 768px) {
    margin-bottom: ${(props) => props.mdMb && props.mdMb};
  }
  @media screen and (max-width: 640px) {
    margin-bottom: ${(props) => props.smMb && props.smMb};
  }
`;
export const VileSlideTitle = styled.h4<styleProps>`
  font-size: 33px;
  line-height: 41px;
  color: ${(props) => (props.color ? props.color : "white")};
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: ${(props) => (props.mb ? props.mb : "16px")};
  @media screen and (max-width: 1024px) {
    font-size: 24px;
    line-height: 32px;
  }
  @media screen and (max-width: 640px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: ${(props) => (props.smMb ? props.smMb : "8px")};
  }
`;
export const VileSlideDesc = styled.p<styleProps>`
  color: ${(props) => (props.color ? props.color : "white")};
  text-transform: capitalize;
  margin-bottom: ${(props) => (props.mb ? props.mb : "0px")};
  max-width: ${(props) => (props.width ? props.width : "none")};
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }
  @media screen and (max-width: 640px) {
    font-size: 10px;
    line-height: 18px;
  }
`;
