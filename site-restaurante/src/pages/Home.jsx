// src/pages/Home.jsx
import React from "react";
import MyCarousel from "../components/carrosel/MyCarousel"; // Ajuste o caminho se necessário
import HeroSection from "../components/secaoPrincipal/HeroSection"; // Ajuste o caminho se necessário
import Header from "../components/cabecalho/Header"; // Ajuste o caminho se necessário
export default function Home() {
  return (
    <>
    
      <MyCarousel />
      <HeroSection />
      {/* Você pode adicionar outros elementos da sua página inicial aqui */}
      <p>Bem-vindo ao site do Restaurante!</p>
      <p>Aqui você poderá ver o cardápio, fazer pedidos e muito mais.</p>
    </>
  );
}
