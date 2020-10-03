import React, { useState } from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import Header from "./header"

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }

  img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}

  body{
    font-family: 'Roboto', sans-serif;
  }

  :root{
    --primary: #8DC1DF;
    --secondary: #f9f9f9;
    --border: 1px solid black;
  }
`

const Wrapper = styled.div`
  overflow-x: hidden;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: var(--primary);
`
const IconsLink = styled.p`
  margin-top: 0.5rem;
  font-size: 0.6rem;

  & a {
    color: black;
  }
`

const Layout = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }
  const contentClick = () => {
    setIsNavOpen(false)
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header isNavOpen={isNavOpen} toggleNav={toggleNav} />
        <div onClick={contentClick}>{children}</div>
        <Footer>
          <p>&copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone!</p>
          <IconsLink>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/becris" title="Becris">
              Becris
            </a>
            ,
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>
            ,
            <a
              href="https://www.flaticon.com/authors/skyclick"
              title="Skyclick"
            >
              Skyclick
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>{" "}
          </IconsLink>
        </Footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
