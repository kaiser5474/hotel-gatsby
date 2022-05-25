import React from "react";
import "./header.css";
import Navegacion from "./nav";
import styled from "styled-components";
import {Link} from 'gatsby';

const EnlaceHome = styled(Link)`
  color: #FFF;
  text-align: center;
  text-decoration: none;
`

const Contenido = styled.p`
    text-align: center;
    color: #fff;
    background-color: rgb(33,44,55);
    margin: 0;
    padding: 1rem;
`

const footer = () => {
    const year = new Date().getFullYear();
  return (
    <>
        <header>
        <div className="container-header">
            <EnlaceHome to="/">
            <h1>Hotel Gatsby</h1>
            </EnlaceHome>
            <Navegacion />
        </div>
        </header>
        <Contenido>
            Hotel Gatsby. Todos los derechos reservados {year}. &copy;
        </Contenido>
    </>
  )
}

export default footer
