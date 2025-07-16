// src/pages/Carrinho.jsx
import React from "react";
import BotaoVoltar from "../components/BotaoVoltar/BotaoVoltar";

export default function Carrinho({ carrinhoItems }) {
  // Recebe os itens do carrinho como prop
  return (
    <div className="container py-5">
      <BotaoVoltar />

      <h2 className="text-center mb-4">Seu Carrinho de Pedidos</h2>
      {carrinhoItems && carrinhoItems.length > 0 ? (
        <ul className="list-group">
          {carrinhoItems.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.nome} - R$ {item.preco.toFixed(2).replace(".", ",")}
              {/* Você pode adicionar botões de remover ou ajustar quantidade aqui */}
            </li>
          ))}
          <li className="list-group-item active d-flex justify-content-between align-items-center mt-3">
            <strong>Total:</strong> R${" "}
            {carrinhoItems
              .reduce((acc, item) => acc + item.preco, 0)
              .toFixed(2)
              .replace(".", ",")}
          </li>
        </ul>
      ) : (
        <p className="text-center text-muted">Seu carrinho está vazio.</p>
      )}
    </div>
  );
}
