import React, { FunctionComponent, useState } from 'react'

import {
  Container,
  FlexRow,
  ImgWrapper,
  StyledImg,
} from '../../Styled/Theme.styles'
import {
  NavItem,
  NavItemWrapper,
  StyledNav,
  ToggleButton,
  ToogleWrapper,
} from '../../Styled/Nav.styles'
import { Button, MobileButton } from '../../Styled/Button.styles'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'gatsby'
import logo from '../../images/logo.svg'
import darklogo from '../../images/darklogo.svg'

const isBrowser = typeof window !== 'undefined'

const Nav: FunctionComponent<any> = ({ navLinks, toggle, is }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  if (isBrowser) {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 200) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }

  return (
    <StyledNav className={isScrolled ? 'scrolled' : 'normal'}>
      <Container>
        <FlexRow between itemCenter>
          <Link to={`/`}>
            <ImgWrapper smWidth={`130px`} mdWidth={`150px`} xlWidth={`170px`}>
              <StyledImg
                w={isScrolled ? '130px' : `180px`}
                smw={`90px`}
                src={isScrolled ? darklogo : logo}
                alt="img"
                style={{ marginTop: isScrolled ? '5px' : `20px` }}
              />
            </ImgWrapper>
          </Link>
          <NavItemWrapper>
            <FlexRow itemCenter gap={`22px`}>
              {navLinks.map(({ id, text, path }: any) => {
                return (
                  <Link key={id} to={path}>
                    <NavItem
                      as="li"
                      className={
                        isScrolled ? 'scolled_nav_link' : 'normal_nav_link'
                      }
                    >
                      {text}
                    </NavItem>
                  </Link>
                )
              })}
            </FlexRow>
          </NavItemWrapper>
          <ToogleWrapper>
            <NavItemWrapper>
              <Link to="/rezervace">
                <Button
                  style={{ minWidth: 176 }}
                  width={`176px`}
                  height={`61px`}
                >
                  Rezervace
                </Button>
              </Link>
            </NavItemWrapper>
            <Link to="/rezervace">
              <MobileButton>Rezervace</MobileButton>
            </Link>
            <ToggleButton
              onClick={toggle}
              className={
                isScrolled ? 'scolled_btn_border' : 'normal_btn_border'
              }
            >
              <GiHamburgerMenu
                className={isScrolled ? 'scolled_nav_link' : 'normal_nav_link'}
              />
            </ToggleButton>
          </ToogleWrapper>
        </FlexRow>
      </Container>
    </StyledNav>
  )
}

export default Nav
