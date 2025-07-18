import React from "react";

export default function MenuItem({ produto, onAdicionarAoCarrinho }) {
  const { nome, descricao, preco, imagem } = produto;

  // Função que será chamada quando o botão "Adicionar ao Carrinho" for clicado
  const handleAdicionarClick = () => {
    // Chama a função 'onAdicionarAoCarrinho' (que veio do App.jsx)
    // e passa o 'produto' atual para ela.
    alert("Produto adicionado.");
    onAdicionarAoCarrinho(produto);
  };
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <img src={imagem} className="card-img-top" alt={nome} />
        <div className="card-body">
          <h5 className="card-title">{nome}</h5>
          <p className="card-text">{descricao}</p>
          <p className="fw-bold">R${preco.toFixed(2).replace(".", ",")}</p>
          <button
            className="btn btn-sucess btn-sm"
            onClick={handleAdicionarClick}
          >
            Adicionar ao Carrinho <i className="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
