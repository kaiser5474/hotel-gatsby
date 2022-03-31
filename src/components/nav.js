import React from "react"
import { Link } from "gatsby"
import "./nav.css"

const Navegacion = () => {
  return (
    <nav>
      <Link className="nav-link" activeClassName="pagina-actual" to={"/"}>
        Inicio
      </Link>
      <Link
        className="nav-link"
        activeClassName="pagina-actual"
        to={"/nosotros"}
      >
        Nosotros
      </Link>
    </nav>
  )
}

export default Navegacion
