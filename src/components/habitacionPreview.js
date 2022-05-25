import React from 'react';
import Image from 'gatsby-image';
import styled from "styled-components";
import { Link } from 'gatsby';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44, 62, 80, .85);
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`

const Titulo = styled.h3`
    font-size: 3rem;
`

const Contenido = styled.p`
    padding: 1rem;
`

const HabitacionPreview = ({habitacion}) => {
    const {contenido, imagen, titulo, slug} = habitacion;
  return (
    <div>
        <Image
            fluid={imagen.fluid}
            />
        <Contenido>
            <Titulo>{titulo}</Titulo>
            <p>{contenido}</p>
            <Boton to={slug}>Ver Habitacion</Boton>
        </Contenido>
    </div>
  )
}

export default HabitacionPreview