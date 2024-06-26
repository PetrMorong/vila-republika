import { createGlobalStyle } from 'styled-components'

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
  background-color: rgb(0, 0, 0, 0.6);
}
.scrolled{
  background-color: #FFFFFF;
}
.normal{
  background-color: transparent;
}
.scolled_nav_link{
  color: #000000;
}
.normal_nav_link{
  color: #FFFFFF;
}
.scolled_btn_border{
  border:2px solid #000000;
}
.normal_btn_border{
  border:2px solid #FFFFFF;
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
`
