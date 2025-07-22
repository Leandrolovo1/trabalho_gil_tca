import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function MyCarousel() {
  return (
    <Carousel
      interval={3000}
      controls={true} 
      indicators={false} 
    >
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://placehold.co/100x40/brown/white?text=Hamburguer"
          alt="Primeira foto da carrosel."
        />
        <Carousel.Caption className="d-none d-md-block">
          <h3>Escolha já o seu preferido!!</h3>
          <p>Delicioso e saboroso</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placehold.co/100x40/gold/white?text=Calzone"
          alt="Segunda foto da carrosel."
        />
        <Carousel.Caption className="d-none d-md-block">
          <h3>Escolha já o seu preferido!!</h3>
          <p>Delicioso e saboroso</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}
