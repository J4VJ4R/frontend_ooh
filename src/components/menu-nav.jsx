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
  <Container className="p-0">
    <Navbar.Brand href="/" className="text-light">SMARTABLE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/" className="text-light">Inicio</Nav.Link>
        <NavDropdown title="Caja" id="basic-nav-dropdown" className="dropdown-loto" >
          <NavDropdown.Item href="/" className="text-black">Mesas</NavDropdown.Item>
          <NavDropdown.Item href="/caja1" className="text-black">
              <Link to="/caja1">
                Inventario
              </Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/" className="text-light">Salir</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</Fragment>
)
}

export default MenuNav