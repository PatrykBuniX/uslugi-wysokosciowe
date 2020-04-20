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
  padding: 2rem;
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
  background-color: var(--primary);
  box-shadow: 0 0 15px -5px black;
  padding: 0.5rem;

  &::before {
    content: "Kim jestem?";
    color: white;
    font-weight: bold;
    font-size: 2rem;
    position: relative;
    top: 0;
    left: 0;
  }
  @media (min-width: 768px) {
    & {
      flex: 1;
      max-width: 600px;
      margin-right: 1.5rem;
    }

    &::before {
      font-size: 3rem;
    }
  }
`

const AboutImgWrapper = styled.div`
  margin-left: 1.5rem;
  box-shadow: 0 0 15px -5px black;
  width: 30%;
  max-width: 300px;

  @media (max-width: 768px) {
    display: none;
  }
`

const AboutP = styled.p`
  font-size: 1.2rem;
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
