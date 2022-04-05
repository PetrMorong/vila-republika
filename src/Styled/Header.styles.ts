import styled from "styled-components";
import header from "../images/header-bg.png";
interface Props {
  padding?: string;
  height?: string;
}
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: url("${header}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: ${(props: Props) => (props.padding ? props.padding : "0px")};
  min-height: ${(props: Props) =>
    props.height ? `calc(100vh - ${props.height})` : "100vh"};
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
    z-index: 1;
  }
`;
