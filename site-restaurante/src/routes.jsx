import { createBrowserRouter } from "react-router-dom";
import Cardapio from "./pages/Cardapio";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Promocoes from "./pages/Promocoes";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },

  { path: "/Cardapio", element: <Cardapio /> },

  { path: "/Contato", element: <Contato /> },

  { path: "/Promocoes", element: <Promocoes /> },
]);
export default router;
