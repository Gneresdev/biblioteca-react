import React from "react";

// Dados estáticos de exemplo para as categorias

export default function Filtro({ livros }) {
  // Função para extrair opções únicas de um array de objetos
  const getUniqueOptions = (key) => {
    return [...new Set(livros.map((livro) => livro[key]))].sort();
  };

  const autores = getUniqueOptions("autor");
  const anos = getUniqueOptions("ano");
  const tipos = getUniqueOptions("tipo");
  const editoras = getUniqueOptions("editora");
  const categorias = getUniqueOptions("categoria");
  // const idiomas = getUniqueOptions("idioma");

  return (
    <div className="w-full md:w-64 p-6 rounded-2xl shadow-xl border border-white/20 bg-white/5 backdrop-filter backdrop-blur-lg text-white">
      <h2 className="text-2xl font-bold mb-6 text-yellow-400">Filtrar</h2>
      {/* Campo de Pesquisa */}
      <div className="mb-6">
        <label htmlFor="search" className="font-semibold text-lg mb-2 block">
          Pesquisar
        </label>
        <input
          type="text"
          id="search"
          placeholder="Pesquisar por título, autor..."
          className="w-full p-2 text-sm bg-gray-700 border border-gray-600 rounded-md focus:ring-yellow-400 focus:border-yellow-400"
        />
      </div>
      {/* Filtro de Autor */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Autor</h3>
        <ul className="space-y-1 max-h-36 overflow-y-auto custom-scrollbar">
          {autores.map((autor) => (
            <li key={autor}>
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="form-checkbox text-yellow-400 bg-gray-700 border-gray-600 rounded"
                />
                <span className="ml-2">{autor}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Filtro de Ano de Publicação */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Ano de Publicação</h3>
        <ul className="space-y-1 max-h-36 overflow-y-auto custom-scrollbar">
          {anos.map((ano) => (
            <li key={ano}>
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="form-checkbox text-yellow-400 bg-gray-700 border-gray-600 rounded"
                />
                <span className="ml-2">{ano}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Filtro de Tipo de Livro */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Tipo de Livro</h3>
        <ul className="space-y-1">
          {tipos.map((tipo) => (
            <li key={tipo}>
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="form-checkbox text-yellow-400 bg-gray-700 border-gray-600 rounded"
                />
                <span className="ml-2 capitalize">{tipo}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Filtro de Editora */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Editora</h3>
        <ul className="space-y-1 max-h-36 overflow-y-auto custom-scrollbar">
          {editoras.map((editora) => (
            <li key={editora}>
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="form-checkbox text-yellow-400 bg-gray-700 border-gray-600 rounded"
                />
                <span className="ml-2">{editora}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Filtro de Categoria */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Categoria</h3>
        <ul className="space-y-1 max-h-36 overflow-y-auto custom-scrollbar">
          {categorias.map((categoria) => (
            <li key={categoria}>
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="form-checkbox text-yellow-400 bg-gray-700 border-gray-600 rounded"
                />
                <span className="ml-2">{categoria}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Filtro de Idioma */}
      {/*
        <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Idioma</h3>
        <ul className="space-y-1 max-h-36 overflow-y-auto custom-scrollbar">
        {idiomas.map((idioma) => (
        <li key={idioma}>
        <label className="flex items-center text-sm">
          <input
            type="checkbox"
            className="form-checkbox text-yellow-400 bg-gray-700 border-gray-600 rounded"/>
                    <span className="ml-2">{idioma}</span>
                    </label>
                </li>
            ))}
        </ul>
        </div>
*/}
      {/* Filtro de Preço */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Preço</h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Mínimo"
            className="w-1/2 p-2 text-sm bg-gray-700 border border-gray-600 rounded-md focus:ring-yellow-400 focus:border-yellow-400"
          />
          <input
            type="number"
            placeholder="Máximo"
            className="w-1/2 p-2 text-sm bg-gray-700 border border-gray-600 rounded-md focus:ring-yellow-400 focus:border-yellow-400"
          />
        </div>
      </div>
      {/* Botões de Ação */}
      <div className="flex flex-col space-y-2">
        <button className="w-full py-2 px-4 bg-yellow-500 text-gray-900 font-bold rounded-md hover:bg-yellow-600 transition-colors duration-200">
          Aplicar Filtros
        </button>
        <button className="w-full py-2 px-4 bg-transparent text-white border border-white/20 rounded-md hover:bg-white/10 transition-colors duration-200">
          Limpar Filtros
        </button>
      </div>
    </div>
  );
}
