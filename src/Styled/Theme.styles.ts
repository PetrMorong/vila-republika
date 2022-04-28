import styled from "styled-components";
import { css } from "styled-components";
interface ContainerType {
  margin?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
}
interface FlexRowType {
  padding?: string;
  mdPadding?: string;
  smPadding?: string;
  smcenter?: string;
  gap?: string;
  column?: any;
  width?: string;
  height?: string;
  minHeight?: string;
  maxWidth?: string;
  margin?: string;
  direction?: string;
  between?: any;
  center?: any;
  bgColor?: string;
  itemCenter?: any;
  xlGap?: string;
  xlDirection?: string;
  lgGap?: string;
  lgDirection?: string;
  mdGap?: string;
  mdDirection?: string;
  smGap?: string;
  smDirection?: string;
}
interface FlexColsType {
  cols?: any;
}
interface GridRowType {
  margin?: any;
  minHeight?: any;
  maxWidth?: any;
  gap?: any;
  cols?: any;
  max?: any;
  between?: any;
  around?: any;
  itemCenter?: any;
  xlMargin?: any;
  lg?: any;
  lgMargin?: any;
  md?: any;
  mdMargin?: any;
  sm?: any;
  smMargin?: any;
}

interface GridColType {
  colSpan?: any;
  direction?: string;
  lg?: any;
  md?: any;
  sm?: any;
  mdJustifyContent?: string;
  justifyContent?: string;
  alingItems?: string;
  alignSelf?: string;

}

interface ImgWrapperTypes {
  height?: string;
  maxWidth?: any;
  margin?: any;
  xlMargin?: string;
  mdMargin?: string;
  smMargin?: string;
  xlWidth?: any;
  lgWidth?: any;
  mdWidth?: any;
  smWidth?: any;
}

interface Props {
  bgColor?: string;
  padding?: string;
  xlPadding?: string;
  lgPadding?: string;
  mdPadding?: string;
  smPadding?: string;
  margin?: any;
  width?: any;
  height?: string;
  gap?: any;
  column?: string;
  minHeight?: string;
  maxWidth?: string;
  direction?: string;
  between?: string;
  itemCenter?: any;
  xlGap?: string;
  xlDirection?: string;
  lgGap?: string;
  mdGap?: string;
  lgDirection?: string;
  mdDirection?: string;
  smGap?: string;
  smDirection?: string;
  cols?: string;
  max?: string;
  around?: string;
  xlMargin?: string;
  lg?: any;
  lgMargin?: string;
  md?: string;
  sm?: any;
  mdMargin?: string;
  smMargin?: string;
  xlWidth?: string;
  lgWidth?: string;
  mdWidth?: string;
  smWidth?: string;
  object?: string;
  w?: string;
  h?: string;
  size?: string;
  color?: string;
  colSpan?: string;
}
export const WrapperSectionBorderLines = styled.div`
  max-width: 215px;
  position: relative;
  margin: auto;
`;
export const SectionBorderLines = styled.div`
  font-size: 15px;
  text-align: center;

  &:before {
    position: absolute;
    left: 0;
    top: -45px;
    width: 60%;
    left: 50%;
    margin-left: -30%;
    height: 3px;
    content: "";
    background-color: #f0e8d9;
    z-index: 1000;
  }
  &:after {
    content: "○";
    position: absolute;
    width: 40px;
    height: 30px;
    left: 50%;
    margin-left: -20px;
    top: -65px;
    font-size: 20px;
    line-height: 40px;
    color: #f0e8d9;
    font-weight: 400;
    z-index: 1000;
    display: block;
    background-color: #ffffff;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  background: ${(props: Props) =>
    props.bgColor ? props.bgColor : "transparent"};
  padding: ${(props: Props) => (props.padding ? props.padding : "0px")};
  @media screen and (max-width: 1400px) {
    padding: ${(props: Props) => props.xlPadding && props.xlPadding};
  }
  @media screen and (max-width: 1024px) {
    padding: ${(props: Props) => props.lgPadding && props.lgPadding};
  }
  @media screen and (max-width: 768px) {
    padding: ${(props: Props) => props.mdPadding && props.mdPadding};
  }
  @media screen and (max-width: 640px) {
    padding: ${(props: Props) => props.smPadding && props.smPadding};
  }
`;

export const Container = styled.div`
  max-width: ${(props: ContainerType) => (props.maxWidth ? props.maxWidth : "1444px")};
  padding-left: 40px;
  padding-right: 40px;
  position: relative;
  z-index: 10;
  margin: ${(props: ContainerType) =>
    props.margin ? props.margin : "0px auto"};
  width: ${(props: ContainerType) => (props.width ? props.width : "100%")};
  height: ${(props: ContainerType) => (props.height ? props.height : "auto")};
  @media screen and (max-width: 1240px) {
    max-width: 1140px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const FlexRow = styled.div`
position:relative;
padding: ${(props: FlexRowType) =>
    props.padding ? props.padding : "0px 0px 0px 0px"};
  background: ${(props: FlexRowType) =>
    props.bgColor ? props.bgColor : "transparent"};
  display: flex;
  gap: ${(props: FlexRowType) => (props.gap ? props.gap : "0px")};
  width: ${(props: FlexRowType) => (props.width ? props.width : "auto")};
  height: ${(props: FlexRowType) => (props.height ? props.height : "auto")};
  min-height: ${(props: FlexRowType) =>
    props.minHeight ? props.minHeight : "none"};
  max-width: ${(props: FlexRowType) =>
    props.maxWidth ? props.maxWidth : "none"};
  margin: ${(props: FlexRowType) => props.margin && props.margin};
  flex-wrap: wrap;
  flex-direction: ${(props: FlexRowType) =>
    props.direction ? props.direction : "row"};
  ${(props: FlexRowType) =>
    props.between &&
    css`
      justify-content: space-between;
    `}
  ${(props: FlexRowType) =>
    props.center &&
    css`
      justify-content: center;
    `}
  ${(props: FlexRowType) =>
    props.itemCenter &&
    css`
      align-items: center;
    `}

@media screen and (max-width: 1400px) {
    gap: ${(props: FlexRowType) => props.xlGap && props.xlGap};
    flex-direction: ${(props: FlexRowType) =>
    props.xlDirection && props.xlDirection};
  }
  @media screen and (max-width: 1024px) {
    gap: ${(props: FlexRowType) => props.lgGap && props.lgGap};
    flex-direction: ${(props: FlexRowType) =>
    props.lgDirection && props.lgDirection};
  }
  @media screen and (max-width: 768px) {
    gap: ${(props: FlexRowType) => props.mdGap && props.mdGap};
    flex-direction: ${(props: FlexRowType) =>
    props.mdDirection && props.mdDirection};
    padding: ${(props: FlexRowType) =>
    props.mdPadding ? props.mdPadding : "0px 0px 0px 0px"};
  }
  @media screen and (max-width: 640px) {
    gap: ${(props: FlexRowType) => props.smGap && props.smGap};
    flex-direction: ${(props: FlexRowType) =>
    props.smDirection && props.smDirection};
      padding: ${(props: FlexRowType) =>
    props.smPadding ? props.smPadding : "0px 0px 0px 0px"};
    ${(props: FlexRowType) =>
    props.smcenter &&
    css`
        justify-content: center;
      `}
  }
`;

export const FlexCols = styled.div`
  flex: ${(props: FlexColsType) => (props.cols ? props.cols : "1")};
`;

export const GridRow = styled.div`
  display: grid;
  margin: ${(props: GridRowType) => props.margin && props.margin};
  min-height: ${(props: GridRowType) =>
    props.minHeight ? props.minHeight : "none"};
  max-width: ${(props: GridRowType) =>
    props.maxWidth ? props.maxWidth : "none"};
  gap: ${(props: GridRowType) => (props.gap ? props.gap : "0px")};
  grid-template-columns: ${(props: GridRowType) =>
    props.cols && props.max
      ? `repeat(${props.cols}, minmax(0, max-content))`
      : `repeat(${props.cols}, minmax(0, 1fr))`};

  ${(props: GridRowType) =>
    props.between &&
    css`
      justify-content: space-between;
    `}
  ${(props: GridRowType) =>
    props.around &&
    css`
      justify-content: space-around;
    `}
  ${(props: GridRowType) =>
    props.itemCenter &&
    css`
      align-items: center;
    `}
  @media screen and (max-width: 1400px) {
    margin: ${(props: GridRowType) => props.xlMargin && props.xlMargin};
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: ${(props: GridRowType) =>
    props.lg && props.max
      ? `repeat(${props.lg}, minmax(0, max-content))`
      : `repeat(${props.lg}, minmax(0, 1fr))`};
    margin: ${(props: GridRowType) => props.lgMargin && props.lgMargin};
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: ${(props: GridRowType) =>
    props.md && props.max
      ? `repeat(${props.md}, minmax(0, max-content))`
      : `repeat(${props.md}, minmax(0, 1fr))`};
    margin: ${(props: GridRowType) => props.mdMargin && props.mdMargin};
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: ${(props: GridRowType) =>
    props.sm && props.max
      ? `repeat(${props.sm}, minmax(0, max-content))`
      : `repeat(${props.sm}, minmax(0, 1fr))`};
    margin: ${(props: GridRowType) => props.smMargin && props.smMargin};
  }
`;

export const GridCol = styled.div`
display: flex;
flex-direction: ${(props: GridColType) => props.direction ? props.direction : "column"};
align-items: ${(props: GridColType) => props.justifyContent ? props.alingItems : ""};
  align-self:${(props: GridColType) => props.justifyContent ? props.alignSelf : ""};
justify-content:${(props: GridColType) => props.justifyContent ? props.justifyContent : "start"};
  grid-column: ${(props: GridColType) =>
    props.colSpan
      ? `span ${props.colSpan} / span ${props.colSpan}`
      : `span 1 / span 1`};

  @media screen and (max-width: 1024px) {
    grid-column: ${(props: GridColType) =>
    props.lg && `span ${props.lg} / span ${props.lg}`};
  }
  @media screen and (max-width: 768px) {
    grid-column: ${(props: GridColType) =>
    props.md && `span ${props.md} / span ${props.md}`};
 
    justify-content: ${(props: GridColType) => props.mdJustifyContent && props.mdJustifyContent};
      
  }
  @media screen and (max-width: 640px) {
    grid-column: ${(props: GridColType) =>
    props.sm && `span ${props.sm} / span ${props.sm}`};
  }
`;

export const ImgWrapper = styled.div`
  max-width: ${(props: ImgWrapperTypes) =>
    props.maxWidth ? props.maxWidth : "none"};
  height: ${(props: ImgWrapperTypes) => (props.height ? props.height : "100%")};
  margin: ${(props: ImgWrapperTypes) => props.margin && props.margin};
  @media screen and (max-width: 1400px) {
    max-width: ${(props: ImgWrapperTypes) => props.xlWidth && props.xlWidth};
    margin: ${(props: ImgWrapperTypes) => props.xlMargin && props.xlMargin};
  }
  @media screen and (max-width: 1024px) {
    max-width: ${(props: ImgWrapperTypes) => props.lgWidth && props.lgWidth};
  }
  @media screen and (max-width: 768px) {
    max-width: ${(props: ImgWrapperTypes) => props.mdWidth && props.mdWidth};
    margin: ${(props: ImgWrapperTypes) => props.mdMargin && props.mdMargin};
  }
  @media screen and (max-width: 640px) {
    max-width: ${(props: ImgWrapperTypes) => props.smWidth && props.smWidth};
    margin: ${(props: ImgWrapperTypes) => props.smMargin && props.smMargin};
  }
`;
export const IconContentWrap = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  align-self:center;
  padding-top:10px;
  

`
export const StyledImg = styled.img`
  width: ${(props: Props) => (props.w ? props.w : "auto")};
  height: ${(props: Props) => (props.h ? props.h : "auto")};

  margin: ${(props: Props) => props.margin && props.margin};
  object-fit: ${(props: Props) => (props.object ? props.object : "contain")};
  object-position: center;
`;

export const IconWrapper = styled.div`
  font-size: ${(props: Props) => (props.size ? props.size : "16px")};
  color: ${(props: Props) => (props.color ? props.color : "black")};
`;
