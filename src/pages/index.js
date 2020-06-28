import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainSection from "../components/MainSection"
import AboutSection from "../components/AboutSection"
import OfferSection from "../components/OfferSection"
import GallerySection from "../components/GallerySection"
import ContectSection from "../components/ContactSection"
import Break from "../components/Break"

const IndexPage = () => (
  <Layout>
    <SEO />
    <MainSection />
    <AboutSection />
    <Break
      url={
        "https://res.cloudinary.com/patrykgorka/image/upload/f_auto/v1593335222/body-imgs-gorka/image3_i4zq7f.jpg"
      }
    />
    <OfferSection />
    <Break
      url={
        "https://res.cloudinary.com/patrykgorka/image/upload/q_50,f_auto/v1593335222/body-imgs-gorka/image2_eqj7vy.jpg"
      }
    />
    <GallerySection />
    <Break
      url={
        "https://res.cloudinary.com/patrykgorka/image/upload/q_50,f_auto/v1593335225/body-imgs-gorka/image1_aexyyk.png"
      }
    />
    <ContectSection />
  </Layout>
)

export default IndexPage
