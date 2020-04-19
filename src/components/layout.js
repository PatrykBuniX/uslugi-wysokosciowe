import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
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
  justify-content: center;
  padding: 1rem;
  background-color: var(--primary);
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
          &copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone!
        </Footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
