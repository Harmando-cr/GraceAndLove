import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import BackgroundImage from 'gatsby-background-image'
import { StyledFullScreenWrapper } from './SharedStyledComponents'

const BackgroundSection = ({ className, children, image }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data[`${image}`].childImageSharp.fluid
  return (
    <StyledFullScreenWrapper>
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#d43438`}
          role="img"
        >
          {children}
        </BackgroundImage>
    </StyledFullScreenWrapper>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
`

export default StyledBackgroundSection