import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
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
  max-height: calc(100vh - 10rem);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 90vh;
  /*disable double-tap "zoom" on mobile*/
  touch-action: manipulation;
  @media (min-width: 768px) {
    height: 45vw;
    max-width: 80vw;
  }
`

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  margin: auto;
  touch-action: manipulation;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

  &.prev {
    transform: translateX(-100%) scale(0.5);
    opacity: 0;
  }
  &.current {
    transform: translateX(0%);
    z-index: 1;
    opacity: 1;
  }
  &.next {
    transform: translateX(100%) scale(0.5);
    opacity: 0;
  }

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
  touch-action: manipulation;
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
  &:disabled {
    background-color: #aaaaaa;
    color: #666666;

    &:hover {
      cursor: default;
      & svg {
        transform: none;
      }
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
  const [imgIndex, setImgIndex] = useState(0)
  const [canSlide, setCanSlide] = useState(true)

  const slide = direction => {
    if (!canSlide) return
    let newImgIndex = imgIndex + direction
    if (newImgIndex < 0) {
      newImgIndex = 0
    } else if (newImgIndex > galleryImgs.length - 1) {
      newImgIndex = galleryImgs.length - 1
    }
    setImgIndex(newImgIndex)
    setCanSlide(false)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCanSlide(true)
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [imgIndex])

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
        {galleryImgs &&
          galleryImgs.map(({ img }, index) => (
            <StyledImg
              key={img.fileName + index}
              className={
                index === imgIndex
                  ? "current"
                  : index < imgIndex
                  ? "prev"
                  : "next"
              }
              src={img.url}
              alt={img.fileName}
            />
          ))}
        <Button disabled={imgIndex === 0} go="prev" onClick={() => slide(-1)}>
          <FaAngleLeft />
        </Button>
        <Button
          disabled={imgIndex === galleryImgs.length - 1}
          go="next"
          onClick={() => slide(1)}
        >
          <FaAngleRight />
        </Button>
      </ImgWrapper>
    </GalleryWrapper>
  )
}

export default GallerySection
