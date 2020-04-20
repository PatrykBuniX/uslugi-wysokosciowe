import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainSection from "../components/MainSection"
import AboutSection from "../components/AboutSection"
import OfferSection from "../components/OfferSection"
import GallerySection from "../components/GallerySection"
import ContectSection from "../components/ContactSection"
import Break from "../components/Break"

const IndexPage = () => {
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

  console.log(galleryImgs[2].img.fileName)
  return (
    <Layout>
      <SEO />
      <MainSection />
      <AboutSection />
      <Break url={galleryImgs[2].img.url} />
      <OfferSection />
      <Break url={galleryImgs[1].img.url} />
      <GallerySection galleryImgs={galleryImgs} />
      <Break url={galleryImgs[0].img.url} />
      <ContectSection />
    </Layout>
  )
}

export default IndexPage
