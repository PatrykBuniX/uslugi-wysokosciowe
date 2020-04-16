import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"
import image1 from "../images/image1.png"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"

const GalleryWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--primary);
  align-items: center;
  box-shadow: 0 5px 1px -5px black;
  position: relative;
`

const ImgWrapper = styled.div`
  height: 50%;
  width: 90%;
  position: relative;
  overflow: hidden;
`

const StyledImg = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Button = styled.button`
  position: absolute;
  z-index: 2;
  width: 5rem;
  height: 5rem;
  top: 50%;
  background-color: white;
  border: none;
  transform: translateY(-50%);
  ${({ go }) => (go === "prev" ? "left: 0rem;" : "right: 0rem;")}

  & > p {
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    & p {
      transform: scale(1.5);
    }
  }
`

const GallerySection = () => {
  const images = [image1, image2, image3]
  const [[page, direction], setPage] = useState([0, 0])

  const imageIndex = wrap(0, images.length, page)

  const divVariants = {
    initial: { x: direction > 0 ? "100%" : "-100%", opacity: 0 },
    animate: { zIndex: 1, x: 0, opacity: 1 },
    exit: { zIndex: 0, x: direction < 0 ? "100%" : "-100%", opacity: 0 },
  }

  useEffect(() => {
    console.log([page, direction], imageIndex)
  })

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <GalleryWrapper>
      <ImgWrapper>
        <AnimatePresence initial={false} custom={direction}>
          <StyledImg
            key={page}
            src={images[imageIndex]}
            alt={`image${page}`}
            custom={direction}
            variants={divVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              x: { duration: 0.5 },
              opacity: { duration: 0.5 },
            }}
          />
        </AnimatePresence>
      </ImgWrapper>
      <Button go="prev" onClick={() => paginate(-1)}>
        <p>prev</p>
      </Button>
      <Button go="next" onClick={() => paginate(1)}>
        <p>next</p>
      </Button>
    </GalleryWrapper>
  )
}

export default GallerySection
