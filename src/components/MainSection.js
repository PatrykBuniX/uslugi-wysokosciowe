import React from "react"
import styled from "styled-components"

const MainWrapper = styled.main`
  height: 100vh;
  background-image: url("https://res.cloudinary.com/patrykgorka/image/upload/q_50/v1593335224/body-imgs-gorka/image-main_vdelln.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  border-bottom: var(--border);
  @media (min-width: 768px) {
    background-attachment: fixed;
  }

  &::before {
    z-index: 0;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    opacity: 0.5;
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
  font-size: calc(2.5rem + 1vw);
  color: white;
  padding: 0 0.5rem;
  text-shadow: 2px 2px 5px black;
  @media (min-width: 768px) {
    & {
      font-size: calc(4rem + 2vw);
      padding-left: 3rem;
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
