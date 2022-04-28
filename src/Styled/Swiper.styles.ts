import styled from "styled-components";

export const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    opacity: 0.9;
  }
`;

export const SlideContent = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0, 0.4);
`;
