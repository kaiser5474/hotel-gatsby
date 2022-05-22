import React from 'react'
import {
  graphql,
  useStaticQuery
} from 'gatsby'
import "./contenidoInicio.css";
import Img from 'gatsby-image';

const ContenidoInicio = () => {
  const informacion = useStaticQuery(graphql `
  query{
    allDatoCmsPagina(filter: {slug: { eq: "inicio"}}){
      nodes{
        titulo
        contenido
        imagen{
          fluid{
            src
          }
        }      
      }
    }
  }
    `)

    const {titulo, contenido, imagen} = informacion.allDatoCmsPagina.nodes[0]
    console.log(informacion.allDatoCmsPagina.nodes[0])
  return ( 
  <>
    <h2> {titulo} </h2> 
    <div className="texto-inicio2">
      <p>{contenido}</p>
      <Img  fluid={imagen.fluid} className="imagen-principal"/>
    </div>  
  </>    
  )
}

export default ContenidoInicio;