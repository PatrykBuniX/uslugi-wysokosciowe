import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Logo from "../icons/logo.svg"

const StyledHeader = styled.header`
  height: 5rem;
  width: 100%;
  position: fixed;
  z-index: 1;
  background: white;
  box-shadow: 0 0px 5px 0 black;
  display: flex;
  justify-content: space-between;
`

const NavBar = styled.nav`
  display: flex;
`
const NavList = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0 1rem;
`

const NavItem = styled.li`
  & > a {
    margin: 0 1rem;
    color: gray;
    text-decoration: none;
  }
`

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <Logo style={{ height: "100%" }} />
    </Link>
    <NavBar>
      <NavList>
        <NavItem>
          <a href="#offer">Oferta</a>
        </NavItem>
        <NavItem>
          <a href="#galery">Galeria</a>
        </NavItem>
        <NavItem>
          <a href="#opinions">Opinie</a>
        </NavItem>
        <NavItem>
          <a href="#contact">Kontakt</a>
        </NavItem>
      </NavList>
    </NavBar>
  </StyledHeader>
)
export default Header
