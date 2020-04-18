import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainSection from "../components/MainSection"
import AboutSection from "../components/AboutSection"
import OfferSection from "../components/OfferSection"
import GallerySection from "../components/GallerySection"
import ContectSection from "../components/ContactSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainSection />
    <AboutSection />
    <OfferSection />
    <GallerySection />
    <ContectSection />
  </Layout>
)

export default IndexPage
