import React from "react"
import styled from "styled-components"
import img from "../images/image1.png"

const MainWrapper = styled.main`
  height: 100vh;
  background-image: url(${img});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: var(--shadow);

  &::before {
    z-index: 0;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    opacity: 0.25;
  }
`

const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const HeroText = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  color: white;
  padding: 1rem;
  text-shadow: 2px 2px 5px black;
  @media (min-width: 768px) {
    & {
      font-size: 5rem;
    }
  }
`

const MainSection = () => {
  return (
    <MainWrapper>
      <ContentWrapper>
        <HeroText>
          Usługi wysokościowe <br /> na najwyższym poziomie.
        </HeroText>
      </ContentWrapper>
    </MainWrapper>
  )
}

export default MainSection
