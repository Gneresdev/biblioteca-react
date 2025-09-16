import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Acervo() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/livros")
      .then((response) => {
        setLivros(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar livros:", err);
        setError("Erro ao carregar livros.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-20 text-gray-600">Carregando livros...</p>
    );
  }

  if (error) {
    return <p className="text-center mt-20 text-red-600">{error}</p>;
  }

  if (livros.length === 0) {
    return (
      <p className="text-center mt-20 text-gray-600">
        Nenhum livro disponível no momento.
      </p>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 px-12 py-12">
      <h1 className="text-5xl font-serif font-bold mb-12 mt-16 text-center text-gray-800 drop-shadow-lg">
        Livros Disponíveis
      </h1>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {livros.map((livro) => (
          <div
            key={livro._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            {livro.imagemUrl ? (
              <img
                src={livro.imagemUrl}
                alt={`Capa do livro ${livro.titulo}`}
                className="w-full h-64 object-cover"
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-400 text-xl">
                Sem imagem
              </div>
            )}

            <div className="p-6 flex-1 flex flex-col">
              <h2 className="font-semibold text-xl mb-2 text-gray-900">
                {livro.titulo}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Autor: {livro.autor.nome}
              </p>
              <p className="text-sm text-gray-700 line-clamp-3 flex-grow">
                {livro.descricao || "Sem descrição disponível."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
