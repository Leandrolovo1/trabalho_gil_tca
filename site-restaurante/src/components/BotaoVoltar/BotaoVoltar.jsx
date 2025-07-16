import { useNavigate } from "react-router-dom";

export default function BotaoVoltar() {
  const navigate = useNavigate();

  const Voltar = () => {
    navigate(-1);
  };
  return (
    <div className="text-center mt-5">
      <button className="btn btn-primary btn-lg" onClick={Voltar}>
        Voltar para página anterior
      </button>
      <br />
      <br />
    </div>
  );
}
