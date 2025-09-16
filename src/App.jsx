import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Acervo from "./pages/Acervo";
import VenderLivro from "./pages/VenderLivro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acervo" element={<Acervo />} />
        <Route path="/vender" element={<VenderLivro />} />
      </Routes>
    </Router>
  );
}

export default App;
