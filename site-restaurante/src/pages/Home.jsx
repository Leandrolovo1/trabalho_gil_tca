
import React from "react";
import MyCarousel from "../components/carrosel/MyCarousel"; 
import HeroSection from "../components/secaoPrincipal/HeroSection"; 
export default function Home() {
  return (
    <>
      <MyCarousel />
      <br />
      <HeroSection />
      <p>Bem-vindo ao site do Restaurante!</p>
      <p>
        Aqui você poderá ver o cardápio, as promoções, os nossos contato e até
        mesmo fazer seu pedido.
      </p>
    </>
  );
}
