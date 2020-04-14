import React from "react"
import styled from "styled-components"
import url from "../images/image3.jpg"

const AboutWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  box-shadow: var(--shadow);

  @media (min-width: 768px) {
    & {
      padding: 4rem 2rem;
      flex-direction: row;
    }
  }
`

const AboutText = styled.div`
  max-height: 75%;
  width: 100%;
  background-color: var(--primary);
  box-shadow: 0 0 15px -5px black;

  &::before {
    content: "Kim jestem?";
    color: white;
    font-weight: bold;
    font-size: 3rem;
    position: relative;
    top: 1rem;
    left: 1rem;
    padding: 1rem;
  }
  @media (min-width: 768px) {
    & {
      flex: 1;
      max-width: 700px;
      margin-right: 1.5rem;
    }

    &::before {
      font-size: 5rem;
    }
  }
`

const AboutImg = styled.img`
  margin-left: 1.5rem;
  box-shadow: 0 0 15px -5px black;

  @media (max-width: 768px) {
    display: none;
  }
`

const AboutP = styled.p`
  font-size: 1.2rem;
  padding: 2rem 1rem;
`

const AboutSection = () => {
  return (
    <AboutWrapper>
      <AboutText>
        <AboutP>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </AboutP>
      </AboutText>
      <AboutImg src={url} alt="me" />
    </AboutWrapper>
  )
}

export default AboutSection
