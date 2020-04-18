import React from "react"
import styled from "styled-components"
// import url from "../images/image3.jpg"
import Window from "../icons/mycie_okien.svg"
import url from "../images/image4.jpg"

const OfferSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${url});
  background-position: center;
  background-size: cover;
  box-shadow: 0 5px 1px -5px black;
  padding: 3rem 0;
  position: relative;

  @media (min-width: 768px) {
    background-attachment: fixed;
  }
`

const OfferWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
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

  & > h2 {
    font-size: 2em;
  }
  & > p {
    font-size: 1.5em;
  }
`

const Offer = styled.div`
  height: 300px;
  height: 17rem;
  width: 90%;
  margin: 5%;
  background: white;
  box-shadow: 0 0 15px -5px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  @media (min-width: 500px) {
    width: 40%;
    margin: 5%;
  }
  @media (min-width: 900px) {
    width: 22%;
    margin: 1.5%;
  }
`

const OfferText = styled.p`
  margin-top: 1rem;
  padding: 1rem;
  font-size: 1.1rem;
  text-align: center;
`

const OfferSection = () => {
  return (
    <OfferSectionWrapper>
      <a
        style={{ visibility: "hidden", position: "absolute", top: "-5rem" }}
        id="offer"
      />
      <HeroText>
        <h2>Oferty</h2>
        <p>Usługi najwyższej jakości</p>
      </HeroText>
      <OfferWrapper>
        <Offer>
          <Window style={{ width: "25%" }} />
          <h3>Mycie okien</h3>
          <OfferText>
            Mycie okien przy uzyciu profesjalnego sprzętu i specjalnych
            środków...
          </OfferText>
        </Offer>
        <Offer>
          <Window style={{ width: "25%" }} />
          <h3>Mycie okien</h3>
          <OfferText>
            Mycie okien przy uzyciu profesjalnego sprzętu i specjalnych
            środków...
          </OfferText>
        </Offer>
        <Offer>
          <Window style={{ width: "25%" }} />
          <h3>Mycie okien</h3>
          <OfferText>
            Mycie okien przy uzyciu profesjalnego sprzętu i specjalnych
            środków...
          </OfferText>
        </Offer>
        <Offer>
          <Window style={{ width: "25%" }} />
          <h3>Mycie okien</h3>
          <OfferText>
            Mycie okien przy uzyciu profesjalnego sprzętu i specjalnych
            środków...
          </OfferText>
        </Offer>
      </OfferWrapper>
    </OfferSectionWrapper>
  )
}

export default OfferSection
