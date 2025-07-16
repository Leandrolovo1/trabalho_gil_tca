import React from "react";

export default function HeroSection() {
  return (
    // Usa uma div com classes Bootstrap para espaçamento e alinhamento do texto
    // 'py-5' adiciona padding (espaçamento interno) no topo e embaixo.
    // 'text-center' centraliza o texto.
    // 'bg-light' define um fundo claro para a seção.
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <h1 className="display-4 mb-3">Bem-vindo ao Nosso Restaurante!</h1>
        <p className="lead mb-4">
          {" "}
          Descubra os sabores que preparamos especialmente para você. Faça seu
          pedido de forma rápida e aproveite nossas promoções exclusivas!
        </p>
        <button className="btn btn-primary btn-lg">
          Ver Cardápio <i className="bi bi-arrow-right"></i>{" "}
          {/* Ícone de seta para a direita */}
        </button>
      </div>
    </div>
  );
}
