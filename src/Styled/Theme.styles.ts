import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div<any>`
  width: 100%;
  background: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
  padding: ${({ padding }) => (padding ? padding : "0px")};

  @media screen and (max-width: 1536px) {
    padding: ${({ xlPadding }) => xlPadding && xlPadding};
  }
  @media screen and (max-width: 1024px) {
    padding: ${({ lgPadding }) => lgPadding && lgPadding};
  }
  @media screen and (max-width: 768px) {
    padding: ${({ mdPadding }) => mdPadding && mdPadding};
  }
  @media screen and (max-width: 640px) {
    padding: ${({ smPadding }) => smPadding && smPadding};
  }
`;

export const Container = styled.div<any>`
  max-width: 1720px;
  padding-left: 40px;
  padding-right: 40px;
  position: relative;
  z-index: 10;
  margin: ${({ margin }) => (margin ? margin : "0px auto")};
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "auto")};
  @media screen and (max-width: 1440px) {
    max-width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const FlexRow = styled.div<any>`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : "0px")};
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "none")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "none")};
  margin: ${(props) => props.margin && props.margin};
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  ${({ between }) =>
    between &&
    css`
      justify-content: space-between;
    `}
  ${({ itemCenter }) =>
    itemCenter &&
    css`
      align-items: center;
    `}

  @media screen and (max-width: 1536px) {
    gap: ${({ xlGap }) => xlGap && xlGap};
    flex-direction: ${({ xlDirection }) => xlDirection && xlDirection};
  }
  @media screen and (max-width: 1024px) {
    gap: ${({ lgGap }) => lgGap && lgGap};
    flex-direction: ${({ lgDirection }) => lgDirection && lgDirection};
  }
  @media screen and (max-width: 768px) {
    gap: ${({ mdGap }) => mdGap && mdGap};
    flex-direction: ${({ mdDirection }) => mdDirection && mdDirection};
  }
  @media screen and (max-width: 640px) {
    gap: ${({ smGap }) => smGap && smGap};
    flex-direction: ${({ smDirection }) => smDirection && smDirection};
  }
`;

export const FlexCols = styled.div`
  flex: ${({ cols }) => (cols ? cols : "1")};
`;

export const GridRow = styled.div`
  display: grid;
  margin: ${(props) => props.margin && props.margin};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "none")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "none")};
  gap: ${({ gap }) => (gap ? gap : "0px")};
  grid-template-columns: ${({ cols, max }) =>
    cols && max
      ? `repeat(${cols}, minmax(0, max-content))`
      : `repeat(${cols}, minmax(0, 1fr))`};

  ${({ between }) =>
    between &&
    css`
      justify-content: space-between;
    `}
  ${({ around }) =>
    around &&
    css`
      justify-content: space-around;
    `}
  ${({ itemCenter }) =>
    itemCenter &&
    css`
      align-items: center;
    `}
  @media screen and (max-width: 1536px) {
    margin: ${({ xlMargin }) => xlMargin && xlMargin};
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: ${({ lg, max }) =>
      lg && max
        ? `repeat(${lg}, minmax(0, max-content))`
        : `repeat(${lg}, minmax(0, 1fr))`};
    margin: ${({ lgMargin }) => lgMargin && lgMargin};
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: ${({ md, max }) =>
      md && max
        ? `repeat(${md}, minmax(0, max-content))`
        : `repeat(${md}, minmax(0, 1fr))`};
    margin: ${({ mdMargin }) => mdMargin && mdMargin};
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: ${({ sm, max }) =>
      sm && max
        ? `repeat(${sm}, minmax(0, max-content))`
        : `repeat(${sm}, minmax(0, 1fr))`};
    margin: ${({ smMargin }) => smMargin && smMargin};
  }
`;

export const GridCol = styled.div`
  grid-column: ${({ colSpan }) =>
    colSpan ? `span ${colSpan} / span ${colSpan}` : `span 1 / span 1`};

  @media screen and (max-width: 1024px) {
    grid-column: ${({ lg }) => lg && `span ${lg} / span ${lg}`};
  }
  @media screen and (max-width: 768px) {
    grid-column: ${({ md }) => md && `span ${md} / span ${md}`};
  }
  @media screen and (max-width: 640px) {
    grid-column: ${({ sm }) => sm && `span ${sm} / span ${sm}`};
  }
`;

export const ImgWrapper = styled.div`
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "none")};
  margin: ${(props) => props.margin && props.margin};
  @media screen and (max-width: 1536px) {
    max-width: ${({ xlWidth }) => xlWidth && xlWidth};
  }
  @media screen and (max-width: 1024px) {
    max-width: ${({ lgWidth }) => lgWidth && lgWidth};
  }
  @media screen and (max-width: 768px) {
    max-width: ${({ mdWidth }) => mdWidth && mdWidth};
  }
  @media screen and (max-width: 640px) {
    max-width: ${({ smWidth }) => smWidth && smWidth};
  }
`;

export const StyledImg = styled.img`
  width: ${({ w }) => (w ? w : "auto")};
  height: ${({ h }) => (h ? h : "auto")};

  margin: ${(props) => props.margin && props.margin};
  object-fit: ${({ object }) => (object ? object : "contain")};
  object-position: center;
`;

export const IconWrapper = styled.div`
  font-size: ${({ size }) => (size ? size : "16px")};
  color: ${({ color }) => (color ? color : "black")};
`;
