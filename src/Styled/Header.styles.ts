import styled from "styled-components";
import { css } from "styled-components";
interface Props {
  padding?: string;
  height?: string;
  smHegiht?:string;
  header?: string;
  bgColor?: any;
  bgGradient?: any;
  smPadding?:string;

}
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: url("${(props: Props) => (props.header)}");
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
    ${(props: Props) =>
    props.bgColor &&
    css`
      background-color:rgb(0, 0, 0, 0.5);
      `}
      ${(props: Props) =>
    props.bgGradient &&
    css`
    background: transparent linear-gradient(180deg, #001044 0%, #0014535C 100%) 0% 0% no-repeat padding-box;
     `}
 
    z-index: 1;
  }
  @media screen and (max-width: 640px) {
    min-height: ${(props: Props) =>
      props.smHegiht ? `calc(100vh - ${props.smHegiht})` : "100vh"};
      padding: ${(props: Props) => (props.smPadding ? props.smPadding : "0px")};
  }
`;
