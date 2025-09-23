import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Filtro from "../components/Filtro";
import axios from 'axios';

export default function Acervo() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedAutores, setSelectedAutores] = useState([]);
  const [selectedTipos, setSelectedTipos] = useState([]);
  const [selectedEditoras, setSelectedEditoras] = useState([]);
  const [selectedAnos, setSelectedAnos] = useState([]);
  const [selectedCategorias, setSelectedCategorias] = useState([]);
  const [selectedIdiomas, setSelectedIdiomas] = useState([]);

  useEffect(() => {
    // Fazer a chamada da API para buscar os livros
    axios.get("http://localhost:3000/api/livros")
      .then(response => {
        setLivros(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao carregar livros:", err);
        setError("Erro ao carregar livros.");
        setLoading(false);
      });
  }, []);

  const filteredLivros = livros.filter(livro => {
    const matchesSearch = livro.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          livro.autor.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = (minPrice === "" || livro.preco >= parseFloat(minPrice)) &&
                         (maxPrice === "" || livro.preco <= parseFloat(maxPrice));
    const matchesAutores = selectedAutores.length === 0 || selectedAutores.includes(livro.autor.nome);
    const matchesTipos = selectedTipos.length === 0 || selectedTipos.includes(livro.tipo);
    const matchesEditoras = selectedEditoras.length === 0 || selectedEditoras.includes(livro.editora);
    const matchesAnos = selectedAnos.length === 0 || selectedAnos.includes(livro.ano.toString());
    const matchesCategorias = selectedCategorias.length === 0 || selectedCategorias.includes(livro.categoria);
    const matchesIdiomas = selectedIdiomas.length === 0 || selectedIdiomas.includes(livro.idioma);
    
    return matchesSearch && matchesPrice && matchesAutores && matchesTipos && matchesEditoras && matchesAnos && matchesCategorias && matchesIdiomas;
  });

  const onClearFilters = () => {
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
    setSelectedAutores([]);
    setSelectedTipos([]);
    setSelectedEditoras([]);
    setSelectedAnos([]);
    setSelectedCategorias([]);
    setSelectedIdiomas([]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Carregando livros...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  if (livros.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Nenhum livro disponível no momento.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-yellow-400 mb-12">
          Nosso Acervo
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-1/4">
            <Filtro
              livros={livros}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              selectedTipos={selectedTipos}
              setSelectedTipos={setSelectedTipos}
              selectedEditoras={selectedEditoras}
              setSelectedEditoras={setSelectedEditoras}
              selectedAnos={selectedAnos}
              setSelectedAnos={setSelectedAnos}
              selectedCategorias={selectedCategorias}
              setSelectedCategorias={setSelectedCategorias}
              selectedAutores={selectedAutores}
              setSelectedAutores={setSelectedAutores}
              selectedIdiomas={selectedIdiomas}
              setSelectedIdiomas={setSelectedIdiomas}
              onClearFilters={onClearFilters}
            />
          </aside>
          
          <main className="md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredLivros.map(livro => (
                <div 
                  key={livro._id} 
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={livro.imagemUrl} // <-- Ajuste aqui para o nome que a sua API retorna
                    alt={livro.titulo} 
                    className="w-full h-72 object-cover transition-opacity duration-300 group-hover:opacity-30" 
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <p className="text-center text-white text-sm font-light">
                      {livro.sinopse || "Sinopse não disponível."} 
                    </p>
                  </div>
                  <div className="p-4 bg-gray-800 bg-gradient-to-t from-gray-800 to-gray-900 transition-colors duration-300 group-hover:bg-gray-700">
                    <h2 className="text-lg font-semibold">{livro.titulo}</h2>
                    <p className="text-sm text-gray-400">
                      Autor: {livro.autor.nome}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Editora: {livro.editora}
                    </p>
                    <p className="text-lg font-bold text-yellow-400 mt-2">
                      R$ {livro.preco.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}