import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import Logo from "../icons/logo.svg"
import Burger from "../components/Burger"

const StyledHeader = styled.header`
  height: 5rem;
  width: 100%;
  position: fixed;
  z-index: 1;
  background: white;
  box-shadow: 0 0px 5px 0 black;
  display: flex;
  flex-direction: column;

  & > a {
    padding: 0 1rem;
  }
  @media (min-width: 768px) {
    & {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`

const NavBar = styled.nav`
  display: flex;
  position: absolute;
  width: 100%;
  top: 5rem;
  z-index: -1;
  background: white;
  box-shadow: 5px 0px 5px 0 black;
  transform: ${({ isNavOpen }) =>
    isNavOpen ? "translateY(0%)" : "translateY(-100%)"};
  transition: transform 0.2s ease-in-out;

  @media (min-width: 768px) {
    & {
      position: static;
      transform: unset;
      width: unset;
    }
  }
`
const HeroNav = styled.div`
  position: absolute;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  @media (min-width: 768px) {
    & {
      position: unset;
      width: unset;
    }
  }
`
const StyledLink = styled(Link)`
  height: 100%;
  & > svg {
    height: 100%;
  }
`

const NavList = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding: 0 1rem;

  @media (min-width: 768px) {
    & {
      flex-direction: row;
    }
  }
`

const NavItem = styled.li`
  margin: 0 1rem;
  & > a {
    color: gray;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    & {
      margin: 1rem 0;
    }
  }
`

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleClick = () => {
    console.log("xd")
    setIsNavOpen(!isNavOpen)
  }
  return (
    <StyledHeader>
      <HeroNav>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
        <Burger isNavOpen={isNavOpen} handleClick={handleClick} />
      </HeroNav>
      <NavBar isNavOpen={isNavOpen}>
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
}
export default Header
