import { createGlobalStyle } from "styled-components";
import img from "../images/F1.png";
export const GlobalStyle = createGlobalStyle`

  *{
      margin: 0px;
      box-sizing: border-box;
      padding: 0px;
      text-decoration: none;
      font-family: roc-grotesk, sans-serif;
  }

  body {
    font-family: roc-grotesk, sans-serif;
  }

  .btn-primary {
    color: #BF5757 !important;
  }
.tab{
  border-bottom: 1px solid #F0E8D9;
}
.pro_bg{
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 500px;
  object-fit: cover;
  position:relative;
}
.pro_bg_overlay{
  position: absolute;
  bottom: 0;
  left: 0;
  right:0;
  width: 100%;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0, 0.4);
}

  @media screen and (max-width: 768px) {
    .tab{
      display:none;
    }
  }
  @media screen and (max-width: 640px) {
    .orderReverse{
      order:1;
    }
    .pro_bg{
      min-height: 800px;
    }
    .icon-cylce{
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 373px) {
    .icon-cylce{
      justify-content: center;
    }
  }
`;
