import styled from "styled-components";
interface Props {
  bgColor?: string;
  textColor?: string;
  width?: string;
  height?: string;
  brColor?: string;
  margin?: string;
}
export const ButtonWrapper = styled.div`
width:100%;
display: flex;
justify-content: flex-start;
@media screen and (max-width: 640px) {
  justify-content: center;
}

`

export const ButtonWrapperFoto = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  z-index: 1;
  transition: 250ms;
  opacity: 1;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 640px) {
    justify-content: center;
  }

`

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  cursor: pointer;
  background-color: ${(props: Props) =>
    props.bgColor ? props.bgColor : "#bf5757"};
  color: ${(props: Props) => (props.textColor ? props.textColor : "white")};
  max-width: ${(props: Props) => (props.width ? props.width : "200px")};
  min-height: ${(props: Props) => (props.height ? props.height : "50px")};
  border: 1px solid
    ${(props: Props) => (props.brColor ? props.brColor : "#bf5757")};
  margin: ${(props: Props) => (props.margin ? props.margin : "0px")};

  font-family: roc-grotesk-wide;
  font-weight: 600px;
  font-size: 12px;
  transition: 200ms;
  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 640px) {
  }
`;

export const MobileButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  cursor: pointer;
  background-color: #bf5757;
  color: white;
  max-width: 120px;
  min-height: 45px;
  border: 1px solid #bf5757;
  margin: 0px;
  font-family: roc-grotesk-wide;
  font-weight: 600px;
  font-size: 12px;
  transition: 200ms;
  margin:0px 20px;
  &:hover {
    opacity: 0.8;
  }

`;
