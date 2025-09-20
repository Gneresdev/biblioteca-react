/* eslint-disable no-irregular-whitespace */
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Filtro from "../components/Filtro";

// Dados de exemplo para os livros
const livros = [
  {
    id: 1,
    titulo: "Fuck Macron",
    autor: "Renato Money Moicano",
    ano: 2025,
    tipo: "novo",
    editora: "Leya",
    preco: 50.0,
    categoria: "Não Ficção",
    imagem:
      "https://m.media-amazon.com/images/I/81BTog4NM8L._UF1000,1000_QL80_.jpg",
    sinopse:
      "Uma guia completa para Uma leitura provocadora sobre vocação, responsabilidade, economia e liberdade ― que começa no tatame, atravessa o UFC e faz uma crítica direta ao controle estatal e à cultura da dependência.",
  },
  {
    id: 2,
    titulo: "Papai Marx",
    autor: "Advinha",
    ano: 2011,
    tipo: "usado",
    editora: "Panini Comics",
    preco: 25.5,
    categoria: "Ciências Sociais",
    imagem: "https://m.media-amazon.com/images/I/71FXP9ye6xL.jpg",
    sinopse:
      "O Capital – Extratos por Paul Lafargue (autor do clássico Direito à Preguiça) é a compilação dos trechos essenciais da obra de Karl Marx sobre o funcionamento do capitalismo, com o objetivo de facilitar o entendimento sem perder sua profundidade.Uma edição elogiada pelo próprio Marx.",
  },
  {
    id: 3,
    titulo: "O essencial da Escola Austríaca de Economia",
    autor: "Christopher Peter J. Coyne J. Boettke",
    ano: 2022,
    tipo: "novo",
    editora: "Faro Editorial",
    preco: 80.0,
    categoria: "Economia",
    imagem:
      "https://m.media-amazon.com/images/I/61D0GAOzXQL._UF1000,1000_QL80_.jpg",
    sinopse:
      "De forma sucinta, você encontrará nesta edição uma visão geral dos princípios desta escola. “[...] o homem, com suas necessidades e seu controle sobre os meios de satisfazê-las, é o ponto de partida e de chegada de toda a economia humana.” – CARL MENGER",
  },
  {
    id: 4,
    titulo: "Histórias Para Não Dormir",
    autor: "Rodriguez Pedro",
    ano: 1985,
    tipo: "usado",
    editora: "Rocco",
    preco: 35.0,
    categoria: "Ficção",
    imagem:
      "https://images.unsplash.com/photo-1507842217343-583fd1c62b2a?q=80&w=1978&auto=format&fit=crop",
    sinopse:
      "Coletânea de contos de terror e suspense que vão te deixar acordado a noite toda.",
  },
  {
    id: 5,
    titulo: "Fotoleitura",
    autor: "Paul R. Scheele",
    ano: 1995,
    tipo: "usado",
    editora: "Prentice Hall",
    preco: 120.0,
    categoria: "Educação",
    imagem:
      "https://images.unsplash.com/photo-1590740924976-f83196a6c40a?q=80&w=1925&auto=format&fit=crop",
    sinopse:
      "Técnicas inovadoras de leitura acelerada para processar informações visuais e textuais rapidamente.",
  },
  {
    id: 6,
    titulo: "Capital",
    autor: "Karl Marx",
    ano: 2011,
    tipo: "novo",
    editora: "Panini Books",
    preco: 75.5,
    categoria: "Economia",
    imagem: "https://m.media-amazon.com/images/I/71FXP9ye6xL.jpg",
    sinopse:
      "O Capital – Extratos por Paul Lafargue (autor do clássico Direito à Preguiça) é a compilação dos trechos essenciais da obra de Karl Marx sobre o funcionamento do capitalismo.",
  },
];

export default function Acervo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const filteredLivros = livros.filter((livro) => {
    const matchesSearch =
      livro.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      livro.autor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      (minPrice === "" || livro.preco >= parseFloat(minPrice)) &&
      (maxPrice === "" || livro.preco <= parseFloat(maxPrice));
    return matchesSearch && matchesPrice;
  });
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden">
              <Navbar />       {" "}
      <div className="container mx-auto px-6 py-24">
                 {" "}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-yellow-400 mb-12">
                      Nosso Acervo          {" "}
        </h1>
                   {" "}
        <div className="flex flex-col md:flex-row gap-8">
                     {" "}
          <aside className="md:w-1/4">
                         {" "}
            <Filtro
              livros={livros}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
                       {" "}
          </aside>
                       {" "}
          <main className="md:w-3/4">
                         {" "}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                             {" "}
              {filteredLivros.map((livro) => (
                <div
                  key={livro.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                >
                                     {" "}
                  <img
                    src={livro.imagem}
                    alt={livro.titulo}
                    className="w-full h-72 object-cover transition-opacity duration-300 group-hover:opacity-30"
                  />
                                     {" "}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                         {" "}
                    <p className="text-center text-white text-sm font-light">
                                              {livro.sinopse}                   
                       {" "}
                    </p>
                                       {" "}
                  </div>
                                     {" "}
                  <div className="p-4 bg-gray-800 bg-gradient-to-t from-gray-800 to-gray-900 transition-colors duration-300 group-hover:bg-gray-700">
                                         {" "}
                    <h2 className="text-lg font-semibold">{livro.titulo}</h2>   
                                     {" "}
                    <p className="text-sm text-gray-400">{livro.autor}</p>     
                                   {" "}
                    <p className="text-xs text-gray-500 mt-1">{livro.ano}</p>   
                                     {" "}
                    <p className="text-lg font-bold text-yellow-400 mt-2">
                                              R${" "}
                      {livro.preco.toFixed(2).replace(".", ",")}               
                           {" "}
                    </p>
                                       {" "}
                  </div>
                                   {" "}
                </div>
              ))}
                           {" "}
            </div>
                       {" "}
          </main>
                   {" "}
        </div>
               {" "}
      </div>
           {" "}
    </div>
  );
}
