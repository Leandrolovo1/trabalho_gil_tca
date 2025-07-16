// Header.jsx com React-Bootstrap
import React from "react";
// Importa os componentes Navbar, Container, Nav, Nav.Link e Button do React-Bootstrap
import { Navbar, Container, Nav, Button } from "react-bootstrap";
// Importa o ícone de hambúrguer para o Toggler
import {
  HouseDoor,
  CartFill,
  MenuButtonWide,
  Gift,
  TelephoneFill,
} from "react-bootstrap-icons"; // Exemplo: se estivesse usando react-bootstrap-icons

export default function Header() {
  return (
    // Usa o componente Navbar. O 'expand' e 'bg' são props do componente
    <Navbar expand="sm" variant="dark" bg="dark">
      {/* Usa o componente Container */}
      <Container fluid>
        <Navbar.Brand href="#">
          <HouseDoor /> Meu Restaurante
        </Navbar.Brand>
        {/* Navbar.Toggle substitui o botão com data-bs-toggle. O 'aria-controls' é uma prop. */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          {/* Pode-se colocar um ícone aqui se não quiser o padrão do Bootstrap */}
          {/* <ListIcon /> ou <span className="navbar-toggler-icon"></span> */}
        </Navbar.Toggle>
        {/* Navbar.Collapse substitui o div.collapse. O 'id' é uma prop. */}
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* O componente Nav substitui a ul. O 'ms-auto' (margin start auto) é uma classe Bootstrap comum. */}
          <Nav className="ms-auto">
            {/* Nav.Link substitui li.nav-item e a.nav-link. 'active' e 'aria-current' são props. */}
            <Nav.Link href="#" aria-current="page">
              <MenuButtonWide /> Cardápio
            </Nav.Link>
            <Nav.Link href="#">
              <Gift /> Promoções
            </Nav.Link>
            <Nav.Link href="#">
              <TelephoneFill /> Contato
            </Nav.Link>
            <Nav.Link href="#">
              <CartFill /> Carrinho
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
