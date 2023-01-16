import styled from "styled-components";


interface NostalgickWrapperTypes {
  padding: string;
  height: string;
  bg: string
}
export const NostalgickWrapper = styled.div<NostalgickWrapperTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url("${p => p.bg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: ${(props: NostalgickWrapperTypes) =>
    props.padding ? props.padding : "0px"};
  min-height: 650px;

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
