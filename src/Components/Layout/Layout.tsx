import React, { FunctionComponent, useState } from 'react'
import { GlobalStyle } from '../../Styled/GlobStyles'
import Footer from './Footer'
import MobileDrawer from './MobileDrawer'
import Nav from './Nav'
import { Helmet } from 'react-helmet'
import Favicon from '../../images/faviconWhite.ico'

const navLinks = [
  { id: 1, text: 'Apartmány', path: '/apartmany' },
  { id: 2, text: 'Privátní Wellness', path: '/wellness' },
  // { id: 3, text: "Okolí", path: "/okoli" },
  { id: 5, text: 'Fotogalerie', path: '/fotogalerie' },
  { id: 5, text: 'Recenze', path: '/recenze' },
  { id: 6, text: 'Dárkové Poukazy', path: '/darkove-poukazy' },
  { id: 4, text: 'Pobytové Balíčky', path: '/balicky' },
  { id: 7, text: 'Rezervace', path: '/rezervace' },
]

const Layout: FunctionComponent = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <>
      <GlobalStyle />
      <Nav toggle={toggleDrawer} navLinks={navLinks} />
      <MobileDrawer navLinks={navLinks} toggle={toggleDrawer} open={isOpen} />
      {children}
      <Footer navLinks={navLinks} />
    </>
  )
}

export default Layout
