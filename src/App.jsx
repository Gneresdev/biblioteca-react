import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home"; // cuidado com o nome: H maiúsculo!
import './index.css'; // importa o Tailwind (se estiver aqui)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Adicione outras rotas aqui no futuro, tipo /livros, /sobre etc */}
      </Routes>
    </Router>
  );
}

export default App;
