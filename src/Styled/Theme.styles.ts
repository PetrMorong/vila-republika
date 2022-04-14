import styled from "styled-components";
import { css } from "styled-components";
interface ContainerType {
  margin?: string;
  width?: string;
  height?: string;
}
interface FlexRowType {
  gap?: string;
  column?: any;
  width?: string;
  height?: string;
  minHeight?: string;
  maxWidth?: string;
  margin?: string;
  direction?: string;
  between?: any;
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
  lg?: any;
  md?: any;
  sm?: any;
}

interface ImgWrapperTypes {
  maxWidth?: any;
  margin?: any;
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

export const Wrapper = styled.div`
  width: 100%;
  background: ${(props: Props) =>
    props.bgColor ? props.bgColor : "transparent"};
  padding: ${(props: Props) => (props.padding ? props.padding : "0px")};
  @media screen and (max-width: 1536px) {
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
  max-width: 1444px;
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
  display: flex;
  gap: ${(props: FlexRowType) => (props.gap ? props.gap : "0px")};
  flex-direction: ${(props: FlexRowType) => (props.column ? "column" : "row")};
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
    props.itemCenter &&
    css`
      align-items: center;
    `}

  @media screen and (max-width: 1536px) {
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
  }
  @media screen and (max-width: 640px) {
    gap: ${(props: FlexRowType) => props.smGap && props.smGap};
    flex-direction: ${(props: FlexRowType) =>
    props.smDirection && props.smDirection};
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
  @media screen and (max-width: 1536px) {
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
  }
  @media screen and (max-width: 640px) {
    grid-column: ${(props: GridColType) =>
    props.sm && `span ${props.sm} / span ${props.sm}`};
  }
`;

export const ImgWrapper = styled.div`
  max-width: ${(props: ImgWrapperTypes) =>
    props.maxWidth ? props.maxWidth : "none"};
  margin: ${(props: ImgWrapperTypes) => props.margin && props.margin};
  @media screen and (max-width: 1536px) {
    max-width: ${(props: ImgWrapperTypes) => props.xlWidth && props.xlWidth};
  }
  @media screen and (max-width: 1024px) {
    max-width: ${(props: ImgWrapperTypes) => props.lgWidth && props.lgWidth};
  }
  @media screen and (max-width: 768px) {
    max-width: ${(props: ImgWrapperTypes) => props.mdWidth && props.mdWidth};
  }
  @media screen and (max-width: 640px) {
    max-width: ${(props: ImgWrapperTypes) => props.smWidth && props.smWidth};
  }
`;

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
