// src/pages/Promocoes.jsx
import React from "react";

export default function Promocoes() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Promoções Especiais!</h2>
      <p className="text-center">
        Fique de olho nas nossas ofertas imperdíveis!
      </p>
      {/* Adicione conteúdo real para promoções aqui */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Combo Família</h5>
              <p className="card-text">
                2 hambúrgueres, 2 batatas e refrigerante grande por R$ 59,90!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sobremesa Grátis</h5>
              <p className="card-text">
                Na compra de qualquer prato principal, ganhe uma sobremesa!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
