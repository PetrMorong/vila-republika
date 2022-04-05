import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import { NavItem } from "../../Styled/Nav.styles";
import {
  FlexRow,
  ImgWrapper,
  StyledImg,
  Wrapper,
} from "../../Styled/Theme.styles";
import logo from "../../images/logo.svg";
export interface INavigation {
  open: any;
  toggle: any;
  navLinks: any;
}
const MobileDrawer: FunctionComponent<INavigation> = ({
  open,
  toggle,
  navLinks,
}) => {
  return (
    <>
      <Drawer open={open} onClose={toggle} direction="left" zIndex={99999}>
        <Wrapper
          style={{ minHeight: "100vh" }}
          bgColor={`#262b3b`}
          padding={`50px`}
        >
          <Link to={`/`}>
            <ImgWrapper smWidth={`130px`} mdWidth={`150px`} xlWidth={`170px`}>
              <StyledImg w={`100%`} src={logo} alt="img" />
            </ImgWrapper>
          </Link>

          <FlexRow margin={`32px 0px`} column gap={`16px`}>
            {navLinks.map(({ id, text, path }) => {
              return (
                <Link key={id} to={path}>
                  <NavItem as="li">{text}</NavItem>
                </Link>
              );
            })}
          </FlexRow>
        </Wrapper>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
