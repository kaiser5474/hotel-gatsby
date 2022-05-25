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

const header = () => {
  return (
    <header>
      <div className="container-header">
        <EnlaceHome to="/">
          <h1>Hotel Gatsby</h1>
        </EnlaceHome>
        <Navegacion />
      </div>
    </header>
  )
}

export default header
