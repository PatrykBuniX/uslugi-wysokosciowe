import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

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
  text-align: center;

  & > h2 {
    font-size: 2em;
  }
  & > p {
    font-size: 1.5em;
  }
`

const ImgWrapper = styled.div`
  height: 45vw;
  max-height: calc(100vh - 10rem);
  width: 100%;
  max-width: 80vw;
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
  font-size: calc(1rem + 1vw);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
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
  const {
    gallery: { galleryImgs },
  } = useStaticQuery(
    graphql`
      query {
        gallery {
          galleryImgs {
            img {
              url
              size
              fileName
            }
          }
        }
      }
    `
  )
  const [[page, direction], setPage] = useState([0, 0])

  const imageIndex = wrap(0, galleryImgs.length, page)

  const variants = {
    enter: { x: direction > 0 ? 1000 : -1000, opacity: 1 },
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: { zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 },
  }

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
            src={galleryImgs[imageIndex].img.url}
            alt={`image-${galleryImgs[imageIndex].img.fileName}`}
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
