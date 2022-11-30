import styled from "styled-components";

export const StyledNav = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  color: white;
  margin: 0 auto;
  padding: 10px 0px;
  z-index:1000;

  @media screen and (max-width: 1440px) {
    padding: 15px 0px;
  }
`;

export const NavItem = styled.a`
  font-size: 14px;
  text-decoration: none;
  list-style: none;


  &:hover {
    transition: 200ms;
    opacity: 0.8;
  }
`;

export const NavItemWrapper = styled.div`
  display: block;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const ToogleWrapper = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;


export const ToggleButton = styled.button`
  display: none;
  font-size: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  margin-top:0px;
 
  padding:5px 10px 0px 10px;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
