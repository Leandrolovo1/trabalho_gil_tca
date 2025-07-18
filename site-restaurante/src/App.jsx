// src/App.jsx

import React, { useState } from "react"; // Importa o React
import Header from "./components/cabecalho/Header";
import HeroSection from "./components/secaoPrincipal/HeroSection";
import MenuSection from "./components/secaoMenu/MenuSection";

import "./App.css"; // Importa o CSS padrão do App, que o Vite já cria
import MyCarousel from "./components/carrosel/MyCarousel";
import { Outlet } from "react-router-dom";

function App() {
  // eslint-disable-next-line no-undef
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
  };
  return (
    <>
      <main>
        <Header />
        {/*
          O <Outlet> é onde o conteúdo da rota atual será renderizado.
          Se você estiver na "/", o conteúdo de Home.jsx será renderizado aqui.
          Se estiver em "/cardapio", o conteúdo de Cardapio.jsx será renderizado aqui.
          E assim por diante.
        */}
        <Outlet context={{ carrinho, adicionarAoCarrinho }} />
      </main>
      {/* <Footer /> */} {/* Se você criar um Footer, ele viria aqui */}
    </>
  );
}

export default App;
