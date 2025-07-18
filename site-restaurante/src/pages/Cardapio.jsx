import React from "react";
import MenuSection from "../components/secaoMenu/MenuSection";
import { useOutletContext } from "react-router-dom";

export default function Cardapio() {
  const { adicionarAoCarrinho } = useOutletContext();
  // Recebe os itens do carrinho como prop
  return <MenuSection onAdicionarAoCarrinho={adicionarAoCarrinho} />;
}
