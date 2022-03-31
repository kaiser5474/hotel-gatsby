import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./imagenHotel.css"
// import styled from "styled-components";

// const ImagenFondo = styled.BackgroundImage`
//   height: 700px;
// `

const ImagenHotel = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = image.sharp.fluid

  return (
    <>
      <BackgroundImage
        className="imagen-principal"
        Tag="section"
        fluid={imageData}
      ></BackgroundImage>
    </>
  )
  //   <BackgroundImage tag="section" fluid={image.sharp.fluid}></BackgroundImage>
}

export default ImagenHotel
