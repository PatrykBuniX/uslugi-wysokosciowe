import React, { useEffect } from "react"
import styled from "styled-components"
import Window from "../icons/clean.svg"
import Roof from "../icons/roof.svg"
import TreeCut from "../icons/treecut.svg"
import VacuumCleaner from "../icons/vacuum-cleaner.svg"
import Chimney from "../icons/chimney.svg"
import Tick from "../icons/tick.svg"
import BrickFloor from "../icons/brick-floor.svg"
import gsap, { Back, Sine } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const setUpScrollTrigger = () => {
  if (window.innerWidth < 768) {
    const offers = document.querySelectorAll(".offer")
    console.log(offers)
    offers.forEach((offer, index) => {
      gsap.from(`.offer-${index + 1}`, {
        scrollTrigger: { trigger: `.offer-${index + 1}`, start: "25% bottom" },
        x: index % 2 == 0 ? -200 : 200,
        autoAlpha: 0,
        duration: 0.5,
        ease: Back.easeOut.config(1.7),
      })
    })
  } else {
    gsap.from(".offer", {
      scrollTrigger: { trigger: ".offer", start: "25% bottom" },
      scale: 0.5,
      autoAlpha: 0,
      duration: 0.5,
      ease: Sine.easeOut,
    })
  }
}

const OfferSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--secondary);
  background-position: center;
  background-size: cover;
  border-bottom: var(--border);
  padding: 3rem 0;
  position: relative;

  @media (min-width: 768px) {
    background-attachment: fixed;
  }
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  font-size: 1rem;
  padding: 1rem 0;
  text-shadow: 0px 0px 10px white;
  text-align: center;

  & > h2 {
    font-size: 2em;
  }
  & > p {
    font-size: 1.5em;
  }
`
const OfferWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 5%;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  @media (min-width: 1200px) {
    padding: 0 15%;
  }
`

const Offer = styled.div`
  height: 12rem;
  width: 80%;
  margin: 5%;
  box-shadow: 0 0 20px -15px black;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  border-bottom: 0.4rem solid var(--primary);

  & > svg {
    width: 30%;
  }
  & > h3 {
    margin-top: 1.5rem;
  }

  @media (min-width: 500px) {
    width: 40%;
    margin: 5%;
  }
  @media (min-width: 900px) {
    width: 22%;
    margin: 1.5%;
  }
`

const OfferSection = () => {
  useEffect(() => {
    setUpScrollTrigger()
  }, [])
  return (
    <OfferSectionWrapper>
      <a
        style={{ visibility: "hidden", position: "absolute", top: "-5rem" }}
        id="offer"
      />
      <HeroText>
        <h2>Oferty</h2>
        <p>Usługi najwyższej jakości:</p>
      </HeroText>
      <OfferWrapper>
        <Offer className="offer offer-1">
          <Window />
          <h3>Mycie szyb</h3>
        </Offer>
        <Offer className="offer offer-2">
          <Roof />
          <h3>Czyszczenie dachów</h3>
        </Offer>
        <Offer className="offer offer-3">
          <TreeCut />
          <h3>Wycinka drzew</h3>
        </Offer>
        <Offer className="offer offer-4">
          <VacuumCleaner />
          <h3>Odkurzanie miejsc trudno dostępnych</h3>
        </Offer>
        <Offer className="offer offer-5">
          <Chimney />
          <h3>Mycie kominów</h3>
        </Offer>
        <Offer className="offer offer-6">
          <BrickFloor />
          <h3>Czyszczenie kostki brukowej</h3>
        </Offer>
        <Offer className="offer offer-7">
          <Tick />
          <h3>I wiele więcej usług</h3>
        </Offer>
      </OfferWrapper>
    </OfferSectionWrapper>
  )
}

export default OfferSection
