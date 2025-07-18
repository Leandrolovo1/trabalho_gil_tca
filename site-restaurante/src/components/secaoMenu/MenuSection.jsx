import React, { useState } from "react";
import MenuItem from "../itemCardapio/MenuItem";
import BotaoVoltar from "../BotaoVoltar/BotaoVoltar";
export default function MenuSection({ onAdicionarAoCarrinho }) {
  // eslint-disable-next-line no-unused-vars
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: "Hambúrguer Clássico",
      descricao:
        "Pão brocha, Hambúrguer de 180g, queijo cheddar, alface, tomate e molho especial.",
      preco: 32.5,
      imagem: "https://placehold.co/300x200?text=Hamburguer",
    },
    {
      id: 2,
      nome: "Pizza Margherita",
      descricao:
        "Molho de tomate fresco, mussarela de búfala, manjericão e azeite.",
      preco: 45.0,
      imagem: "https://placehold.co/300x200?text=Pizza",
    },
    {
      id: 3,
      nome: "Batata Frita Mega",
      descricao:
        "Porção generosa de batatas fritas crocantes com tempero da casa.",
      preco: 18.9,
      imagem: "https://placehold.co/300x200?text=Batata+Frita",
    },
    {
      id: 4,
      nome: "Coca-Cola Lata",
      descricao: "Refrigerante 350ml.",
      preco: 7.0,
      imagem: "https://placehold.co/300x200?text=Coca-Cola",
    },
  ]);

  return (
    <section className="container py-5">
      <h2 className="text-center mb-5">Nosso Cardápio Delicioso</h2>
      <BotaoVoltar />
      <div className="row">
        {produtos.map((produto) => (
          <MenuItem
            key={produto.id} // Usamos o 'id' do produto como a 'key'
            produto={produto}
            onAdicionarAoCarrinho={onAdicionarAoCarrinho}
          />
        ))}
      </div>
    </section>
  );
}
