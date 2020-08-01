import React from "react"

import Layout from "../components/Layout"
import StyledBackgroundSection from "../components/BackgroundSection"
import SEO from "../components/Seo"
import {
  StyledWrapper,
} from '../components/SharedStyledComponents'

const IndexPage = () => (
  <StyledBackgroundSection>
    <Layout>
      <StyledWrapper>
      <SEO title="Home" />
      </StyledWrapper>
    </Layout>
  </StyledBackgroundSection>

)

export default IndexPage
