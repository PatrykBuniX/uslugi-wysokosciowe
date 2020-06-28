import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const BreakWrapper = styled.div`
  height: 20vh;
  width: 100%;
  background-size: cover;
  background-image: url(${({ url }) => url});
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

const Break = ({ url }) => {
  return <BreakWrapper url={url}></BreakWrapper>
}
Break.propTypes = {
  url: PropTypes.string,
}
export default Break
