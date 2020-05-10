import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import url from "../images/image-about.jpg"

const AboutWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  border-bottom: var(--border);
  position: relative;
  background-color: var(--secondary);
  @media (min-width: 768px) {
    & {
      padding: 4rem 2rem;
      flex-direction: row;
      box-shadow: 0 0px 5px 0 black;
    }
  }
`

const AboutText = styled.div`
  max-height: 75%;
  width: 100%;
  padding: 0.5rem;

  @media (min-width: 768px) {
    & {
      flex: 1;
      max-width: 600px;
      margin-right: 1.5rem;
    }
  }
`
const AboutH = styled.h2`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 7rem;
    height: 6px;
    background-color: black;
  }
`

const AboutImgWrapper = styled.div`
  margin-left: 1.5rem;
  box-shadow: 0 0 20px -15px black;
  width: 30%;
  max-width: 300px;

  @media (max-width: 768px) {
    display: none;
  }
`

const AboutP = styled.p`
  font-size: 1.25rem;
  padding: 2rem 1rem;
`

const AboutSection = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "image-about.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)
  console.log(fluid)
  return (
    <AboutWrapper>
      <a
        style={{ visibility: "hidden", position: "absolute", top: "-5rem" }}
        id="about"
      />
      <AboutText>
        <AboutH>O Mnie</AboutH>
        <AboutP>
          Jestem... Oferuję szeroką gamę usług związanych z pracami na wysokości
          przy użyciu technik dostępu linowego. Jestem w stanie sprostać
          zadaniom których wykonanie wydawałoby się niemożliwe.
        </AboutP>
      </AboutText>
      <AboutImgWrapper>
        <Img fluid={fluid} alt="xd" />
      </AboutImgWrapper>
    </AboutWrapper>
  )
}

export default AboutSection
