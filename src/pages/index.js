import React from "react"

import Layout from "../components/Layout"
import StyledBackgroundSection from "../components/BackgroundSection"
import SEO from "../components/Seo"
import CenterTitle from "../components/CenterTitle"

const IndexPage = () => (
  <StyledBackgroundSection image='desktop'>
    <Layout>
      <SEO title="Home" />
      <CenterTitle title="Se mejor persona en la vida real que en las redes sociales" />
    </Layout>
  </StyledBackgroundSection>

)

export default IndexPage
