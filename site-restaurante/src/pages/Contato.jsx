// src/pages/Contato.jsx
import React from 'react';

export default function Contato() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Fale Conosco</h2>
      <p className="text-center">Entre em contato para dúvidas, sugestões ou reservas.</p>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4">
            <p><strong>Telefone:</strong> (XX) XXXX-XXXX</p>
            <p><strong>Email:</strong> contato@meurestaurante.com</p>
            <p><strong>Endereço:</strong> Rua Exemplo, 123 - Centro, Cidade - Estado</p>
            <hr />
            <h4>Horário de Funcionamento:</h4>
            <ul>
              <li>Segunda a Sexta: 11:00 - 23:00</li>
              <li>Sábado e Domingo: 12:00 - 00:00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}