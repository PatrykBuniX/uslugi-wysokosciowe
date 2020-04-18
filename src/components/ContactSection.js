import React from "react"
import styled from "styled-components"
import Window from "../icons/mycie_okien.svg"
import url from "../images/image4.jpg"
import { FaPhone, FaTelegramPlane, FaFacebookSquare } from "react-icons/fa"

const ContactSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--secondary);
  background-position: center;
  background-size: cover;
  box-shadow: 0 0px 5px 0 black;
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

  & > h2 {
    font-size: 2em;
  }
  & > p {
    font-size: 1.5em;
  }
`
const ContactWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 10%;
`

const Contact = styled.div`
  height: 300px;
  height: 17rem;
  width: 90%;
  margin: 5%;
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

const ContactText = styled.p`
  margin-top: 1rem;
  padding: 1rem;
  font-size: 1.1rem;
  text-align: center;
`

const ContactSection = () => {
  return (
    <ContactSectionWrapper>
      <a
        style={{ visibility: "hidden", position: "absolute", top: "-5rem" }}
        id="contact"
      />
      <HeroText>
        <h2>Kontakt</h2>
        <p>Zadzwon, napisz do mnie!</p>
      </HeroText>
      <ContactWrapper>
        <Contact>
          <FaPhone />
          <h3>Zadzwon</h3>
          <ContactText>741 852 963</ContactText>
        </Contact>
        <Contact>
          <FaTelegramPlane />
          <h3>Napisz</h3>
          <ContactText>firmagorka@gmail.com</ContactText>
        </Contact>
        <Contact>
          <FaFacebookSquare />
          <h3>Facebook</h3>
          <ContactText>...</ContactText>
        </Contact>
        <Contact>
          <Window style={{ width: "25%" }} />
          <h3>Mycie okien</h3>
          <ContactText>blebleble</ContactText>
        </Contact>
      </ContactWrapper>
    </ContactSectionWrapper>
  )
}

export default ContactSection
