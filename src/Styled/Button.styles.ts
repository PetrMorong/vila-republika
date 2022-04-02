import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#bf5757")};
  color: ${({ textColor }) => (textColor ? textColor : "white")};
  max-width: ${({ width }) => (width ? width : "200px")};
  min-height: ${({ height }) => (height ? height : "50px")};
  border: 1px solid ${({ brColor }) => (brColor ? brColor : "#bf5757")};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 640px) {
  }
`;
