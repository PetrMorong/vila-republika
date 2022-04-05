import styled from "styled-components";
import bg from "../images/nostalgick-bg.png";
interface NostalgickWrapperTypes {
  padding: string;
  height: string;
}
export const NostalgickWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: url("${bg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: ${(props: NostalgickWrapperTypes) =>
    props.padding ? props.padding : "0px"};
  min-height: ${(props: NostalgickWrapperTypes) =>
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
    background-color: rgb(0, 0, 0, 0.4);
    z-index: 1;
  }
`;
