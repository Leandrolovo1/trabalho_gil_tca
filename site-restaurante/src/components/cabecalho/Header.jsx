// Header.jsx com React-Bootstrap
import React from "react";
// Importa os componentes Navbar, Container, Nav, Nav.Link e Button do React-Bootstrap
import { Navbar, Container, Nav, Button } from "react-bootstrap";
// Importa o useNavigate do react-router-dom
import { useNavigate } from "react-router-dom";
import {
  HouseDoor,
  CartFill,
  MenuButtonWide,
  Gift,
  TelephoneFill,
  List as ListIcon, // Adicione ListIcon se for usar no Navbar.Toggle
} from "react-bootstrap-icons";

export default function Header() {
  const navigate = useNavigate();

  // Renomeamos a função para 'handleNavLinkClick' e ela agora espera o 'path' diretamente
  const handleNavLinkClick = (path) => {
    navigate(path); // Navega para o caminho passado como argumento
  };

  return (
    <Navbar expand="xl" variant="dark" bg="dark">
      <Container fluid>
        {/*
          Chamando handleNavLinkClick com o caminho '/'.
          Lembre-se de envolver a chamada em uma função de seta () =>
          para que ela só seja executada no clique, e não durante a renderização.
        */}
        <Navbar.Brand
          onClick={() => handleNavLinkClick("/")}
          style={{ cursor: "pointer" }}
        >
          <HouseDoor className="me-2" /> Meu Restaurante
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          {/* Pode-se colocar um ícone aqui se não quiser o padrão do Bootstrap */}
          {/* Use ListIcon aqui se importou */}
          <ListIcon />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {/*
              Para cada Nav.Link, agora você passa o caminho da rota diretamente para handleNavLinkClick.
              Mantenha o envolvimento em () => para evitar a execução imediata.
              Removi o 'aria-current="page"' fixo aqui, pois ele é mais adequado para ser gerido
              dinamicamente por um componente como NavLink ou logicamente com base na rota atual.
            */}
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
