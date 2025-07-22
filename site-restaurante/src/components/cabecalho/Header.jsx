
import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  HouseDoor,
  CartFill,
  MenuButtonWide,
  Gift,
  TelephoneFill,
  List as ListIcon, 
} from "react-bootstrap-icons";

export default function Header() {
  const navigate = useNavigate();

  
  const handleNavLinkClick = (path) => {
    navigate(path); 
  };

  return (
    <Navbar expand="xl" variant="dark" bg="dark">
      <Container fluid>
        <Navbar.Brand
          onClick={() => handleNavLinkClick("/")}
          style={{ cursor: "pointer" }}
        >
          <HouseDoor className="me-2" /> Meu Restaurante
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <ListIcon />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavLinkClick("/cardapio")}>
              <MenuButtonWide className="me-1" /> Cardápio
            </Nav.Link>
            <Nav.Link onClick={() => handleNavLinkClick("/promocoes")}>
              <Gift className="me-1" /> Promoções
            </Nav.Link>
            <Nav.Link onClick={() => handleNavLinkClick("/contato")}>
              <TelephoneFill className="me-1" /> Contato
            </Nav.Link>
            <Nav.Link onClick={() => handleNavLinkClick("/carrinho")}>
              <CartFill className="me-1" /> Carrinho
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
