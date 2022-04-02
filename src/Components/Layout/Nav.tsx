import React, { FunctionComponent } from "react";

import {
  Container,
  FlexRow,
  ImgWrapper,
  StyledImg,
} from "../../Styled/Theme.styles";
import {
  NavItem,
  NavItemWrapper,
  StyledNav,
  ToggleButton,
} from "../../Styled/Nav.styles";
import { Button } from "../../Styled/Button.styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "gatsby";
import logo from "../../images/logo.svg";

const Nav: FunctionComponent<any> = ({ navLinks, toggle }) => {
  return (
    <StyledNav>
      <Container>
        <FlexRow between itemCenter>
          <Link to={`/`}>
            <ImgWrapper smWidth={`130px`} mdWidth={`150px`} xlWidth={`170px`}>
              <StyledImg w={`100%`} src={logo} alt="img" />
            </ImgWrapper>
          </Link>
          <NavItemWrapper>
            <FlexRow itemCenter gap={`22px`}>
              {navLinks.map(({ id, text, path }) => {
                return (
                  <Link key={id} to={path}>
                    <NavItem>{text}</NavItem>
                  </Link>
                );
              })}
            </FlexRow>
          </NavItemWrapper>
          <NavItemWrapper>
            <Button style={{ minWidth: 180 }} width={`180px`}>
              REZERVACE
            </Button>
          </NavItemWrapper>
          <ToggleButton onClick={toggle}>
            <GiHamburgerMenu />
          </ToggleButton>
        </FlexRow>
      </Container>
    </StyledNav>
  );
};

export default Nav;
