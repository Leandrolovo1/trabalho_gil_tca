
import React from "react";
import BotaoVoltar from "../components/BotaoVoltar/BotaoVoltar";

export default function Contato() {
  return (
    <div className="container py-5">
      <BotaoVoltar />
      <h2 className="text-center mb-4">Fale Conosco</h2>
      <p className="text-center">
        Entre em contato para dúvidas, sugestões ou reservas.
      </p>
      <div className="row justify-content-center">
        <div className="col-md-8 ">
          <div className="card p-4 fs-5 ">
            <p>
              <strong>Telefone:</strong> (41) 91234-4321
            </p>
            <p>
              <strong>Email:</strong> contato@aquelerestaurante.com
            </p>
            <p>
              <strong>Endereço:</strong> Rua jaguara, 123 - Centro, São Paulo -
              Rio de Janeiro
            </p>
            <p>
              <strong>Instagram:</strong>{" "}
              <a href="https://www.instagram.com/leandrolov0" target="_blank">
                Nosso Instagram
              </a>
            </p>
            <hr />
            <h4>Horário de Funcionamento:</h4>
            <ul className="ps-3">
              <li>Segunda a Sexta: 11:00 - 23:00</li>
              <li>Sábado e Domingo: 12:00 - 00:00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
