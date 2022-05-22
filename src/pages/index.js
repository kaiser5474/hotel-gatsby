import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import ContenidoInicio from "../components/contenidoInicio";
import ImagenHotel from "../components/imagenHotel";
import useHabitaciones from "../hooks/use-habitaciones";
import './index.css';
import HabitacionPreview from "../components/habitacionPreview";

const ListadoHabitaciones = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px){
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 3rem;
  }
`

const IndexPage = () => {
  const habitaciones = useHabitaciones();
  console.log(habitaciones);
  return(
  <Layout>
    <ImagenHotel />
    <ContenidoInicio/>  
    <h2 className="nuestras-habitaciones">
      Nuestras Habitaciones
    </h2>
    <ListadoHabitaciones>
      {habitaciones.map(habitacion => (
        <HabitacionPreview 
          key={habitacion.id}
          habitacion={habitacion}
        />
      ))}
    </ListadoHabitaciones>
  </Layout>
  )
}

export default IndexPage
