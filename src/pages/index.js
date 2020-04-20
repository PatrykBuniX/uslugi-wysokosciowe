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
import image1 from "../images/image1.png"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"

const IndexPage = () => (
  <Layout>
    <SEO />
    <MainSection />
    <AboutSection />
    <Break url={image3} />
    <OfferSection />
    <Break url={image2} />
    <GallerySection />
    <Break url={image1} />
    <ContectSection />
  </Layout>
)

export default IndexPage
