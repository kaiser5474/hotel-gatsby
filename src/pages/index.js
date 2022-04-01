import * as React from "react"
import Layout from "../components/layout"
import ContenidoInicio from "../components/contenidoInicio"
import ImagenHotel from "../components/imagenHotel"

const IndexPage = () => (
  <Layout>
    <ImagenHotel />
    <ContenidoInicio/>    
  </Layout>
)

export default IndexPage
