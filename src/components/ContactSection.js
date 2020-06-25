import React from "react"
import styled from "styled-components"
import { FaPhone, FaTelegramPlane } from "react-icons/fa"

const ContactSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--secondary);
  background-position: center;
  background-size: cover;
  padding: 3rem 0;
  position: relative;
  border-bottom: var(--border);

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
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Contact = styled.div`
  margin: 1rem 0;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  & > svg {
    font-size: 2rem;
  }
  & > svg {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`

const ContactText = styled.p`
  padding: 1rem;
  text-align: center;
  font-size: 1.25rem;
  font-family: monospace;
  white-space: pre;
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
        <p>Zadzwoń, napisz do mnie!</p>
      </HeroText>
      <ContactWrapper>
        <Contact>
          <FaPhone />
          <h3>Zadzwoń</h3>
          <ContactText>730 656 896</ContactText>
        </Contact>
        <Contact>
          <FaTelegramPlane />
          <h3>Napisz</h3>
          <ContactText>gorkamich@gmail.com</ContactText>
        </Contact>
      </ContactWrapper>
    </ContactSectionWrapper>
  )
}

export default ContactSection
