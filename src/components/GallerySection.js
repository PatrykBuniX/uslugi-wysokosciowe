import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import image1 from "../images/image-about.jpg"
import image2 from "../images/image-main.jpg"
import image3 from "../images/image2.jpg"
import image4 from "../images/image3.jpg"

const GalleryWrapper = styled.section`
  display: flex;
  justify-content: center;
  background-color: var(--secondary);
  align-items: center;
  position: relative;
  padding: 3rem 0;
  flex-direction: column;
  border-bottom: var(--border);
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  font-size: 1rem;

  & > h2 {
    font-size: 2em;
  }
  & > p {
    font-size: 1.5em;
  }
`

const ImgWrapper = styled.div`
  min-height: 550px;
  width: 100%;
  max-width: 1000px;
  position: relative;
  overflow: hidden;
`

const StyledImg = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto;
  width: 100%;
  height: auto;

  @media (min-width: 768px) {
    width: auto;
    height: 100%;
  }
`

const Button = styled.button`
  position: absolute;
  z-index: 1;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  top: 50%;
  background-color: black;
  color: white;
  border: none;
  transform: translateY(-50%);
  ${({ go }) => (go === "prev" ? "left: 0;" : "right: 0;")}

  & > svg {
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    & svg {
      transform: scale(1.5);
    }
  }
`

const GallerySection = () => {
  const images = [image1, image2, image3, image4]
  const [[page, direction], setPage] = useState([0, 0])

  const imageIndex = wrap(0, images.length, page)

  const variants = {
    enter: { x: direction > 0 ? 1000 : -1000, opacity: 1 },
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: { zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 },
  }

  useEffect(() => {
    console.log(page, direction)
  })

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <GalleryWrapper>
      <a
        style={{ visibility: "hidden", position: "absolute", top: "-5rem" }}
        id="gallery"
      />
      <HeroText>
        <h2>Galeria</h2>
        <p>Zobacz jak wyglada moja praca.</p>
      </HeroText>
      <ImgWrapper>
        <AnimatePresence initial={false}>
          <StyledImg
            key={page}
            src={images[imageIndex]}
            alt={`image${page}`}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { duration: 0.5 },
              opacity: { duration: 0.5 },
            }}
          />
        </AnimatePresence>
        <Button go="prev" onClick={() => paginate(-1)}>
          <FaAngleLeft />
        </Button>
        <Button go="next" onClick={() => paginate(1)}>
          <FaAngleRight />
        </Button>
      </ImgWrapper>
    </GalleryWrapper>
  )
}

export default GallerySection
