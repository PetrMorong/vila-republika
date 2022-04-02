import React, { FunctionComponent, useState } from "react";
import Footer from "./Footer";
import MobileDrawer from "./MobileDrawer";
import Nav from "./Nav";
import "./layout.css";

const Layout: FunctionComponent = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <Nav toggle={toggleDrawer} navLinks={navLinks} />
      <MobileDrawer navLinks={navLinks} toggle={toggleDrawer} open={isOpen} />
      {children}
      <Footer navLinks={navLinks} />
    </>
  );
};

export default Layout;

const navLinks = [
  { id: 1, text: "APARTMÁNY", path: "/" },
  { id: 2, text: "WELLNESS", path: "/" },
  { id: 3, text: "OKOLÍ", path: "/" },
  { id: 4, text: "BISTRO", path: "/" },
  { id: 5, text: "DÁRKOVÉ POUKAZY", path: "/" },
  { id: 6, text: "FOTOGALERIE", path: "/" },
  { id: 7, text: "KONTAKT", path: "/" },
];
