import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 backdrop-filter backdrop-blur-lg bg-white/10 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="text-2xl font-bold text-yellow-400 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Sebo Virtual
        </div>
        <div className="flex space-x-4">
          <button
            className="px-6 py-2 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-colors duration-300 transform hover:scale-105"
            onClick={() => navigate("/lista-desejos")}
          >
            Lista de Desejos
          </button>
          <button
            className="px-6 py-2 text-black bg-yellow-400 font-bold rounded-full hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="px-6 py-2 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300 transform hover:scale-105"
            onClick={() => navigate("/cadastro")}
          >
            Cadastre-se
          </button>
        </div>
      </div>
    </nav>
  );
}
