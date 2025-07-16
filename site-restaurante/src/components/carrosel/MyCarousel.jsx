import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function MyCarousel() {
  return (
    <Carousel
      interval={3000} // <--- Adicione esta prop aqui! (5000 milissegundos = 5 segundos)
      controls={true} // Opcional: Para esconder as setas de navegação
      indicators={false} // Opcional: Para esconder os pontinhos de navegação
    >
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://placehold.co/100x40?text=Hamburguer"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Primeiro Item</h3>
          <p>Descrição do primeiro slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placehold.co/100x40?text=Calzone"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Segundo Item</h3>
          <p>Descrição do segundo slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Adicione mais itens Carousel.Item aqui */}
    </Carousel>
  );
}
