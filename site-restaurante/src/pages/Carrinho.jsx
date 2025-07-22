
import React from "react"; 
import BotaoVoltar from "../components/BotaoVoltar/BotaoVoltar";
import { useOutletContext } from "react-router-dom";

export default function CarrinhoPage() {
  const { carrinho } = useOutletContext(); // Recebe os itens do carrinho do contexto do App.jsx

  
  const totalCarrinho = carrinho.reduce((total, item) => total + item.preco, 0);

  return (
    <div className="container py-5">
      <BotaoVoltar /> 

      <h2 className="text-center mb-4">Seu Carrinho de Pedidos</h2>
      {carrinho && carrinho.length > 0 ? (
        <ul className="list-group">
          {carrinho.map((item, index) => (
            <li
              key={index} 
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.nome} - R$ {item.preco.toFixed(2).replace(".", ",")}
            </li>
          ))}
          <li className="list-group-item active d-flex justify-content-between align-items-center mt-3">
            <strong>Total:</strong>{" "}
            R$ {totalCarrinho.toFixed(2).replace(".", ",")}
          </li>
        </ul>
      ) : (
        <p className="text-center text-muted">Seu carrinho está vazio.</p>
      )}
    </div>
  );
}