import { createGlobalStyle } from "styled-components";
import fonta from "../FontFamily/RocGrotesk.ttf";

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

  @media screen and (max-width: 768px) {
    .tab{
      display:none;
    }
  }
`;
