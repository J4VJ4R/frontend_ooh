import React, {Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
function MenuNav(){
return(
<Fragment>
<Navbar bg="bg-loto-" expand="lg" >
  <Container className="p-3 border-custom container">
    <Navbar.Brand href="/" > <p className="text-light-custom mt-3"> CANVAS PARA EL DISEÑO DE PROYECTOS</p></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="/" className="text-light link-custom pt-0 mx-2">Inicio</Link>
        <Link to="/" className="text-light link-custom pt-0 mx-2">Salir</Link>
        <Link to="/" className="text-light link-custom pt-0 mx-2">Crear tablero</Link>
        <Link to="/qr" className="text-light link-custom pt-0 mx-2">Ver QR</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</Fragment>
)
}

export default MenuNav