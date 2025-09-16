import React, { useState } from "react";
import axios from "axios";

export default function VenderLivro() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [status, setStatus] = useState(null); // status de sucesso ou erro

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/livros", {
        titulo,
        autor,
      });

      console.log("Livro cadastrado:", response.data);
      setStatus("sucesso");
      setTitulo("");
      setAutor("");
    } catch (error) {
      console.error("Erro ao cadastrar livro:", error);
      setStatus("erro");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-6">Cadastrar Livro para Venda</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-6"
      >
        <div>
          <label className="block mb-1 font-medium">Título</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-purple-500 outline-none"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Autor</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-purple-500 outline-none"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-bold py-3 rounded hover:bg-purple-700 transition"
        >
          Enviar
        </button>

        {status === "sucesso" && (
          <p className="text-green-600 mt-2">Livro cadastrado com sucesso!</p>
        )}
        {status === "erro" && (
          <p className="text-red-600 mt-2">Erro ao cadastrar livro.</p>
        )}
      </form>
    </div>
  );
}
