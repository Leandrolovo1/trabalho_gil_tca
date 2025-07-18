// src/pages/Carrinho.jsx
import React from "react"; // Não precisamos mais do useState aqui
import BotaoVoltar from "../components/BotaoVoltar/BotaoVoltar";
import { useOutletContext } from "react-router-dom";

// Renomeado para CarrinhoPage para consistência
export default function CarrinhoPage() {
  const { carrinho } = useOutletContext(); // Recebe os itens do carrinho do contexto do App.jsx

  // Calcula o total do carrinho
  const totalCarrinho = carrinho.reduce((total, item) => total + item.preco, 0);

  return (
    <div className="container py-5">
      {/* O botão "Voltar" agora está no local certo dentro da div principal */}
      <BotaoVoltar /> 

      <h2 className="text-center mb-4">Seu Carrinho de Pedidos</h2>
      {/* Verifica se o carrinho existe e se tem itens */}
      {carrinho && carrinho.length > 0 ? (
        <ul className="list-group">
          {carrinho.map((item, index) => (
            <li
              key={index} // Usar 'index' como key é ok para listas estáticas, mas 'item.id' seria melhor se os itens tivessem um ID único e pudessem ser reordenados/removidos.
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.nome} - R$ {item.preco.toFixed(2).replace(".", ",")}
              {/* Você pode adicionar botões de remover ou ajustar quantidade aqui */}
            </li>
          ))}
          <li className="list-group-item active d-flex justify-content-between align-items-center mt-3">
            <strong>Total:</strong>{" "}
            R$ {totalCarrinho.toFixed(2).replace(".", ",")} {/* Usamos a variável totalCarrinho que já calculamos */}
          </li>
        </ul>
      ) : (
        <p className="text-center text-muted">Seu carrinho está vazio.</p>
      )}
    </div>
  );
}