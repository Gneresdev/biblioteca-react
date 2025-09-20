import React from "react";
import Navbar from "../components/Navbar";

export default function ListaDesejos() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start pt-24">
      <Navbar />
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">
        Sua Lista de Desejos
      </h1>
      <p className="mt-4 text-gray-300">
        Aqui você verá os livros que você salvou. A lógica para carregar os
        dados virá em breve!
      </p>
    </div>
  );
}
