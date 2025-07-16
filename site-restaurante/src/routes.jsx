import { createBrowserRouter } from "react-router-dom";
import Cardapio from "./pages/Cardapio";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Promocoes from "./pages/Promocoes";
import Carrinho from "./pages/Carrinho";
const router = createBrowserRouter([
  { path: "/home", element: <Home /> },

  { path: "/Cardapio", element: <Cardapio /> },

  { path: "/Contato", element: <Contato /> },

  { path: "/Promocoes", element: <Promocoes /> },

  { path: "/Carrinho", element: <Carrinho /> },
]);
export default router;
