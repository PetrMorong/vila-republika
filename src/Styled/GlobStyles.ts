import { createGlobalStyle } from "styled-components";
import fonta from "../FontFamily/RocGrotesk.ttf";
export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "RocGrotesk";
  src: url(${fonta}) format("truetype");
}
*{
    margin: 0px;
    box-sizing: border-box;
    padding: 0px;
    text-decoration: none;
    font-family: "RocGrotesk";
}

`;
