import { createGlobalStyle } from "styled-components";
import fonta from "../FontFamily/RocGrotesk.ttf";
export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap");
@font-face {
  font-family: "RocGrotesk";
  src: url(${fonta}) format("truetype");
}
*{
    margin: 0px;
    box-sizing: border-box;
    padding: 0px;
    text-decoration: none;
    font-family: "Space Grotesk", sans-serif;
}
body{
  font-family: "Space Grotesk", sans-serif;
}
`;
