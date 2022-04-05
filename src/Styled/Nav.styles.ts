import styled from "styled-components";

export const StyledNav = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  color: white;
  background-color: transparent;
  margin: 0 auto;
  padding: 32px 0px;
  @media screen and (max-width: 1440px) {
    padding: 20px 0px;
  }
`;

export const NavItem = styled.a`
  font-size: 12px;
  color: white;
  font-weight: 700;
  text-decoration: none;
  list-style:none;
  @media screen and (max-width: 1536px) {
    font-weight: 600;
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 640px) {
  }
`;
export const NavItemWrapper = styled.div`
  display: block;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ToggleButton = styled.button`
  display: none;
  font-size: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
