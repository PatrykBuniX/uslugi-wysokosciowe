import React, { useState, useEffect, useMemo } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa"

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
    max-width: 80vw;
  }
`

const StyledImg = styled(Img)`
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
const VideoWrapper = styled.div`
  margin: 2rem 0;
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const StyledVideo = styled.video`
  margin: 1rem auto;
  display: block;
  width: auto;
  height: 100%;
  max-height: calc(100vh - 10rem);
  object-fit: cover;
  max-width: 100%;
`

const MoreVideoButton = styled.button`
  border: none;
  background: none;
  padding: 0.5rem 1rem;
  border-bottom: 0.5rem solid var(--primary);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  & > p {
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
      margin-left: 0.5rem;
    }
  }

  &:hover {
    background-color: var(--primary);
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
    allCloudinaryMedia: { edges },
  } = useStaticQuery(graphql`
    query CloudinaryImages {
      allCloudinaryMedia {
        edges {
          node {
            public_id
            resource_type
            created_at
            width
            height
            secure_url
            localImage {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  const [moreVideos, setMoreVideos] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)
  const [canSlide, setCanSlide] = useState(true)
  const [touchX, setTouchX] = useState(0)
  const [grabbing, setGrabbing] = useState(false)
  const [clickX, setClickX] = useState(0)
  const [fingers, setFingers] = useState(0)

  const cloudinaryImages = useMemo(
    () => edges && edges.filter(({ node }) => node.resource_type === "image"),
    [edges]
  )
  const cloudinaryVideos = useMemo(
    () => edges && edges.filter(({ node }) => node.resource_type === "video"),
    [edges]
  )

  const slide = direction => {
    if (!canSlide) return
    let newImgIndex = imgIndex + direction
    if (!(newImgIndex < 0 || newImgIndex > cloudinaryImages.length - 1)) {
      setCanSlide(false)
      setImgIndex(newImgIndex)
    }
  }

  const toggleMoreVideos = () => {
    setMoreVideos(prev => (prev ? false : true))
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCanSlide(true)
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [imgIndex])

  const detectSwipe = touchDiff => {
    if (touchDiff >= 50) {
      slide(-1)
    } else if (touchDiff <= -50) {
      slide(1)
    }
  }

  const handleTouchStart = e => {
    //check how many fingers touched the image
    setFingers(e.touches.length)
    setTouchX(e.touches[0].clientX)
  }
  const handleTouchEnd = e => {
    //do not swipe when touched with more than one finger
    if (fingers > 1) return
    const touchDiff = e.changedTouches[0].clientX - touchX
    detectSwipe(touchDiff)
  }

  const handleMouseDown = e => {
    setClickX(e.clientX)
    setGrabbing(true)
  }
  const handleMouseUp = e => {
    const touchDiff = e.clientX - clickX
    detectSwipe(touchDiff)
    setGrabbing(false)
  }

  return (
    <GalleryWrapper>
      <a
        style={{ visibility: "hidden", position: "absolute", top: "-5rem" }}
        id="gallery"
      />
      <HeroText>
        <h2>Galeria</h2>
        <p>Zobacz, jak wygląda moja praca.</p>
      </HeroText>
      <ImgWrapper>
        {cloudinaryImages.map(({ node }, index) => {
          const touchEvents =
            index === imgIndex
              ? {
                  onTouchStart: handleTouchStart,
                  onTouchEnd: handleTouchEnd,
                  onMouseDown: handleMouseDown,
                  onMouseUp: handleMouseUp,
                }
              : {}
          return (
            <div
              style={{ cursor: grabbing ? "grabbing" : "grab" }}
              key={node.public_id}
              {...touchEvents}
            >
              <StyledImg
                loading="eager"
                className={
                  index === imgIndex
                    ? "current"
                    : index < imgIndex
                    ? "prev"
                    : "next"
                }
                style={{ position: "absolute" }}
                imgStyle={{ objectFit: "contain" }}
                alt={node.public_id.split("/")[1].split("_")[0]}
                fluid={node.localImage.childImageSharp.fluid}
              />
            </div>
          )
        })}
        <Button disabled={imgIndex === 0} go="prev" onClick={() => slide(-1)}>
          <FaAngleLeft />
        </Button>
        <Button
          disabled={imgIndex === cloudinaryImages.length - 1}
          go="next"
          onClick={() => slide(1)}
        >
          <FaAngleRight />
        </Button>
      </ImgWrapper>
      <VideoWrapper>
        {moreVideos ? (
          cloudinaryVideos.map(({ node }, index) => (
            <StyledVideo
              poster={
                "https://res.cloudinary.com/patrykgorka/image/upload/v1593593075/body-imgs-gorka/video-banner2_lbdgbu.jpg"
              }
              key={node.public_id}
              controls
              alt={node.public_id.split("/")[1].split("_")[0]}
            >
              <source src={node.secure_url} />
            </StyledVideo>
          ))
        ) : (
          <StyledVideo
            poster={
              "https://res.cloudinary.com/patrykgorka/image/upload/v1593593075/body-imgs-gorka/video-banner2_lbdgbu.jpg"
            }
            controls
            alt={cloudinaryVideos[0].node.public_id.split("/")[1].split("_")[0]}
          >
            <source src={cloudinaryVideos[0].node.secure_url} />
          </StyledVideo>
        )}
      </VideoWrapper>
      <MoreVideoButton key={moreVideos} onClick={toggleMoreVideos}>
        {moreVideos ? (
          <p>
            Pokaż mniej filmów <FaAngleUp />
          </p>
        ) : (
          <p>
            Pokaż więcej filmów
            <FaAngleDown />
          </p>
        )}
      </MoreVideoButton>
    </GalleryWrapper>
  )
}

export default GallerySection
