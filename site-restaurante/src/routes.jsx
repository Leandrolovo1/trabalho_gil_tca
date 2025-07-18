import { createBrowserRouter } from "react-router-dom";
import Cardapio from "./pages/Cardapio";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Promocoes from "./pages/Promocoes";
import Carrinho from "./pages/Carrinho";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      { path: "/Cardapio", element: <Cardapio /> },

      { path: "/Contato", element: <Contato /> },

      { path: "/Promocoes", element: <Promocoes /> },

      { path: "/Carrinho", element: <Carrinho /> },
      {
        path: "*", // Uma rota "coringa" para qualquer URL que não corresponda às anteriores (página 404)
        element: <h2 className="text-center py-5">Página Não Encontrada!</h2>,
      },
    ],
  },
]);
export default router;
