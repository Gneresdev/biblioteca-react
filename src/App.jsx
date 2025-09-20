import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Acervo from "./pages/Acervo";
import VenderLivro from "./pages/VenderLivro";
import Login from "./pages/Login";
import ListaDesejos from "./pages/ListaDesejos";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acervo" element={<Acervo />} />
        <Route path="/vender" element={<VenderLivro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/lista-desejos" element={<ListaDesejos />} />
      </Routes>
    </Router>
  );
}

export default App;
