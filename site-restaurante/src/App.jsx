// src/App.jsx

import React from "react"; // Importa o React
import Header from "./components/cabecalho/Header";
import HeroSection from "./components/secaoPrincipal/HeroSection";
import MenuSection from "./components/secaoMenu/MenuSection";

import "./App.css"; // Importa o CSS padrão do App, que o Vite já cria
import MyCarousel from "./components/carrosel/MyCarousel";

function App() {
  return (
    <>
      {/* Fragmento React: permite retornar múltiplos elementos sem um div extra */}
      <Header /> {/* Aqui estamos USANDO o nosso componente Header! */}
      <MyCarousel />{" "}
      <main>
        <HeroSection />
        <p>Bem-vindo ao site do Restaurante!</p>
        <p>Aqui você poderá ver o cardápio, fazer pedidos e muito mais.</p>
        <MenuSection />
      </main>
      {/* <Footer /> */} {/* Se você criar um Footer, ele viria aqui */}
    </>
  );
}

export default App;
