import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const BurgerWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  margin: 1rem;

  @media (min-width: 768px) {
    & {
      display: none;
    }
  }

  & > div {
    transform: ${({ active }) =>
      active ? "translateY(-50%) rotate(-45deg)" : "translateY(-200%)"};
  }
  & > div:first-child {
    transform: ${({ active }) =>
      active ? "translateY(-50%) rotate(45deg)" : "translateY(50%)"};
  }
  & > div:nth-child(2) {
    transform: ${({ active }) =>
      active ? "translateY(-50%) rotate(45deg)" : "translateY(300%)"};
  }
`

const Line = styled.div`
  height: 10%;
  width: 100%;
  background: black;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transform-origin: 50% 50%;
  transition: transform 0.2s ease-in-out;
`

const Burger = ({ isNavOpen, toggleNav }) => {
  return (
    <BurgerWrapper onClick={toggleNav} active={isNavOpen}>
      <Line />
      <Line />
      <Line />
    </BurgerWrapper>
  )
}
Burger.propTypes = {
  isNavOpen: PropTypes.bool,
  toggleNav: PropTypes.func,
}

export default Burger
