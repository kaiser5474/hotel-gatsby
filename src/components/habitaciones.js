import React from 'react'
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from "../components/layout";
import styled from "styled-components";

const Main = styled.main`
    margin: 0 auto;
    max-width: 1200px;
    width: 95%;
`

const Titulo = styled.h2`
    text-align: center;
    margin-top: 4rem;
`

export const query = graphql`
query($slug: String){
    allDatoCmsHabitacion (filter: {slug: {eq: $slug}}) {
      nodes {
        id
        slug
        titulo
        contenido
        imagen {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const HabitacionesTemplate = ({data}) => {
const {titulo, contenido, imagen} = data.allDatoCmsHabitacion.nodes[0];

  return (
      <Layout>
          <Main>
            <Titulo>{titulo}</Titulo>
            <p>{contenido}</p>
            <Image
                fluid={imagen.fluid}
            />
          </Main>        
      </Layout>
    
  )
}

export default HabitacionesTemplate;