import React from "react"
import "./header.css"
import Navegacion from "./nav"

const header = () => {
  return (
    <header>
      <div className="container-header">
        <h1>Hotel Gatsby</h1>
        <Navegacion />
      </div>
    </header>
  )
}

export default header
