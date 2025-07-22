import React from "react";
import { useNavigate } from "react-router-dom";
export default function HeroSection() {
  const navigate = useNavigate();

  const verCardapio = () => {
    navigate("/cardapio");
  };
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <h1 className="display-4 mb-3">Bem-vindo ao Nosso Restaurante!</h1>
        <p className="lead mb-4">
          {" "}
          Descubra os sabores que preparamos especialmente para você. Faça seu
          pedido de forma rápida e aproveite nossas promoções exclusivas!
        </p>
        <button onClick={verCardapio} className="btn btn-primary btn-lg">
          Ver Cardápio <i className="bi bi-arrow-right"></i>{" "}
        </button>
      </div>
    </div>
  );
}
