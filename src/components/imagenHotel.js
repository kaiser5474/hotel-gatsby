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
      >
        <div className="texto-imagen">
          <h1>Bienvenido a Hotel Gatsby</h1>
          <p>El mejor hotel para tus vacaciones</p>
        </div>
      </BackgroundImage>
    </>
  )
}

export default ImagenHotel
