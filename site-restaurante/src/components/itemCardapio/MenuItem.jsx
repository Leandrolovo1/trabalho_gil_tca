import React from "react";

export default function ItemMenu({ nome, descricao, preco, imagem }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <img src={imagem} className="card-img-top" alt={nome} />
        <div className="card-body">
          <h5 className="card-title">{nome}</h5>
          <p className="card-text">{descricao}</p>
          <p className="fw-bold">R${preco.toFixed(2).replace(".", ",")}</p>
          <button className="btn btn-sucess btn-sm">
            Adicionar ao Carrinho <i className="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
