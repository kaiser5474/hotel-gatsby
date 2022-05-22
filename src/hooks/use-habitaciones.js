import React from 'react'
import { graphql, useStaticQuery } from "gatsby";

const useHabitaciones = () => {
    const data = useStaticQuery(graphql`
    query{
        allDatoCmsHabitacion {
          nodes {
            id
            contenido
            imagen {
              fluid(maxWidth: 1200) {
                ...GatsbyDatoCmsFluid
              }
            }
            slug
            titulo
          }
        }
      }    
    `);

    console.log(data);
  return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
      titulo: habitacion.titulo,
      id: habitacion.id,
      contenido: habitacion.contenido,
      imagen: habitacion.imagen,
      slug: habitacion.slug,
      
  }));
}

export default useHabitaciones