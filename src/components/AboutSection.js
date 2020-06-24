import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import gsap, { Sine } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const setUpScrollTrigger = () => {
  gsap.from(".about-text", {
    scrollTrigger: ".about-text",
    x: -200,
    autoAlpha: 0,
    duration: 0.5,
    ease: Sine.easeOut,
  })
  gsap.from(".about-img", {
    scrollTrigger: ".about-img",
    x: 200,
    autoAlpha: 0,
    duration: 0.5,
    ease: Sine.easeOut,
  })
}

const AboutWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  border-bottom: var(--border);
  position: relative;
  background-color: var(--secondary);
  padding: 2rem 1rem;
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
  padding: 1rem;
  background-color: var(--primary);
  position: relative;
  @media (min-width: 768px) {
    & {
      flex: 1;
      padding: 1.5rem;
      max-width: 500px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 2rem;
    right: -2rem;
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    opacity: 0.25;
    z-index: -1;
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
  margin: -1rem 0 0 0;
  box-shadow: 0 0 20px -15px black;
  width: calc(250px + 4vw);
  max-width: 300px;

  @media (min-width: 768px) {
    margin-left: 0 0 0 -1rem;
  }

  &::after {
    content: "";
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    opacity: 0.25;
    z-index: -1;
  }
`

const AboutP = styled.p`
  font-size: 1.25rem;
  padding: 2rem 0;
  @media (min-width: 768px) {
    padding: 2rem;
  }
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
  useEffect(() => {
    setUpScrollTrigger()
  }, [])
  return (
    <AboutWrapper>
      <a
        style={{ visibility: "hidden", position: "absolute", top: "-5rem" }}
        id="about"
      />
      <AboutText className="about-text">
        <AboutH>O Mnie</AboutH>
        <AboutP>
          Jestem... Oferuję szeroką gamę usług związanych z pracami na wysokości
          przy użyciu technik dostępu linowego. Jestem w stanie sprostać
          zadaniom których wykonanie wydawałoby się niemożliwe.
        </AboutP>
      </AboutText>
      <AboutImgWrapper className="about-img">
        <Img fluid={fluid} alt="my-picture" />
      </AboutImgWrapper>
    </AboutWrapper>
  )
}

export default AboutSection
